# Enterprise DevSecOps Platform

A production-inspired DevSecOps security platform that demonstrates how security controls can be integrated across the software development lifecycle—from source code and CI/CD through containerization, Kubernetes deployment, and runtime security.

The project uses **OWASP Juice Shop** as an intentionally vulnerable application. The goal is not to remove the application's intentional vulnerabilities, but to demonstrate how a security-focused engineering pipeline can **identify, assess, gate, harden, and contain security risk**.

---

## Project Overview

This project demonstrates an end-to-end DevSecOps approach using open-source security tooling and a deliberately vulnerable web application.

The platform treats security as a continuous engineering concern rather than a final review performed after deployment.

### Security Lifecycle

```text
Developer / Source Code
        |
        v
Threat Modeling
        |
        v
GitHub Actions CI/CD
        |
        +-- SAST ................ Semgrep
        +-- SCA ................. Trivy
        +-- Secret Scanning ..... Gitleaks
        +-- Container Scanning .. Trivy
        +-- DAST ................ OWASP ZAP
        +-- IaC Scanning ........ Checkov
        |
        v
Hardened Multi-Stage Docker Image
        |
        v
Hardened Kubernetes Runtime
        |
        +-- Non-root execution
        +-- Read-only root filesystem
        +-- Restricted writable volumes
        +-- Linux capabilities dropped
        +-- Privilege escalation disabled
        +-- Seccomp RuntimeDefault
        +-- ServiceAccount token disabled
        +-- NetworkPolicy
        +-- CPU / memory controls
        +-- Health probes
        |
        v
Runtime Security Validation
        |
        v
Running Application
```

---

## Security Objectives

The project focuses on the following objectives:

- Integrate security into CI/CD instead of treating security as a separate final-stage activity.
- Identify application, dependency, secret, container, and infrastructure risks automatically.
- Apply security gates to prevent selected high-risk findings from passing the pipeline.
- Build a hardened multi-stage container image with a separate build and runtime stage.
- Deploy the application using Kubernetes security controls and defense-in-depth principles.
- Reduce the impact of a potential application compromise through least privilege and filesystem restrictions.
- Validate that runtime security controls are actually enforced rather than relying only on configuration.
- Document architectural decisions, security findings, residual risk, and validation results.

---

## Why OWASP Juice Shop?

OWASP Juice Shop is intentionally vulnerable and contains numerous security challenges representing common web application weaknesses.

That makes it useful for demonstrating the **security engineering process** without pretending that a vulnerable training application has been made production-safe.

The project deliberately follows this principle:

> **The vulnerabilities in Juice Shop are test data; the DevSecOps platform is the security engineering subject of the project.**

The objective is therefore to detect and assess vulnerabilities, establish security gates, harden the container and Kubernetes environment, and demonstrate how defense-in-depth can reduce the impact of compromise.

---

## Security Controls

| Security Area | Tool / Control | Purpose | Enforcement / Status |
|---|---|---|---|
| Threat Modeling | STRIDE-based analysis | Identify threats, assets, trust boundaries, and mitigations | Implemented |
| SAST | Semgrep | Identify source-code security issues | Implemented |
| SCA | Trivy filesystem scan | Identify vulnerable dependencies and components | Implemented |
| Secret Scanning | Gitleaks | Detect potential secrets and credentials | Implemented; non-blocking for intentional Juice Shop material |
| Container Security | Trivy image scan | Identify vulnerable packages in the built image | Implemented |
| DAST | OWASP ZAP | Test the running application from an attacker perspective | Implemented |
| IaC Security | Checkov | Analyze Kubernetes manifests for security misconfiguration | Implemented; reporting/soft-fail |
| Container Hardening | Multi-stage Docker build | Separate build dependencies from runtime image | Implemented |
| Runtime Identity | UID 65532 / non-root | Reduce process privileges | Implemented and validated |
| Filesystem Security | `readOnlyRootFilesystem` | Prevent unauthorized writes to the image filesystem | Implemented and validated |
| Writable Storage | Restricted `emptyDir` volumes | Provide application-required writable locations only | Implemented |
| Linux Security | Drop all capabilities | Minimize kernel-level privileges | Implemented and validated |
| Process Security | `allowPrivilegeEscalation: false` | Prevent privilege escalation | Implemented |
| System Call Security | Seccomp `RuntimeDefault` | Reduce available system-call attack surface | Implemented |
| Kubernetes API Security | `automountServiceAccountToken: false` | Avoid unnecessary Kubernetes API credentials | Implemented |
| Network Security | NetworkPolicy | Restrict workload ingress | Implemented |
| Resource Controls | CPU / memory requests and limits | Limit resource consumption | Implemented |
| Availability | Readiness / liveness probes | Detect application health problems | Implemented |

