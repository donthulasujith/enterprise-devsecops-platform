# 01 — Project Overview

## Enterprise DevSecOps Platform

A production-inspired DevSecOps security platform demonstrating how security controls can be integrated across the software development lifecycle—from source code and CI/CD through containerization, Kubernetes deployment, and runtime security validation.

> **Application under assessment:** OWASP Juice Shop 20.1.1
>
> Juice Shop is intentionally vulnerable. The purpose of this project is **not** to remove its intentional vulnerabilities. Instead, the platform demonstrates how an enterprise security team can identify, assess, gate, contain, and document risk while still delivering an application through an automated pipeline.

---

## 1. Purpose

The project demonstrates a practical Secure Software Development Lifecycle (SSDLC) in which security is treated as an engineering control rather than a final-stage checklist.

The implementation covers four major layers:

1. **Application and source security** — threat modeling, SAST, dependency/security scanning, and secret detection.
2. **Build and supply-chain security** — hardened multi-stage container construction and image scanning.
3. **Deployment security** — Kubernetes security contexts, filesystem restrictions, capability reduction, resource controls, probes, and network policy.
4. **Runtime validation** — direct verification that the deployed workload actually enforces the intended container security controls.

The result is a portfolio project that demonstrates both **security analysis** and **security engineering**.

---

## 2. Security Philosophy

The project follows a simple principle:

> **Find risk early, enforce security automatically, and verify that controls remain effective at runtime.**

Security controls are therefore distributed across the lifecycle instead of relying on a single scanner.

```text
Developer
   ↓
Source Code
   ↓
Threat Model
   ↓
GitHub Actions
   ├── Semgrep (SAST)
   ├── Gitleaks (Secrets)
   ├── Trivy (Filesystem / Dependencies)
   ├── Docker Build
   ├── Trivy (Container Image)
   ├── OWASP ZAP (DAST)
   └── Checkov (Kubernetes IaC)
   ↓
Hardened Docker Image
   ↓
Kubernetes Deployment
   ├── Non-root execution
   ├── Read-only root filesystem
   ├── Dropped Linux capabilities
   ├── No privilege escalation
   ├── RuntimeDefault seccomp
   ├── Disabled ServiceAccount token mounting
   ├── Resource requests/limits
   ├── Health probes
   └── Ingress NetworkPolicy
   ↓
Runtime Security Validation
   ↓
Running Application
```

---

## 3. Objectives

### Primary objectives

- Build an end-to-end DevSecOps pipeline.
- Integrate automated security testing into CI/CD.
- Demonstrate threat modeling using STRIDE.
- Detect source-code security issues with SAST.
- Detect secrets and credentials with Gitleaks.
- Identify vulnerable dependencies and image packages with Trivy.
- Perform dynamic application security testing with OWASP ZAP.
- Scan Kubernetes manifests with Checkov.
- Build a hardened multi-stage Docker image.
- Deploy the workload using Kubernetes security controls.
- Validate security assumptions directly against the running container.
- Document findings, mitigations, limitations, and future improvements.

### Engineering objective

The goal is not to claim that the application is vulnerability-free. The goal is to demonstrate a repeatable process for **security visibility, risk reduction, and security enforcement**.

---

## 4. Scope

### Implemented scope

| Area | Implementation | Status |
|---|---|---|
| Source control | Git / GitHub | Implemented |
| Threat modeling | STRIDE-based model | Implemented |
| SAST | Semgrep | Implemented |
| Secret scanning | Gitleaks | Implemented |
| Dependency/filesystem scanning | Trivy | Implemented |
| Container security | Multi-stage Dockerfile + Trivy | Implemented |
| DAST | OWASP ZAP Full Scan | Implemented |
| Kubernetes IaC security | Checkov | Implemented |
| Kubernetes hardening | Security contexts and workload controls | Implemented |
| Network control | Kubernetes NetworkPolicy | Implemented |
| Runtime validation | kubectl-based security tests | Implemented |
| Security documentation | Markdown documentation | Implemented |

### Explicitly out of current scope

