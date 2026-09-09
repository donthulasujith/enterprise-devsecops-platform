# Enterprise DevSecOps Platform

A production-inspired DevSecOps security platform that demonstrates how security controls can be integrated across the software development lifecycle—from source code and CI/CD through containerization, Kubernetes deployment, and runtime security.

The project uses OWASP Juice Shop as an intentionally vulnerable application. The goal is not to remove the application's intentional vulnerabilities, but to demonstrate how a security-focused engineering pipeline can identify, assess, gate, and contain security risk.

---

## Project Overview

This project demonstrates an end-to-end DevSecOps approach using open-source security tooling.

The security lifecycle is:

```text
Source Code
    |
    v
Threat Modeling
    |
    v
GitHub Actions CI/CD
    |
    +-- SAST ................. Semgrep
    +-- SCA .................. Trivy
    +-- Secret Scanning ...... Gitleaks
    +-- Container Scanning ... Trivy
    +-- DAST ................. OWASP ZAP
    +-- IaC Scanning ......... Checkov
    |
    v
Hardened Docker Image
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
    +-- CPU and memory limits
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

- Integrate security into CI/CD instead of treating it as a separate final-stage activity.
- Identify application, dependency, secret, container, and infrastructure risks automatically.
- Apply security gates to prevent selected high-risk findings from passing the pipeline.
- Build a hardened multistage container image.
- Deploy the application using Kubernetes security controls.
- Reduce the impact of a potential application compromise through runtime defense in depth.
- Document security decisions, findings, and validation results.

---

## Security Controls

| Security Area | Tool / Control | Purpose |
|---|---|---|
| Threat Modeling | STRIDE-based analysis | Identify threats and trust-boundary risks |
| SAST | Semgrep | Identify source-code security issues |
| SCA | Trivy filesystem scan | Identify dependency vulnerabilities |
| Secret Scanning | Gitleaks | Detect exposed secrets and credentials |
| Container Security | Trivy image scan | Identify vulnerable container components |
| DAST | OWASP ZAP | Test the running application |
| IaC Security | Checkov | Analyze Kubernetes manifests |
| Container Hardening | Multistage Docker build | Separate build and runtime environments |
| Runtime Identity | Non-root UID 65532 | Reduce process privileges |
| Filesystem Security | Read-only root filesystem | Reduce unauthorized filesystem modification |
| Linux Security | Drop all capabilities | Minimize kernel-level privileges |
| Process Security | `allowPrivilegeEscalation: false` | Prevent privilege escalation |
| System Call Security | Seccomp `RuntimeDefault` | Reduce kernel attack surface |
| Kubernetes API Security | ServiceAccount token disabled | Prevent unnecessary API credentials |
| Network Security | NetworkPolicy | Restrict workload ingress |
| Resource Controls | CPU/memory requests and limits | Limit resource consumption |
| Availability | Readiness/liveness probes | Detect and recover from runtime failures |

---

## CI/CD Security Pipeline

The GitHub Actions workflow performs security checks during CI/CD.

### 1. Semgrep — SAST

Semgrep performs static analysis against the Juice Shop source code.

### 2. Trivy — Filesystem / SCA

Trivy scans the application filesystem for vulnerable dependencies.

A security gate is configured to fail the pipeline for applicable unfixed Critical findings.

The repository also contains a `.trivyignore` file for explicitly documented exceptions.

### 3. Gitleaks — Secret Scanning

Gitleaks scans the repository for potential secrets.

Juice Shop contains intentional test secrets and challenge material, so the Gitleaks step is configured to report findings without making the overall pipeline fail on those intentional artifacts.

### 4. Docker Build

The application is built as a multistage Docker image.

The build stage installs dependencies and builds the application. The runtime stage contains the files required to run the compiled application.

### 5. Trivy — Container Image Scanning

The resulting container image is scanned for Critical and High vulnerabilities.

The scan produces SARIF results that are uploaded to GitHub Security.

### 6. OWASP ZAP — DAST

The container is started in an isolated Docker network and scanned using OWASP ZAP.

The workflow generates HTML and XML reports.

A DAST security gate parses the ZAP XML report and fails the pipeline when High-severity findings are detected.

### 7. Checkov — Kubernetes IaC

Checkov scans the Kubernetes manifests for security configuration issues.

The Kubernetes deployment was hardened based on the findings, including the addition of a NetworkPolicy.

---

## DAST Assessment

The active OWASP ZAP assessment identified security findings in the intentionally vulnerable application.

The documented findings include:

- Backup File Disclosure
- Bypassing 403
- CORS Misconfiguration

Additional lower-severity findings were also identified by the scan.

The complete assessment and recommendations are documented in:

- [DAST Security Assessment](docs/05-dast-findings.md)
- [Security Gates](docs/06-security-gates.md)

The purpose of the DAST stage is to demonstrate continuous detection and security gating rather than to eliminate the vulnerabilities intentionally present in Juice Shop.

---

## Kubernetes Runtime Security

The Kubernetes deployment applies defense-in-depth controls to limit the impact of application compromise.

The main application container:

- Runs as UID `65532`
- Runs as a non-root process
- Uses a read-only root filesystem
- Has only required writable `emptyDir` volumes
- Drops all Linux capabilities
- Disables privilege escalation
- Uses the `RuntimeDefault` seccomp profile
- Does not automatically mount a ServiceAccount token
- Has CPU and memory limits
- Is protected by a Kubernetes NetworkPolicy
- Uses readiness and liveness probes

Runtime validation confirmed:

```text
Non-root execution       -> UID 65532
Write to /app             -> Denied
Write to /app/data        -> Allowed
Linux capabilities        -> All zero
Application status        -> 1/1 Running
```

Full runtime documentation is available in:

- [Runtime Security](docs/07-runtime-security.md)

---

## Threat Model

The project includes a STRIDE-based threat model covering the DevSecOps pipeline.

The analysis considers threats including:

- Compromised developer accounts
- Unauthorized source-code modification
- Exposed secrets
- CI/CD workflow tampering
- Excessive GitHub Actions permissions
- Runner secret exposure
- Malicious or vulnerable dependencies
- Malicious Dockerfile/build changes
- SARIF result manipulation or exposure

The threat model and implemented security controls are documented in:

- [Threat Model](docs/04-threat-model.md)

---

## Architecture

The high-level architecture separates the application, CI/CD security controls, container build process, and Kubernetes runtime.

See:

- [Architecture Documentation](docs/03-architecture.md)
- `diagrams/architecture.drawio`

---

## Repository Structure

```text
enterprise-devsecops-platform/
|
+-- .github/
|   +-- workflows/
|       +-- DevSecOps Pipeline
|
+-- app/
|   +-- juice-shop/
|       +-- Dockerfile
|       +-- package.json
|       +-- package-lock.json
|       +-- .trivyignore
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
+-- threat-model/
|   +-- enterprise-devsecops-platform.json
|   +-- enterprise-devsecops-platform-threat-model.png
|   +-- enterprise-devsecops-platform-threat-model.svg
|
+-- README.md
```

Generated security scan reports are excluded from version control through `.gitignore`.

---

## Documentation

| Document | Description |
|---|---|
| [01 — Project Overview](docs/01-project-overview.md) | Project purpose, scope, goals, audience, and structure |
| [02 — Application Assessment](docs/02-application-assessment.md) | Juice Shop technology stack, dependencies, build process, and security observations |
| [03 — Architecture](docs/03-architecture.md) | High-level application and DevSecOps architecture |
| [04 — Threat Model](docs/04-threat-model.md) | Assets, trust boundaries, STRIDE threats, and security controls |
| [05 — DAST Findings](docs/05-dast-findings.md) | OWASP ZAP assessment results and recommendations |
| [06 — Security Gates](docs/06-security-gates.md) | CI/CD security-gate policy and DAST gate implementation |
| [07 — Runtime Security](docs/07-runtime-security.md) | Kubernetes runtime hardening and validation |

---

## Technology Stack

### Application

- OWASP Juice Shop
- Node.js
- Angular

### CI/CD

- GitHub Actions
- Docker

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

## Running Locally

### Build the Docker Image

From the repository root:

```bash
docker build -t juice-shop:multistage ./app/juice-shop
```

### Run the Container

```bash
docker run --rm -p 3000:3000 juice-shop:multistage
```

The application is then available on:

```text
http://localhost:3000
```

---

## Deploying to Kubernetes

Create the namespace:

```bash
kubectl apply -f k8s/namespace.yaml
```

Deploy the application:

```bash
kubectl apply -f k8s/deployment.yaml
kubectl apply -f k8s/service.yaml
kubectl apply -f k8s/network-policy.yaml
```

Check the deployment:

```bash
kubectl get pods -n juice-shop
```

Check the service:

```bash
kubectl get svc -n juice-shop
```

The Kubernetes deployment uses the locally built `juice-shop:multistage` image.

For a local Kubernetes environment such as Kind, the image must be made available to the cluster before deployment.

---

## Security Philosophy

This project intentionally uses a vulnerable application to demonstrate an important DevSecOps principle:

> Security is not limited to fixing vulnerabilities in application code.

A mature security process also needs to:

1. Identify threats.
2. Detect vulnerabilities.
3. Assess risk.
4. Enforce security gates.
5. Harden the build artifact.
6. Harden the deployment environment.
7. Restrict runtime privileges.
8. Validate that controls are actually enforced.

This project demonstrates those controls across multiple stages of the software lifecycle.

---

## Project Outcome

The completed platform demonstrates an end-to-end security lifecycle:

```text
Threat Identification
        |
        v
Security Testing
        |
        v
Automated CI/CD Controls
        |
        v
Security Gates
        |
        v
Hardened Container
        |
        v
Hardened Kubernetes Deployment
        |
        v
Runtime Security Validation
```

The result is a portfolio project demonstrating practical experience with **application security, DevSecOps, vulnerability management, container security, Kubernetes security, threat modeling, CI/CD security automation, and runtime defense in depth**.