### Controls intentionally not claimed as implemented

The current project does **not** claim implementation of Prometheus/Grafana monitoring, Loki centralized logging, Falco runtime detection, Kyverno admission enforcement, Cosign image signing, Syft SBOM generation, or Helm packaging. These are potential future maturity improvements rather than completed controls.

---

# CI/CD Security Pipeline

The GitHub Actions workflow integrates multiple security checks into the software delivery process.

The important design principle is that each tool addresses a different layer of risk.

```text
Source
  |
  +--> Semgrep ---------> Source-code analysis
  |
  +--> Trivy FS --------> Dependency / SCA analysis
  |
  +--> Gitleaks --------> Secret detection
  |
  +--> Docker Build ----> Security-hardened artifact
  |
  +--> Trivy Image -----> Container vulnerability analysis
  |
  +--> ZAP -------------> Runtime / DAST analysis
  |
  +--> Checkov ---------> Kubernetes IaC analysis
  |
  v
Security Results + Gates
```

## 1. Semgrep — Static Application Security Testing

Semgrep performs static analysis against the application source code.

SAST operates before deployment and can identify insecure coding patterns without requiring the application to be running.

Its role in this project is to provide an automated source-code security layer early in the pipeline.

**Security value:**

- Detects security-relevant code patterns early.
- Provides developer-facing feedback before deployment.
- Complements rather than replaces dynamic testing.

---

## 2. Trivy — Filesystem / Software Composition Analysis

Trivy scans the application filesystem and dependency tree for known vulnerabilities.

This addresses a different risk from SAST: the application can contain secure-looking code while still depending on vulnerable third-party packages.

A security gate is configured for applicable **unfixed Critical findings**.

The repository also contains a `.trivyignore` file for explicitly documented exceptions where a finding is not appropriate for the current assessment scope.

**Security value:**

- Identifies vulnerable open-source dependencies.
- Provides vulnerability identifiers and affected packages.
- Helps prioritize dependency remediation.
- Demonstrates that dependency risk is evaluated automatically during CI/CD.

---

## 3. Gitleaks — Secret Scanning

Gitleaks scans repository content for patterns that resemble credentials, API keys, tokens, and other secrets.

Juice Shop contains intentional challenge material and test artifacts that can resemble secrets. Because these are part of the intentionally vulnerable application, the Gitleaks step is configured as **non-blocking** rather than pretending that every detected string is a production secret.

This is an important distinction between:

- **Detection:** identifying suspicious material.
- **Risk triage:** determining whether the material represents a real secret.
- **Pipeline enforcement:** deciding whether the finding should block delivery.

**Security value:**

- Detects accidental secret exposure.
- Encourages secret hygiene.
- Demonstrates contextual security gating rather than blindly failing on every match.

---

## 4. Docker — Multi-Stage Build

The application is packaged using a multi-stage Docker build.

### Build stage

The build stage contains the tooling and dependency installation required to prepare the application.

```text
Source Code
    |
    v
Build Stage
    |
    +-- Install dependencies
    +-- Build application
    +-- Produce compiled artifacts
```

### Runtime stage

The runtime stage starts from a fresh Node.js base image and copies only the application components required for execution.

```text
Build Stage
    |
    v
Runtime Stage
    |
    +-- Runtime dependencies
    +-- Compiled application
    +-- Required runtime files
    |
    v
Running Container
```

This separation reduces the amount of build tooling exposed in the final runtime environment and establishes a cleaner artifact boundary.