The repository does **not** currently claim to implement a complete enterprise observability stack such as Prometheus/Grafana/Loki, or a dedicated runtime detection engine such as Falco. These can be added as future enhancements rather than being represented as completed controls.

---

## 5. Security Control Matrix

| Lifecycle Stage | Security Control | Purpose |
|---|---|---|
| Design | Threat Modeling | Identify threats before deployment |
| Source | Semgrep | Detect insecure coding patterns |
| Source | Gitleaks | Detect committed secrets |
| Dependencies | Trivy | Identify vulnerable packages/files |
| Build | Multi-stage Docker | Reduce runtime image contents |
| Image | Trivy Image Scan | Detect image vulnerabilities |
| Deployment | Checkov | Detect insecure Kubernetes configuration |
| Runtime | Non-root | Reduce process privilege |
| Runtime | Read-only root FS | Prevent arbitrary writes to the image filesystem |
| Runtime | Capability drop | Reduce Linux privilege surface |
| Runtime | No privilege escalation | Prevent gaining additional privileges |
| Runtime | Seccomp RuntimeDefault | Restrict available system calls |
| Runtime | Token automount disabled | Reduce Kubernetes credential exposure |
| Runtime | Resource limits | Reduce resource exhaustion impact |
| Runtime | NetworkPolicy | Restrict ingress to the workload |
| Runtime | Probes | Validate workload health |
| Dynamic | OWASP ZAP | Identify externally observable web vulnerabilities |

---

## 6. CI/CD Security Model

The pipeline is designed so that multiple independent controls inspect the same delivery process.

### Why multiple scanners?

No single scanner provides complete coverage. Static analysis can identify source-level patterns but cannot observe deployed behavior. DAST can observe HTTP behavior but cannot inspect every source-level weakness. Container scanning identifies package vulnerabilities but does not prove that Kubernetes is securely configured.

Using multiple controls creates defense in depth:

```text
SAST       → source-level weaknesses
Gitleaks   → exposed credentials/secrets
Trivy FS   → dependency/filesystem vulnerabilities
Trivy Image→ container package vulnerabilities
ZAP        → deployed application behavior
Checkov    → Kubernetes configuration weaknesses
Runtime    → whether hardening actually works
```

---

## 7. Kubernetes Security Posture

The deployed Juice Shop workload uses several defense-in-depth controls:

- Runs as UID `65532`, rather than UID 0.
- Uses a read-only root filesystem.
- Allows writes only through explicitly mounted writable volumes required by the application.
- Disables privilege escalation.
- Drops all Linux capabilities.
- Uses the Kubernetes `RuntimeDefault` seccomp profile.
- Disables automatic ServiceAccount token mounting.
- Defines CPU and memory requests/limits.
- Uses readiness and liveness probes.
- Applies an ingress NetworkPolicy allowing port `3000` only from the Juice Shop namespace.

The writable `emptyDir` volumes are intentionally ephemeral. They solve the application's runtime write requirements without making the entire container filesystem writable.

---

## 8. Runtime Security Validation

The project validates the controls instead of merely declaring them.

Examples of validation performed against the running workload:

| Test | Expected Result |
|---|---|
| Inspect process identity | UID `65532` |
| Write to `/app/runtime-test` | Denied |
| Write to `/app/data` | Allowed because it is an explicitly writable volume |
| Inspect Linux capabilities | All effective capabilities absent |
| Inspect application status | Pod reaches `1/1 Running` |

This distinction is important: a security configuration is stronger when it is accompanied by evidence that the control is active.

---

## 9. Project Outcome

The completed platform demonstrates a realistic security workflow:

1. Model threats.
2. Scan source and dependencies.
3. Detect secrets.
4. Build a hardened image.
5. Scan the image.
6. Scan Kubernetes configuration.
7. Deploy with runtime hardening.
8. Dynamically test the application.
9. Enforce a defined DAST gate.
10. Validate runtime controls directly.
11. Document residual risk and future improvements.

This makes the repository more than a collection of security tools: it demonstrates how those tools fit together into a coherent DevSecOps operating model.
