# 02 — Application Security Assessment

## OWASP Juice Shop 20.1.1

### 1. Assessment Purpose

OWASP Juice Shop is used as the intentionally vulnerable application workload for the Enterprise DevSecOps Platform.

The application provides a realistic target for demonstrating how security controls operate across source code, dependencies, containers, Kubernetes, and the deployed HTTP interface.

The assessment deliberately separates two concepts:

- **Application vulnerabilities:** weaknesses intentionally present in Juice Shop.
- **Platform security controls:** controls implemented by this project to identify, contain, and manage risk.

The project does not attempt to remove Juice Shop's intentional vulnerabilities because doing so would defeat its purpose as a security testing workload.

---

## 2. Why Juice Shop?

Juice Shop is suitable because it is intentionally insecure and exercises a broad range of common web-application security concepts.

It provides a useful target for:

- SAST analysis
- Dependency analysis
- Secret scanning
- Container scanning
- DAST
- Security-gate demonstrations
- Kubernetes runtime hardening
- Threat modeling

This allows the DevSecOps platform to be tested against an application that contains meaningful security risk rather than a trivial clean application.

---

## 3. Assessment Boundaries

### Included

- Application source tree under `app/juice-shop`.
- Node.js dependencies and package metadata.
- Docker build process.
- Final container image.
- Kubernetes manifests under `k8s/`.
- Running HTTP application exposed through the Kubernetes Service.
- Dynamic testing using OWASP ZAP.

### Excluded

- Removing intentional Juice Shop vulnerabilities.
- Treating intentionally vulnerable challenge content as an accidental defect in the project.
- Claiming complete production readiness for the application itself.
- Building an enterprise monitoring stack that is not present in the repository.

---

## 4. Application Security Lifecycle

```text
Juice Shop Source
      ↓
Threat Model
      ↓
SAST / Secret / Dependency Scanning
      ↓
Multi-stage Docker Build
      ↓
Container Image Scan
      ↓
Kubernetes IaC Scan
      ↓
Hardened Kubernetes Deployment
      ↓
OWASP ZAP DAST
      ↓
Security Gate
      ↓
Runtime Security Validation
```

---

## 5. Source and Dependency Assessment

### SAST — Semgrep

Semgrep is used to inspect application source code for security-relevant coding patterns.

**Purpose:** identify source-level weaknesses before the application reaches deployment.

**Value:** provides developer-facing feedback earlier in the lifecycle than a runtime scanner.

### Secret Scanning — Gitleaks

Gitleaks searches the repository for credential-like material and secrets.

Juice Shop intentionally contains test keys and challenge material. Consequently, Gitleaks is retained as a visible control while its behavior is treated carefully rather than pretending that every detected value is a production credential.

The current workflow allows the Gitleaks step to remain non-blocking because the intentionally vulnerable application contains test material.

### Dependency / Filesystem Scanning — Trivy

Trivy is used to inspect the filesystem and dependency content for known vulnerabilities.

The project uses `.trivyignore` where findings are intentionally triaged and accepted as part of the assessment workload. This is risk management, not deletion of evidence.

---

## 6. Container Assessment

The application is packaged using a multi-stage Dockerfile.

### Build stage

The build stage contains the complete dependency tree and tools required to construct the application.

### Runtime stage

The runtime stage receives only the files required to run the compiled application and production dependencies.

The project also pins npm to `11.6.0` during the build because the Juice Shop dependency tree required a compatible npm version in the Node 22 build environment.

### Runtime hardening

The final image runs as UID `65532` rather than root.

This is important because Kubernetes `runAsNonRoot` enforcement is supported by the actual image identity instead of relying solely on a Kubernetes configuration declaration.

---

## 7. Kubernetes Assessment

The application is deployed with security controls including:

- `runAsNonRoot: true`
- UID `65532`
- disabled privilege escalation
- dropped capabilities
- read-only root filesystem
- RuntimeDefault seccomp
- disabled automatic ServiceAccount token mounting
- CPU and memory limits
- readiness/liveness probes
- ingress NetworkPolicy

Because Juice Shop writes to several application paths during startup, explicit writable `emptyDir` volumes are used. An init container copies required application content into these writable locations while preserving the main container's read-only root filesystem.

This is a practical example of balancing **application compatibility** with **container hardening**.

---

## 8. Dynamic Application Assessment

OWASP ZAP 2.17.0 performs the DAST assessment against the running containerized application.

The active scan reached 197 URLs and generated 219 alerts. The project does not interpret the raw ZAP exit code as a simple pass/fail because ZAP can return a non-zero status for warnings. Instead, the generated XML report is parsed and the project-defined gate fails only when a High-severity finding is present.

### DAST result summary

| Risk | Result |
|---|---:|
| High | 0 |
| Medium | 5 |
| Low | 5 |
| Informational | 0 |
| URLs crawled | 197 |
| Total alerts | 219 |

The detailed findings and evidence are documented in `docs/05-dast-findings.md`.

---

## 9. Assessment Interpretation

A key outcome of this assessment is that the platform can report application risk without attempting to disguise the intentionally vulnerable nature of Juice Shop.

The correct security-engineering response is:

```text
Finding
  ↓
Validate
  ↓
Classify severity
  ↓
Determine whether expected / intentional
  ↓
Document
  ↓
Apply compensating controls where appropriate
  ↓
Gate unacceptable risk
```

This is preferable to simply modifying the vulnerable application until scanners become quiet.

---

## 10. Residual Risk

The application remains intentionally vulnerable by design. Therefore, a clean pipeline does **not** mean the application is secure in isolation.

The project demonstrates that:

- vulnerabilities can be detected,
- findings can be categorized,
- security controls can be enforced around the workload,
- high-risk dynamic findings can block delivery, and
- runtime containment can reduce the impact of a compromise.

That distinction is central to the project's security model.

---

## 11. Future Enhancements

Potential future controls include:

- SBOM generation with Syft
- Image signing and verification with Cosign
- Kubernetes admission policy with Kyverno
- Dedicated runtime detection with Falco
- Metrics and dashboards using Prometheus/Grafana
- Centralized logging using Loki
- Stronger image provenance and digest pinning
- Automated dependency update workflows

These are intentionally documented as future work rather than represented as completed controls.