The project also pins the npm version used during the Juice Shop build to `11.6.0` because the application's dependency tree required a compatible npm version for a reliable build.

---

## 5. Trivy — Container Image Scanning

After the Docker image is built, Trivy scans the resulting image for known vulnerabilities.

This is important because an application can have a clean source-code assessment while the final container still contains vulnerable operating-system packages, language dependencies, or bundled components.

The scan produces machine-readable security results that can be integrated with GitHub security tooling.

**Security value:**

- Assesses the actual deployable artifact.
- Detects vulnerabilities introduced through the container base image or packaged dependencies.
- Provides a second dependency-security perspective after the application build.

---

## 6. OWASP ZAP — Dynamic Application Security Testing

OWASP ZAP performs DAST against the running Juice Shop container.

The scan is performed against the application from outside the process, which allows the pipeline to identify weaknesses that are visible through HTTP behavior rather than source-code inspection alone.

The workflow:

1. Creates an isolated Docker network.
2. Starts the Juice Shop container on that network.
3. Starts ZAP against the containerized application.
4. Generates HTML and XML reports.
5. Parses the XML report.
6. Fails the security gate if High-risk findings are present.
7. Uploads the report as a CI artifact.
8. Cleans up the DAST containers and network.

### DAST Gate Policy

The raw ZAP command can return a non-zero status for warnings. Therefore, the workflow separates **scanner execution** from **security policy enforcement**.

The XML report is parsed by a Python gate that checks the ZAP `riskcode`.

```text
ZAP Scan
   |
   v
XML Report
   |
   v
Security Gate
   |
   +-- High findings present --> FAIL
   |
   +-- No High findings -------> PASS
```

This provides deterministic pipeline behavior based on the project's defined risk policy.

---

## 7. Checkov — Kubernetes Infrastructure as Code Security

Checkov analyzes the Kubernetes manifests for security configuration weaknesses.

The Kubernetes deployment was hardened based on these findings, including:

- Non-root execution.
- Read-only root filesystem.
- Disabled privilege escalation.
- Dropped Linux capabilities.
- Seccomp `RuntimeDefault`.
- Disabled automatic ServiceAccount token mounting.
- Resource requests and limits.
- Health probes.
- NetworkPolicy.

The current Checkov workflow uses `soft_fail: true`. The scan therefore provides security visibility without pretending that all policy findings have been eliminated.

The remaining Checkov findings are documented as residual hardening opportunities rather than hidden.

---

# DAST Assessment

The active OWASP ZAP assessment was performed against the containerized application using **ZAP 2.17.0**.

### Scan Summary

| Risk Level | Findings |
|---|---:|
| High | 0 |
| Medium | 5 |
| Low | 5 |
| Informational | 0 |

The scan crawled **197 URLs** and generated **219 alerts** across the intentionally vulnerable application.

The project's DAST gate passed because no High-severity findings were identified.

### Important Interpretation

A passing DAST gate does **not** mean that Juice Shop is secure.

It means that the project's defined CI/CD policy—**fail on High-risk ZAP findings**—was satisfied for this scan.

Medium and Low findings remain documented because the application is intentionally vulnerable and the purpose of the project is to demonstrate security detection, triage, and containment.

### Representative Findings

The assessment documented findings including:

- **Backup File Disclosure** — Medium
- **Bypassing 403** — Medium
- **CORS Misconfiguration** — Medium
- CSP-related security header weaknesses
- Cross-domain configuration issues
- COEP / COOP configuration weaknesses
- Deprecated security policy behavior
- Dangerous JavaScript functions
- Timestamp disclosure

Detailed evidence and recommendations are documented in:

- [DAST Security Assessment](docs/05-dast-findings.md)
- [Security Gates](docs/06-security-gates.md)

---

# Kubernetes Runtime Security

The Kubernetes deployment applies defense-in-depth controls designed to reduce the impact of a compromised application.

The main container is configured to:

