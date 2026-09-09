# 03 — Architecture

## 1. Architecture Purpose

This document describes the architecture of the Enterprise DevSecOps Platform and the trust relationships between its major components.

The architecture is intentionally divided into **delivery-plane security** and **runtime security** so that source and pipeline controls are not confused with controls applied to the running workload.

The authoritative visual architecture is maintained in:

`diagrams/architecture.drawio`

The diagram should be treated as the architecture view; individual STRIDE threats are documented separately in `docs/04-threat-model.md`.

---

## 2. High-Level Architecture

```text
                    +----------------------+
                    |      Developer       |
                    +----------+-----------+
                               |
                               | Source / PR
                               v
                    +----------------------+
                    |   GitHub Repository   |
                    +----------+-----------+
                               |
                               | Workflow trigger
                               v
                    +----------------------+
                    |    GitHub Actions     |
                    +----------+-----------+
                               |
             +-----------------+------------------+
             |                 |                  |
             v                 v                  v
        +---------+       +---------+        +---------+
        | Semgrep |       | Gitleaks|        | Trivy   |
        |  SAST   |       | Secrets |        | FS/SCA  |
        +---------+       +---------+        +---------+
             \                 |                  /
              \                |                 /
               +---------------+----------------+
                               |
                               v
                    +----------------------+
                    |     Docker Build     |
                    |   Multi-stage Image  |
                    +----------+-----------+
                               |
                               v
                    +----------------------+
                    |     Trivy Image      |
                    +----------+-----------+
                               |
                               v
                    +----------------------+
                    |   Kubernetes IaC     |
                    |      Checkov         |
                    +----------+-----------+
                               |
                               v
                 +-----------------------------+
                 |       Kubernetes Cluster    |
                 |                             |
                 |  +-----------------------+  |
                 |  | Juice Shop Pod        |  |
                 |  | UID 65532             |  |
                 |  | RO Root FS            |  |
                 |  | No Priv Escalation    |  |
                 |  | Drop ALL capabilities |  |
                 |  +-----------+-----------+  |
                 +--------------|--------------+
                                |
                                | HTTP :3000
                                v
                       +------------------+
                       |   OWASP ZAP      |
                       |      DAST        |
                       +--------+---------+
                                |
                                v
                       +------------------+
                       | Security Gate    |
                       | High findings =  |
                       | pipeline failure |
                       +------------------+

             Runtime validation is performed
             directly against the Kubernetes pod.
```

---

## 3. Major Components

### Developer

The developer initiates source changes and pull requests. The developer is outside the trusted CI/CD execution environment and therefore represents the first trust boundary.

### GitHub Repository

The repository stores:

- application source,
- Docker build instructions,
- Kubernetes manifests,
- GitHub Actions workflow definitions,
- security documentation, and
- threat-model artifacts.

The repository is therefore a high-value security asset.

### GitHub Actions

GitHub Actions provides automated execution of security and build stages.

The workflow performs security checks before the application is considered ready for deployment.

### Security Scanners

Different scanners provide different visibility:

| Component | Security View |
|---|---|
| Semgrep | Source/code patterns |
| Gitleaks | Secrets |
| Trivy filesystem | Dependencies/filesystem |
| Trivy image | Container image |
| Checkov | Kubernetes IaC |
| OWASP ZAP | Runtime HTTP behavior |

### Docker

Docker provides the immutable application artifact used for deployment.

The multi-stage build separates construction from runtime execution and enables the final runtime image to contain only the required runtime material.

### Kubernetes

Kubernetes provides workload orchestration and runtime security controls.

The workload is intentionally hardened at the pod/container level rather than assuming that the application image alone provides sufficient isolation.

### OWASP ZAP

ZAP interacts with the deployed application over HTTP and evaluates externally observable behavior.

---

## 4. Trust Boundaries

The architecture contains several important trust boundaries:

### TB-01 — Developer ↔ GitHub

Source changes cross from a developer-controlled environment into the repository.

Primary concerns:

- account compromise,
- unauthorized changes,
- malicious commits,
- secret exposure.

### TB-02 — GitHub ↔ GitHub Actions

