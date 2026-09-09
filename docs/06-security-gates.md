# 06 — Security Gates

## DevSecOps Security Gate Policy

## 1. Purpose

Security gates translate scanner output into an engineering decision.

A scanner alone answers:

> "What did the tool find?"

A security gate answers:

> "Does this result meet our delivery policy?"

This project deliberately separates those concepts so that tools can produce findings without automatically causing a pipeline failure that does not match the application's risk model.

---

## 2. Gate Architecture

```text
                    CI Pipeline
                        |
       +----------------+----------------+
       |                |                |
       v                v                v
    Semgrep          Gitleaks          Trivy
       |                |                |
       +----------------+----------------+
                        |
                        v
                   Docker Build
                        |
                        v
                  Trivy Image
                        |
                        v
                    Checkov
                        |
                        v
                       ZAP
                        |
                        v
                 XML Security Gate
                        |
                +-------+-------+
                |               |
             High found     No High
                |               |
              FAIL            PASS
```

---

## 3. Current Controls and Gate Behavior

| Control | Tool | Current CI Behavior | Security Meaning |
|---|---|---|---|
| SAST | Semgrep | Scanner job | Detect source-level weaknesses |
| Secret scanning | Gitleaks | Non-blocking | Detect secrets while accommodating intentional test material |
| Filesystem/SCA | Trivy | Scanner/reporting | Identify vulnerable dependencies/files |
| Image scanning | Trivy | Scanner/reporting | Identify vulnerable image packages |
| DAST | OWASP ZAP | **High findings fail** | Block delivery when High-risk dynamic findings exist |
| Kubernetes IaC | Checkov | Soft-fail/reporting | Identify insecure Kubernetes configuration |

The distinction between **blocking** and **reporting** controls is intentional and should be documented rather than hidden.

---

## 4. DAST Gate Policy

The DAST gate is the strongest explicit security gate currently implemented.

### Rule

> **Any ZAP High-severity finding causes the DAST security gate to fail.**

Medium, Low, and Informational findings are retained in the report but do not fail the current gate.

### Why this policy?

Juice Shop is intentionally vulnerable. If every Medium or Low result blocked the pipeline, the project would be unable to demonstrate normal DevSecOps delivery behavior against its intended test target.

The policy therefore demonstrates risk-based gating rather than a simplistic "zero findings" model.

---

## 5. DAST Gate Implementation

The workflow generates both HTML and XML ZAP reports.

The XML report is parsed using Python's standard `xml.etree.ElementTree` library.

Conceptually:

```text
Read zap-full-report.xml
        ↓
Find every <alertitem>
        ↓
Read riskcode
        ↓
If riskcode == 3
        ↓
Record High finding
        ↓
Any High findings?
   /             \
 YES             NO
  /                 \
FAIL               PASS
```

The raw ZAP command is allowed to complete even when ZAP returns a warning-related non-zero status. The separate XML gate then makes the project's actual decision.

---

## 6. Current DAST Evidence

The completed active scan produced:

| Metric | Value |
|---|---:|
| ZAP version | 2.17.0 |
| URLs crawled | 197 |
| Total alerts | 219 |
| High | 0 |
| Medium | 5 |
| Low | 5 |
| Informational | 0 |
| Gate | **PASS** |

The raw HTML report is retained as a CI artifact for investigation and evidence.

---

## 7. Checkov Policy

Checkov scans the Kubernetes manifests under `k8s/` using the Kubernetes framework.

The scan is currently configured with `soft_fail: true`.

The hardened manifests significantly reduced the number of policy failures, and the remaining failures are explicitly visible rather than concealed.

Current known Checkov failures include:

- `CKV_K8S_40` — high UID policy expectation
- `CKV_K8S_15` — image pull policy expectation
- `CKV_K8S_43` — image digest expectation

The project therefore should **not** describe Checkov as a fully passing gate.

The correct statement is:

> Checkov is integrated as a Kubernetes IaC security control and currently operates as a soft-fail reporting control while remaining policy gaps are documented.

---

## 8. Gitleaks Policy

Gitleaks is integrated into CI to detect credential-like material.

It remains non-blocking because Juice Shop contains intentionally vulnerable test keys and other challenge material.

This is an explicit project decision:

```text
Gitleaks finding
      ↓
Review context
      ↓
Intentional test material?
      ↓
Yes → Document / accept
No  → Investigate / remediate
```

The presence of a non-blocking scanner does not mean secrets are ignored. It means the project has separated **detection** from **automatic blocking** because of the characteristics of its intentionally vulnerable workload.

---

## 9. Trivy Policy

Trivy provides two important views:

### Filesystem / dependency scanning

Identifies vulnerable dependencies and filesystem components before deployment.

### Image scanning

Examines the built container artifact, which is important because the final image can differ from the source dependency tree.

The project uses `.trivyignore` for explicitly triaged findings where appropriate. Ignored findings should remain documented and periodically reviewed.

---

## 10. Gate Design Principles

### Principle 1 — Gate on risk, not scanner noise

A scanner's exit code is not automatically equivalent to business risk.

### Principle 2 — Preserve evidence

Non-blocking findings remain visible in CI artifacts and reports.

### Principle 3 — Make exceptions explicit

An exception such as a Trivy ignore or non-blocking Gitleaks step should be documented rather than silently suppressing the result.

### Principle 4 — Use stronger gates as maturity increases

The current project demonstrates a realistic maturity path:

```text
Detection
   ↓
Reporting
   ↓
Risk-based gating
   ↓
Policy enforcement
   ↓
Continuous prevention
```

---

## 11. Failure Handling

When a blocking DAST High finding is detected:

1. The XML parser identifies the finding.
2. The security gate prints the finding name and count.
3. The gate exits with status 1.
4. The workflow records the failure.
5. The report remains available for investigation.

This creates a clear remediation loop:

```text
Build
 ↓
Scan
 ↓
High finding
 ↓
Pipeline fails
 ↓
Security investigation
 ↓
Remediation / risk acceptance
 ↓
Re-run
```

---

## 12. Current Gate Maturity

| Capability | Maturity |
|---|---|
| Security scanning | Implemented |
| Automated DAST | Implemented |
| Artifact retention | Implemented |
| High-severity DAST gate | Implemented |
| Risk-based gate policy | Implemented |
| IaC security scanning | Implemented |
| Fully blocking IaC policy | Future improvement |
| Fully blocking dependency policy | Future improvement |
| Signed artifact verification | Future improvement |
| Admission control | Future improvement |

---

## 13. Recommended Future Improvements

The next maturity steps would be:

1. Enforce remaining Checkov failures after validating their operational impact.
2. Pin container images by digest.
3. Add SBOM generation and artifact retention.
4. Sign images with Cosign.
5. Verify signatures during deployment.
6. Introduce Kubernetes admission policy.
7. Establish documented vulnerability exceptions with expiration dates.
8. Add stronger dependency update and review automation.

---

## 14. Final Security-Gate Statement

The platform demonstrates a risk-based DevSecOps security-gating model rather than a cosmetic "all scanners green" implementation.

The strongest currently enforced policy is the DAST High-severity gate. Other scanners provide detection and evidence while remaining non-blocking or soft-fail where the intentionally vulnerable Juice Shop workload makes strict zero-finding enforcement inappropriate.

This distinction should remain visible in project documentation because it accurately represents the platform's current security posture.