- Run as UID `65532`.
- Run as a non-root process.
- Use a read-only root filesystem.
- Disable privilege escalation.
- Drop all Linux capabilities.
- Use the `RuntimeDefault` seccomp profile.
- Disable automatic ServiceAccount token mounting.
- Use CPU and memory requests/limits.
- Use readiness and liveness probes.
- Run with explicitly required writable `emptyDir` volumes.
- Operate under a Kubernetes NetworkPolicy that restricts ingress to the application namespace.

### Why writable volumes exist

Juice Shop is not a stateless application that can simply run with every filesystem path read-only. During startup and normal operation it requires specific locations to be writable.

Instead of disabling `readOnlyRootFilesystem`, the deployment mounts only the required paths as writable volumes.

An init container copies required application data from the immutable image into those writable volumes.

This preserves the security boundary:

```text
Immutable Container Image
        |
        +----------------------------+
        |                            |
        v                            v
Read-only application paths    Required writable volumes
                                   |
                                   +-- /app/data
                                   +-- /app/ftp
                                   +-- /app/frontend/dist
                                   +-- /app/.well-known
                                   +-- /app/i18n
                                   +-- /app/logs
```

The `emptyDir` volumes are intentionally **ephemeral**; they are not presented as persistent application storage.

---

# Runtime Security Validation

The deployment was tested rather than relying solely on YAML configuration.

### Non-root execution

The running process reported:

```text
uid=65532 gid=0(root) groups=0(root)
```

The important security property is that the process UID is **65532 rather than UID 0**. The group being GID 0 does not make the process a root UID process.

### Root filesystem write test

An attempt to create a file directly under `/app` was rejected:

```text
Read-only file system
```

This demonstrates that the container's root filesystem restriction is active at runtime.

### Required writable path test

Writing to the application data volume succeeded:

```text
WRITE SUCCEEDED
```

This confirms that the application has a writable location without making the entire container filesystem writable.

### Linux capability validation

The running process reported zero effective, permitted, inheritable, bounding, and ambient capabilities.

This confirms that the configured capability drop was effective at runtime.

### Application status

The Juice Shop pod reached the running state successfully and the application reported that it was listening on port `3000`.

Full runtime evidence is documented in:

- [Runtime Security](docs/07-runtime-security.md)

---

# Threat Model

The project includes a STRIDE-based threat model focused on the DevSecOps delivery chain and its security boundaries.

### Key assets

- Application source code
- GitHub repository
- CI/CD workflow
- Security scan results
- Container image
- Kubernetes workload
- Application data
- Secrets and credentials

### Key threats

| ID | STRIDE | Threat | Severity |
|---|---|---|---|
| T01 | Spoofing | A compromised developer account could access or modify the repository. | High |
| T02 | Tampering | Unauthorized or malicious source-code changes could be introduced. | High |
| T03 | Information Disclosure | Secrets or sensitive credentials could be committed to source control. | High |
| T04 | Tampering | A modified CI/CD workflow could bypass or alter security controls. | High |
| T05 | Elevation of Privilege | Excessive GitHub Actions permissions could enable unauthorized operations. | High |
| T06 | Information Disclosure | Secrets exposed to a CI/CD runner could be accessed or leaked. | High |
| T07 | Tampering | Vulnerable or malicious dependencies could compromise the application or build. | High |
| T08 | Tampering | Malicious Dockerfile/build changes could produce a compromised image. | High |
| T09 | Tampering / Information Disclosure | Security results could be manipulated, suppressed, or improperly exposed. | Medium |

The threat model connects these risks to controls such as code review, protected branches, least-privilege workflow permissions, Gitleaks, Trivy, container scanning, and restricted access to security results.

See:

- [Threat Model](docs/04-threat-model.md)

---

# Architecture

The architecture separates the main security domains:

```text
Developer
   |
   v
GitHub Repository
   |
   v
GitHub Actions
   |
   +--> SAST / SCA / Secrets / Image Scan / IaC Scan
   |
   +--> Docker Build
   |
   v
Container Image
   |
   v
Kubernetes
   |
   v
Hardened Juice Shop Pod
   |
   v
Application Runtime
```

The architecture diagram is maintained separately so that the diagram remains focused on **components and trust relationships**, while the STRIDE document contains the detailed threats.

See:

