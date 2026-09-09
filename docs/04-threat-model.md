# 04 — Threat Model

## Enterprise DevSecOps Platform

## 1. Methodology

The threat model uses **STRIDE** to identify security threats across the DevSecOps delivery path.

The model focuses on realistic attack paths against the software supply chain, CI/CD system, container build, and Kubernetes runtime. Threats are not limited to the application itself because a secure application can still be compromised through an insecure build or deployment pipeline.

---

## 2. Assets

| Asset | Security Importance |
|---|---|
| Source Code | Integrity of application behavior |
| GitHub Repository | Source and pipeline trust anchor |
| GitHub Actions Workflow | Controls what code executes in CI |
| CI Runner | Executes untrusted/build instructions |
| Secrets | Authentication and authorization material |
| Dependencies | Supply-chain trust |
| Dockerfile | Controls artifact construction |
| Container Image | Deployable application artifact |
| Kubernetes Manifests | Define runtime security posture |
| Kubernetes Workload | Running application and data |
| Application Data | Confidentiality and integrity |
| Security Reports | Evidence used for security decisions |

---

## 3. System Scope

The threat model covers:

```text
Developer
   ↓
GitHub
   ↓
GitHub Actions
   ↓
Security Scanners
   ↓
Docker Build
   ↓
Container Image
   ↓
Kubernetes
   ↓
Juice Shop
   ↓
External HTTP Client
```

Monitoring-stack threats are not modeled as an implemented architecture component because a dedicated monitoring stack is not currently deployed.

---

## 4. Trust Boundaries

1. **TB-01 — Developer ↔ GitHub**
2. **TB-02 — GitHub ↔ GitHub Actions**
3. **TB-03 — Build Environment ↔ Container Artifact**
4. **TB-04 — CI/CD ↔ Kubernetes**
5. **TB-05 — External Client ↔ Application**

These boundaries represent points where data, authority, or trust changes between components.

---

## 5. STRIDE Threats

| ID | Component / Flow | STRIDE | Threat | Severity | Primary Mitigation | Status |
|---|---|---|---|---|---|---|
| T01 | Developer → GitHub | Spoofing | A compromised developer account could be used to access or modify the repository. | High | MFA, least privilege, protected branches | Mitigated / planned repository controls |
| T02 | Developer → GitHub | Tampering | Unauthorized or malicious source-code changes could be introduced. | High | Pull requests, code review, branch protection | Mitigated through workflow/review process |
| T03 | Source → GitHub | Information Disclosure | Secrets or credentials could be accidentally committed. | High | Gitleaks, secret management, repository scanning | Implemented |
| T04 | GitHub → Actions | Tampering | A malicious workflow modification could bypass or alter security controls. | High | Workflow review, protected branches, permissions | Partially mitigated |
| T05 | GitHub → Actions | Elevation of Privilege | Excessive Actions permissions could allow a compromised workflow to perform unauthorized actions. | High | Least-privilege permissions | Implemented at workflow level; further tightening possible |
| T06 | GitHub → Actions | Information Disclosure | Secrets available to a runner could be exposed through build output or malicious code. | High | Minimal secret exposure, GitHub Secrets, permissions | Partially mitigated |
| T07 | Dependencies → Build | Tampering | A vulnerable or malicious dependency could compromise the application or build. | High | Trivy, lockfiles, dependency review | Implemented / residual risk remains |
| T08 | Docker Build → Image | Tampering | A malicious Dockerfile or build change could produce a compromised image. | High | Code review, protected workflow, Trivy image scanning | Implemented / residual risk remains |
| T09 | Actions → Security Results | Tampering / Information Disclosure | Security results could be manipulated, suppressed, or exposed to unauthorized users. | Medium | Protected workflows, security-events permissions, repository access | Partially mitigated |
| T10 | External Client → Application | Spoofing / Tampering | An attacker could send crafted requests while appearing as a legitimate client. | High | Application authentication/authorization controls and DAST | Application remains intentionally vulnerable |
| T11 | External Client → Application | Information Disclosure | Application vulnerabilities could expose sensitive data. | High | DAST, application security testing, runtime containment | Detected/triaged |
| T12 | Compromised Workload → Kubernetes | Elevation of Privilege | A compromised process could attempt to gain additional Linux/Kubernetes privileges. | High | Non-root, no privilege escalation, dropped capabilities, seccomp, disabled token automount | Implemented |
| T13 | Compromised Workload → Filesystem | Tampering | A compromised process could modify application files or persistence locations. | High | Read-only root filesystem, explicit writable volumes | Implemented |
| T14 | External Network → Workload | Tampering / Information Disclosure | Unnecessary network access could expose or attack the application. | Medium | Kubernetes Service and ingress NetworkPolicy | Implemented for ingress; egress unrestricted |

