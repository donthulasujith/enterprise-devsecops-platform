# Application Assessment

## Project Name

Enterprise DevSecOps Platform

---

## Application

OWASP Juice Shop

---

## Purpose

The application will be used as a production-inspired workload to demonstrate an end-to-end DevSecOps implementation using open-source technologies.

---

## Why this Application?

OWASP Juice Shop is one of the most widely recognized intentionally vulnerable web applications maintained by OWASP. It provides realistic functionality while allowing security engineers to demonstrate secure software delivery practices including Static Application Security Testing (SAST), Software Composition Analysis (SCA), Secret Scanning, Container Security, Kubernetes Security, Dynamic Application Security Testing (DAST), and Runtime Security.

---

## Technology Stack

- Node.js
- TypeScript
- Express.js
- npm
- SQLite (local database)
- REST APIs
- OpenAPI (Swagger)

---

## Dependencies

The application uses **npm** as the package manager.

Dependencies are defined in:

- `package.json`
- `package-lock.json`

The `package-lock.json` file locks dependency versions to ensure reproducible builds and accurate Software Composition Analysis (SCA).

---

## Build Process

The application is started using npm scripts defined in `package.json`.

The project will be executed locally first and then containerized as part of this DevSecOps project.

---

## External Services

No external services are required for local execution.

---

## Authentication

The application implements user authentication using JWT (JSON Web Tokens).

---

## Security-Relevant Files

| File | Purpose |
|------|---------|
| `package.json` | Project metadata, dependencies, and npm scripts |
| `package-lock.json` | Locks dependency versions for reproducible builds |
| `server.ts` | Application entry point |
| `config/` | Application configuration |
| `swagger.yml` | OpenAPI specification for the application's REST APIs |
| `README.md` | Official setup and execution instructions |

---

## Observations

- The application source does not include a Dockerfile.
- A secure multi-stage Dockerfile will be created as part of this project.
- The project uses TypeScript and npm.
- API documentation is available through the `swagger.yml` specification.
- Dependency versions are locked using `package-lock.json`, which improves build consistency and security scanning.

---

## Potential Risks

- Intentionally vulnerable application containing OWASP Top 10 vulnerabilities.
- Vulnerable third-party dependencies.
- Risk of hardcoded secrets being introduced during development.
- Container image vulnerabilities after containerization.
- Kubernetes misconfigurations after deployment.
- Runtime attacks against the running application.

---

## Planned Security Controls

Throughout this project, the following security controls will be implemented:

- Threat Modeling (OWASP Threat Dragon)
- GitHub Branch Protection
- GitHub Actions CI/CD
- Secret Scanning (Gitleaks)
- Static Application Security Testing (Semgrep)
- Software Composition Analysis (Trivy)
- SBOM Generation (Syft)
- Container Image Scanning (Trivy)
- Image Signing (Cosign)
- Infrastructure as Code Scanning (Checkov)
- Kubernetes Policy Enforcement (Kyverno)
- Dynamic Application Security Testing (OWASP ZAP)
- Runtime Security Monitoring (Falco)
- Monitoring (Prometheus & Grafana)
- Centralized Logging (Loki)