- [Architecture Documentation](docs/03-architecture.md)
- `diagrams/architecture.drawio`

---

# Repository Structure

```text
enterprise-devsecops-platform/
|
+-- .github/
|   +-- workflows/
|       +-- devsecops.yml
|
+-- app/
|   +-- juice-shop/
|       +-- Dockerfile
|       +-- package.json
|       +-- package-lock.json
|       +-- .trivyignore
|       +-- application source and runtime files
|
+-- diagrams/
|   +-- architecture.drawio
|
+-- docs/
|   +-- 01-project-overview.md
|   +-- 02-application-assessment.md
|   +-- 03-architecture.md
|   +-- 04-threat-model.md
|   +-- 05-dast-findings.md
|   +-- 06-security-gates.md
|   +-- 07-runtime-security.md
|
+-- k8s/
|   +-- namespace.yaml
|   +-- deployment.yaml
|   +-- service.yaml
|   +-- network-policy.yaml
|
+-- README.md
```

Generated scan reports are excluded from version control through `.gitignore`.

---

# Documentation

| Document | Description |
|---|---|
| [01 — Project Overview](docs/01-project-overview.md) | Project purpose, scope, security objectives, lifecycle, and implementation status |
| [02 — Application Assessment](docs/02-application-assessment.md) | Juice Shop technology stack, application characteristics, dependencies, build considerations, and security observations |
| [03 — Architecture](docs/03-architecture.md) | High-level DevSecOps architecture, components, data flows, boundaries, and design decisions |
| [04 — Threat Model](docs/04-threat-model.md) | Assets, trust boundaries, STRIDE threats, mitigations, and residual risks |
| [05 — DAST Findings](docs/05-dast-findings.md) | OWASP ZAP assessment methodology, results, evidence, findings, and recommendations |
| [06 — Security Gates](docs/06-security-gates.md) | CI/CD security-gate policy, enforcement logic, exceptions, and risk decisions |
| [07 — Runtime Security](docs/07-runtime-security.md) | Kubernetes hardening controls and runtime validation evidence |

---

# Technology Stack

### Application

- OWASP Juice Shop
- Node.js
- Angular

### Source Control / CI/CD

- Git
- GitHub
- GitHub Actions

### Security Tooling

- Semgrep
- Trivy
- Gitleaks
- OWASP ZAP
- Checkov

### Container / Runtime

- Docker
- Kubernetes
- Kubernetes NetworkPolicy
- Linux security controls
- Seccomp

---

# Running Locally

## Build the Docker Image

From the repository root:

```bash
docker build -t juice-shop:multistage ./app/juice-shop
```

The command builds the application using the project's multi-stage Dockerfile and creates an image named `juice-shop:multistage`.

## Run the Container

```bash
docker run --rm -p 3000:3000 juice-shop:multistage
```

The application is then available at:

```text
http://localhost:3000
```

---

# Deploying to Kubernetes

Create the namespace:

```bash
kubectl apply -f k8s/namespace.yaml
```

Deploy the workload and service:

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/network-policy.yaml
```

Check the workload:

```bash
kubectl get pods -n juice-shop
```

Check the service:

```bash
kubectl get svc -n juice-shop
```

The Kubernetes deployment references the locally built `juice-shop:multistage` image.

For a local Kubernetes environment such as **Kind**, the image must be made available to the cluster before the deployment can use it.

A typical Kind workflow is:

```bash
kind load docker-image juice-shop:multistage
kubectl apply -f k8s/namespace.yaml
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/network-policy.yaml
```

---

# Security Gate Philosophy

Security automation is only useful when the organization defines what constitutes a release-blocking condition.

This project intentionally uses different enforcement levels because not every scanner finding should automatically block delivery.

| Control | Current Behavior | Reason |
|---|---|---|
| Semgrep | Automated analysis | Source-code security visibility |
| Trivy filesystem | Gate for applicable unfixed Critical findings | Block high-impact dependency risk |
| Gitleaks | Non-blocking | Juice Shop contains intentional challenge/test material |
| Trivy image | Scan/report | Evaluate the deployable artifact |
| OWASP ZAP | Gate on High findings | Block selected high-risk runtime findings |
| Checkov | Soft-fail | Surface Kubernetes policy gaps while documenting residual findings |

This reflects a practical security-engineering principle:

> **Security gates should be risk-based, explainable, and aligned with the actual threat model.**

---

# Security Philosophy

This project intentionally uses a vulnerable application to demonstrate an important DevSecOps principle:

> **Security is not limited to fixing vulnerabilities in application code.**

A mature security process also needs to:

1. Identify threats.
2. Detect vulnerabilities.
3. Assess risk.
4. Establish security gates.
5. Harden the build artifact.
6. Harden the deployment environment.
7. Restrict runtime privileges.
8. Validate that controls are actually enforced.
9. Document residual risk rather than hiding it.

The project therefore demonstrates security across multiple layers:

```text
Application
    |
    v