---

## 6. Threat Analysis

### T01 — Compromised Developer Account

**Threat:** An attacker obtains developer credentials and uses legitimate repository access.

**Potential impact:** malicious code, secrets, or workflow changes could be introduced without requiring exploitation of the application itself.

**Controls:** MFA, least privilege, pull-request review, protected branches.

**Residual risk:** account compromise remains possible even when repository controls are present.

---

### T03 — Secret Exposure

**Threat:** A developer accidentally commits a credential or API token.

**Potential impact:** unauthorized access to external systems.

**Control:** Gitleaks scans repository content during CI.

**Project-specific consideration:** Juice Shop contains intentional challenge/test material, so findings must be triaged rather than blindly treating every detected string as a production secret.

---

### T04 — Workflow Tampering

**Threat:** An attacker modifies the GitHub Actions workflow to disable scanning or execute malicious commands.

**Impact:** security controls can be bypassed at the exact point where the software supply chain is being constructed.

**Mitigations:** pull-request review, protected branches, controlled workflow permissions, and security scanning.

---

### T07 — Dependency Tampering

**Threat:** A dependency is malicious or compromised, or a vulnerable version is introduced.

**Impact:** compromise may occur before the application is even deployed.

**Mitigations:** lockfiles, Trivy dependency/filesystem scanning, and dependency review practices.

---

### T08 — Malicious Container Build

**Threat:** Dockerfile or build instructions are modified to introduce malicious content into the image.

**Impact:** every workload created from the image may inherit the compromise.

**Mitigations:** source review, protected branches, multi-stage build design, and Trivy image scanning.

---

### T12 — Container Privilege Escalation

**Threat:** An attacker who compromises the application attempts to gain host/container privileges.

**Mitigations implemented:**

- UID `65532`
- `runAsNonRoot`
- `allowPrivilegeEscalation: false`
- all capabilities dropped
- RuntimeDefault seccomp
- ServiceAccount token automount disabled

These controls reduce the available privilege surface but do not make an intentionally vulnerable application harmless.

---

### T13 — Filesystem Tampering

**Threat:** A compromised process modifies application binaries, configuration, or other files to establish persistence.

**Mitigation:** the root filesystem is read-only.

Because Juice Shop requires certain runtime writes, only explicit paths are backed by writable `emptyDir` volumes.

---

## 7. Security Controls Mapped to Threats

| Control | Threats Addressed |
|---|---|
| Threat Modeling | T01–T14 identification and prioritization |
| Semgrep | Source-level threats |
| Gitleaks | T03 |
| Trivy filesystem/dependency scan | T07 |
| Multi-stage Docker build | T08, supply-chain hardening |
| Trivy image scan | T08 |
| Checkov | Kubernetes configuration threats |
| Non-root | T12 |
| No privilege escalation | T12 |
| Capability drop | T12 |
| Seccomp | T12 |
| Read-only root filesystem | T13 |
| ServiceAccount token disabled | T12 |
| NetworkPolicy | T14 |
| OWASP ZAP | T10, T11 |
| DAST High-severity gate | T10, T11 |

---

## 8. Risk Treatment Strategy

The project uses four practical treatment categories:

### Prevent

Controls such as read-only filesystems, capability dropping, and no privilege escalation attempt to prevent dangerous behavior.

### Detect

Semgrep, Gitleaks, Trivy, Checkov, and ZAP detect security issues at different lifecycle stages.

### Contain

Kubernetes runtime restrictions reduce the privileges and writable surface available to a compromised workload.

### Document

Findings that are intentional, accepted, non-blocking, or future work are documented instead of hidden.

---

## 9. Residual Risk

The platform does not eliminate all risk.

Important residual risks include:

- Juice Shop remains intentionally vulnerable.
- Gitleaks is non-blocking because of intentional test material.
- Checkov is configured as a soft-fail/reporting control and currently reports three known policy failures.
- Image scanning can identify vulnerabilities that require application/vendor context for remediation.
- NetworkPolicy currently restricts ingress but does not restrict egress.
- Runtime detection/monitoring is not currently implemented as a dedicated stack.

The correct interpretation is therefore **risk visibility and layered mitigation**, not absolute security.

---

## 10. Future Threat-Model Expansion

Future iterations can extend the model to cover:

- image registry compromise,
- signed artifact verification,
- Kubernetes admission controller compromise,
- runtime detection/response,
- centralized logging integrity,
- observability credential exposure,
- cloud IAM abuse,
- external secret-management systems.
