# Threat Model

## Methodology

Threat modeling was performed using the STRIDE methodology and OWASP Threat Dragon.

---

# Assets

- Source Code
- GitHub Repository
- GitHub Actions Pipeline
- Container Images
- Kubernetes Cluster
- Application Data
- Secrets
- Monitoring Data

---

# Scope

This threat model focuses on the DevSecOps CI/CD pipeline, including
developer interactions, the GitHub repository, GitHub Actions, security
scanning, and container image creation.

Kubernetes runtime, application runtime, and monitoring threats are
identified as part of the broader architecture and will be addressed
separately during runtime security analysis.

---

# Trust Boundaries

1. Developer ↔ GitHub
2. GitHub ↔ GitHub Actions
3. Internet ↔ Kubernetes Cluster
4. Kubernetes ↔ Monitoring Stack

---

# Identified Threats

| ID | Component / Flow | STRIDE | Threat | Severity | Mitigation |
|----|------------------|--------|--------|----------|------------|
| T01 | Developer → GitHub | Spoofing | A compromised developer account could be used to access or modify the repository. | High | MFA, least privilege, protected branches |
| T02 | Developer → GitHub | Tampering | Unauthorized or malicious source-code changes could be introduced into the repository. | High | Pull Requests, code review, branch protection |
| T03 | Source Code → GitHub | Information Disclosure | Secrets or sensitive credentials could be accidentally committed to the repository. | High | Gitleaks, secret management, GitHub secret scanning |
| T04 | GitHub → GitHub Actions | Tampering | A malicious modification to the CI/CD workflow could bypass or alter security controls. | High | Protected workflows, Pull Request review, branch protection |
| T05 | GitHub → GitHub Actions | Elevation of Privilege | Excessive GitHub Actions permissions could allow a compromised workflow to perform unauthorized actions. | High | Least-privilege GitHub Actions permissions |
| T06 | GitHub → GitHub Actions | Information Disclosure | Secrets exposed to the CI/CD runner could be accessed or leaked during pipeline execution. | High | GitHub Secrets, minimal secret exposure, least privilege |
| T07 | Dependencies → Build Pipeline | Tampering | Vulnerable or malicious dependencies could compromise the application or build process. | High | Trivy dependency scanning, dependency review, lockfiles |
| T08 | Docker Build → Container Image | Tampering | Malicious Dockerfile or build changes could result in a compromised container image. | High | Code review, protected branches, Trivy image scanning |
| T09 | GitHub Actions → Code Scanning | Tampering / Information Disclosure | Security results could be manipulated, suppressed, or exposed to unauthorized users. | Medium | Protected workflows, restricted `security-events` permissions, repository access controls |

---

# Security Controls

## Implemented

- Threat Modeling
- SAST using Semgrep
- Secret Scanning using Gitleaks
- Software Composition Analysis using Trivy
- Container Image Scanning using Trivy

## Planned / Runtime Controls

- IaC Scanning
- DAST
- Runtime Security
- Monitoring