Source Code Security
    |
    v
Dependency Security
    |
    v
Secret Security
    |
    v
Container Security
    |
    v
CI/CD Security Gates
    |
    v
Kubernetes Security
    |
    v
Runtime Defense in Depth
```

---

# Current Implementation vs. Future Maturity

The project is intentionally honest about its implementation boundary.

### Implemented

- STRIDE-based threat modeling
- GitHub Actions security pipeline
- Semgrep SAST
- Trivy filesystem/SCA scanning
- Gitleaks secret scanning
- Multi-stage Docker build
- Trivy container image scanning
- OWASP ZAP DAST
- DAST High-severity security gate
- Checkov Kubernetes IaC scanning
- Kubernetes workload hardening
- Non-root runtime execution
- Read-only root filesystem
- Restricted writable volumes
- Dropped Linux capabilities
- Disabled privilege escalation
- Seccomp `RuntimeDefault`
- Disabled automatic ServiceAccount token mounting
- Kubernetes NetworkPolicy
- Resource requests and limits
- Readiness and liveness probes
- Runtime validation of the Kubernetes security controls

### Future Enhancements

The following would extend the platform toward a more mature enterprise implementation:

- SBOM generation with Syft
- Cryptographic image signing with Cosign
- Admission/policy enforcement with Kyverno or an equivalent policy engine
- Runtime detection with Falco
- Metrics and dashboards with Prometheus/Grafana
- Centralized logging with Loki or an equivalent platform
- Persistent application storage where operationally required
- Stronger image provenance and supply-chain attestations
- More granular GitHub Actions permissions at the job level
- Pinning third-party GitHub Actions to immutable commit SHAs
- Stronger enforcement of remaining Checkov findings

These items are deliberately listed as future work rather than represented as completed capabilities.

---

# Project Outcome

The completed platform demonstrates an end-to-end security lifecycle:

```text
                THREAT MODELING
                       |
                       v
                SECURITY TESTING
                       |
                       v
                CI/CD AUTOMATION
                       |
          +------------+------------+
          |            |            |
         SAST         SCA       SECRET SCAN
          |            |            |
          +------------+------------+
                       |
                       v
                 DOCKER BUILD
                       |
                       v
               CONTAINER SCAN
                       |
                       v
                  DAST / ZAP
                       |
                       v
                 SECURITY GATE
                       |
                       v
             KUBERNETES HARDENING
                       |
                       v
              RUNTIME VALIDATION
```

The result is a portfolio project demonstrating practical experience across:

- **Application Security**
- **Vulnerability Management**
- **SAST / SCA / DAST**
- **Secret Detection**
- **Container Security**
- **Kubernetes Security**
- **Infrastructure as Code Security**
- **Threat Modeling / STRIDE**
- **CI/CD Security Automation**
- **Security Gates and Risk-Based Enforcement**
- **Linux Runtime Hardening**
- **Defense in Depth**

The central engineering outcome is not simply that a vulnerable application was deployed. It is that the application was placed inside a security lifecycle capable of **detecting risk, making explicit security decisions, producing evidence, hardening the runtime, and validating those controls in operation**.

---

## License / Application Notice

OWASP Juice Shop is used as the intentionally vulnerable application for this security engineering project. Refer to the application's own license and documentation for licensing information.
