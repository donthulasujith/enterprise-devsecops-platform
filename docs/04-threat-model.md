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

# Trust Boundaries

1. Developer ↔ GitHub
2. GitHub ↔ GitHub Actions
3. Internet ↔ Kubernetes Cluster
4. Kubernetes ↔ Monitoring Stack

---

# Identified Threats

| Component | STRIDE | Threat | Mitigation |
|-----------|---------|--------|------------|
| GitHub Repository | Tampering | Unauthorized code changes | Branch protection, Pull Requests |
| GitHub Actions | Elevation of Privilege | Workflow abuse | Least privilege permissions |
| Source Code | Information Disclosure | Secrets committed to Git | Gitleaks |
| Dependencies | Tampering | Vulnerable packages | Trivy, Dependency Review |
| Docker Image | Tampering | Vulnerable image | Trivy Image Scan |
| Kubernetes | Elevation of Privilege | Excessive RBAC permissions | Least Privilege RBAC |
| Application | Information Disclosure | Sensitive error messages | Secure configuration |
| Runtime | Denial of Service | Resource exhaustion | Resource limits and monitoring |

---

# Security Controls

- Threat Modeling
- SAST
- Secret Scanning
- SCA
- Container Scanning
- IaC Scanning
- DAST
- Runtime Security
- Monitoring
