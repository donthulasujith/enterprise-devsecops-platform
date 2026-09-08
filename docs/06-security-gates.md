# Security Gates

## DAST Security Gate

The CI/CD pipeline performs dynamic application security testing using ZAP
against the containerized OWASP Juice Shop application.

ZAP produces HTML and XML reports.

The HTML report is retained as a human-readable security assessment.

The XML report is processed by the CI security gate to determine whether
High-severity findings are present.

## Gate Policy

| ZAP Risk | Pipeline Behavior |
|---|---|
| High | Block pipeline |
| Medium | Report and document |
| Low | Report and document |
| Informational | Report and document |

The pipeline blocks deployment when at least one High-severity DAST finding
is identified.

Medium and lower findings do not automatically block this project because
OWASP Juice Shop is intentionally vulnerable and is being used as the
security-testing target.

## Rationale

The security gate separates vulnerability detection from release
decision-making.

A scanner finding does not automatically represent a release-blocking
risk. The pipeline therefore applies an explicit risk threshold instead
of treating every ZAP warning as a failure.

This approach also prevents the intentionally vulnerable training
application from making the CI/CD pipeline permanently unusable while
still demonstrating automated security enforcement.

## Current DAST Baseline

The latest ZAP assessment identified:

- High: 0
- Medium: 5
- Low: 5
- Informational: 4

Therefore, the current DAST security gate should pass.