Repository-controlled workflow definitions influence execution inside a CI runner.

Primary concerns:

- workflow tampering,
- excessive permissions,
- secret exposure,
- supply-chain manipulation.

### TB-03 — CI/CD ↔ Container Artifact

Build instructions and dependencies are transformed into a container image.

Primary concerns:

- malicious Dockerfile changes,
- dependency compromise,
- vulnerable packages,
- artifact tampering.

### TB-04 — CI/CD ↔ Kubernetes

The tested container and Kubernetes manifests become a runtime workload.

Primary concerns:

- insecure manifests,
- excessive privileges,
- insecure filesystem configuration,
- network exposure.

### TB-05 — External Client ↔ Application

HTTP traffic reaches the application through the Kubernetes Service.

Primary concerns:

- application-layer vulnerabilities,
- unauthorized access,
- malicious requests,
- information disclosure.

---

## 5. Runtime Security Architecture

The application container uses defense in depth:

```text
Container Process
      |
      +--> UID 65532 (non-root)
      +--> No privilege escalation
      +--> All Linux capabilities dropped
      +--> RuntimeDefault seccomp
      +--> Read-only root filesystem
      |
      +--> Explicit writable emptyDir mounts
             |
             +--> /app/data
             +--> /app/ftp
             +--> /app/frontend/dist
             +--> /app/.well-known
             +--> /app/i18n
             +--> /app/logs
```

The explicit writable mounts are required because Juice Shop performs startup/runtime writes. Keeping these paths explicit reduces the writable surface compared with making `/app` writable.

---

## 6. Network Architecture

The Kubernetes Service exposes port 80 internally and forwards to container port 3000.

The NetworkPolicy restricts ingress to the Juice Shop workload so that traffic is accepted from workloads in the `juice-shop` namespace on TCP port 3000.

This is an **ingress restriction**, not complete network isolation. Egress is not currently restricted by the project's NetworkPolicy.

---

## 7. CI/CD Security Flow

The security architecture deliberately performs checks before runtime exposure:

```text
Commit
 ↓
Static + Secret + Dependency Checks
 ↓
Container Build
 ↓
Image Scan
 ↓
Kubernetes Manifest Scan
 ↓
Deploy / Run Test Target
 ↓
DAST
 ↓
Security Gate
```

This means the platform evaluates the same workload from multiple perspectives before accepting the dynamic test result.

---

## 8. Availability and Health

The Kubernetes deployment defines:

- readiness probe — determines when the application is ready to receive traffic;
- liveness probe — detects a workload that is no longer healthy;
- CPU requests/limits — provide predictable scheduling and resource boundaries;
- memory requests/limits — reduce uncontrolled resource consumption.

These controls are primarily reliability controls, but they also contribute to security by limiting some forms of resource exhaustion and preventing traffic from being routed to an unhealthy pod.

---

## 9. Architecture Decisions

### Decision: Multi-stage Docker build

**Reason:** separate build-time dependencies from the runtime image and establish a cleaner runtime boundary.

### Decision: Non-root runtime

**Reason:** reduce the impact of application compromise by avoiding UID 0 execution.

### Decision: Read-only root filesystem

**Reason:** prevent arbitrary modification of most of the container filesystem.

### Decision: Explicit writable volumes

**Reason:** Juice Shop requires runtime writes. Explicit mounts preserve compatibility while keeping the root filesystem read-only.

### Decision: NetworkPolicy

**Reason:** reduce unnecessary inbound connectivity to the application workload.

### Decision: DAST gate based on High severity

**Reason:** raw ZAP exit codes can represent warnings. The pipeline therefore parses the XML report and applies a project-specific risk policy: High findings fail the gate.

---

## 10. Future Architecture Enhancements

Future versions can extend the architecture with:

- image signing and verification,
- immutable image digest deployment,
- Kubernetes admission policy,
- runtime detection with Falco,
- Prometheus/Grafana monitoring,
- centralized logging,
- external secrets management,
- private artifact registries,
- stronger CI identity controls.

These are future-state components and should not be represented as currently deployed components.
