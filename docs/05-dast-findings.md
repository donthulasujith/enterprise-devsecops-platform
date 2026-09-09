# 05 — DAST Security Findings

## OWASP ZAP Assessment of OWASP Juice Shop

## 1. Executive Summary

OWASP ZAP 2.17.0 was integrated into the DevSecOps pipeline to perform Dynamic Application Security Testing (DAST) against the running containerized Juice Shop application.

The purpose of this assessment is to determine whether the deployed application exposes security issues that are observable through its HTTP interface and to demonstrate an automated security gate based on severity.

The active scan completed successfully and the generated XML report was parsed by the CI pipeline.

### Result

**DAST security gate: PASSED**

The project-defined gate fails only when a ZAP finding has `riskcode == 3`, representing High severity.

No High-severity findings were present in the scan.

---

## 2. Scan Scope

| Attribute | Result |
|---|---|
| Scanner | OWASP ZAP |
| Version | 2.17.0 |
| Scan type | Full / active DAST scan |
| Target | Containerized OWASP Juice Shop |
| URLs crawled | 197 |
| Total alerts | 219 |
| High | 0 |
| Medium | 5 |
| Low | 5 |
| Informational | 0 |
| Gate result | PASS |

The raw ZAP process may return a non-zero exit code when warnings are present. Therefore, the pipeline does not use that exit code as the project's final security decision.

Instead, the XML report is parsed and a separate security gate evaluates High-severity findings.

---

## 3. DAST Architecture

```text
Kubernetes / Docker Target
          |
          | HTTP
          v
   +--------------+
   | OWASP ZAP     |
   | Full Scan     |
   +------+-------+
          |
          | XML report
          v
   +--------------+
   | CI XML Parser |
   +------+-------+
          |
          v
   High severity?
      /       \
    YES       NO
     |         |
   FAIL      PASS
```

This separation allows the project to distinguish scanner execution status from the organization's actual risk policy.

---

## 4. Finding Summary

| Finding | Risk | Observed Evidence / Scope |
|---|---|---|
| Backup File Disclosure | Medium | 31 instances |
| Bypassing 403 | Medium | 6 instances |
| CORS Misconfiguration | Medium | `Access-Control-Allow-Origin: *` observed |
| CSP Header Not Set | Medium | Application responses lack an effective CSP header |
| Cross-Domain Misconfiguration | Medium | Cross-domain policy configuration requires review |
| COEP Missing/Invalid | Low | 5 instances |
| COOP Missing/Invalid | Low | 5 instances |
| Dangerous JS Functions | Low | 1 instance |
| Deprecated Feature Policy | Low | Systemic response-header finding |
| Timestamp Disclosure | Low | Systemic response behavior |

The exact number of alerts is higher than the number of unique finding categories because several categories contain multiple affected URLs.

---

# 5. Medium Findings

## DAST-01 — Backup File Disclosure

**Severity:** Medium  
**Instances:** 31

### Description

ZAP identified backup and alternate copies of files accessible through the web application.

Examples included files under the application's FTP/static content area such as:

- `/ftp/quarantine.bak`
- `/ftp/quarantine.backup`
- `/ftp/quarantine.zip`

Backup files can expose source code, configuration, credentials, historical content, or other information that was not intended to be publicly accessible.

### Security impact

If sensitive material is present in an exposed backup, an attacker may obtain information that can be used to develop a more serious attack.

### Project-specific context

Juice Shop intentionally contains vulnerable files and challenge material. Therefore, these findings are expected as part of the application's testing role.

The correct treatment for this project is to **document and triage** the finding rather than modify Juice Shop to eliminate the challenge content.

### Recommended production remediation

- Remove backup files from web-accessible directories.
- Store backups outside the application document root.
- Prevent deployment artifacts such as `.bak`, `.backup`, `.old`, and `.zip` files from being served.
- Add CI checks for accidental backup files.
- Review web-server static-file rules.

### Status

**Documented / accepted as intentional application test content.**

---

## DAST-02 — Bypassing 403

**Severity:** Medium  
**Instances:** 6

### Description

ZAP identified paths where access restrictions returning HTTP 403 could potentially be bypassed through alternate URL representations.

One observed example was:

`/%2e/ftp/package.json.bak`

The encoded path representation can cause differences between URL normalization performed by a front-end component and the application/web server.

### Security impact

Access-control bypasses can expose resources that were intended to be restricted.

### Recommended production remediation

- Normalize and canonicalize paths consistently.
- Apply authorization after canonicalization.
- Ensure reverse proxies and application servers interpret encoded paths consistently.
- Reject ambiguous path traversal/encoding representations where appropriate.
- Add regression tests for encoded path variants.

### Project-specific context

Juice Shop is intentionally vulnerable, so the finding is retained as evidence of DAST effectiveness.

### Status

**Documented / intentional vulnerable workload.**

---

## DAST-03 — CORS Misconfiguration

**Severity:** Medium

### Evidence

The application returned:

`Access-Control-Allow-Origin: *`

### Description

A wildcard CORS policy allows requests from arbitrary origins where the browser permits the associated request type.

Whether this becomes a serious vulnerability depends on the resources exposed, authentication model, and whether credentials are involved.

### Security impact

Overly broad cross-origin access can allow untrusted websites to interact with application endpoints in ways that were not intended.

### Recommended production remediation

- Define an explicit allowlist of trusted origins.
- Avoid wildcard origins for sensitive authenticated APIs.
- Review credentialed cross-origin requests carefully.
- Apply CORS policies at the API boundary based on business requirements.

### Status

**Documented.** The permissive behavior is part of the intentionally vulnerable test application.

---

## DAST-04 — CSP Header Not Set

**Severity:** Medium

### Description

The application does not provide an effective Content-Security-Policy response header.

CSP can reduce the impact of certain client-side injection attacks by restricting the sources from which scripts and other browser-controlled resources may be loaded.

### Recommended production remediation

Deploy a carefully tested CSP appropriate to the application's JavaScript architecture. Start with reporting/validation and progressively restrict allowed script, style, image, and connection sources.

### Status

**Documented.** Application is intentionally vulnerable.

---

## DAST-05 — Cross-Domain Misconfiguration

**Severity:** Medium

### Description

ZAP identified cross-domain policy behavior that may be broader than required.

Cross-domain configuration should be limited to explicitly trusted domains and protocols.

### Recommended production remediation

- Remove unnecessary cross-domain policy files.
- Restrict allowed origins and protocols.
- Review legacy browser compatibility controls.
- Validate the policy against the application's actual integration requirements.

### Status

**Documented.**

---

# 6. Low Findings

## DAST-06 — COEP Missing or Invalid

**Severity:** Low  
**Instances:** 5

Cross-Origin-Embedder-Policy controls whether cross-origin resources can be embedded under specific browser isolation requirements.

### Recommendation

Evaluate whether the application should use an explicit COEP policy and ensure it is compatible with required third-party resources.

---

## DAST-07 — COOP Missing or Invalid

**Severity:** Low  
**Instances:** 5

Cross-Origin-Opener-Policy can help isolate browsing contexts from cross-origin documents.

### Recommendation

Consider an explicit COOP policy where browser isolation requirements justify it.

---

## DAST-08 — Dangerous JavaScript Functions

**Severity:** Low  
**Instances:** 1

ZAP detected a potentially dangerous JavaScript function pattern.

### Recommendation

Review the specific usage and determine whether it can be replaced with a safer API or constrained through application design.

Because this is an intentionally vulnerable application, the finding is not automatically treated as a production defect introduced by this project.

---

## DAST-09 — Deprecated Feature Policy

**Severity:** Low

The application exposes the legacy Feature-Policy mechanism.

### Recommendation

Migrate to the modern Permissions-Policy header where appropriate and remove obsolete policy mechanisms.

---

## DAST-10 — Timestamp Disclosure

**Severity:** Low

Response behavior may expose timestamp information that can provide minor environmental information.

### Recommendation

Avoid unnecessary diagnostic timestamps in externally visible responses where they provide no functional value.

---

# 7. Security Gate

The CI pipeline uses the generated ZAP XML report as the authoritative input for the DAST gate.

The policy is:

```text
If any ZAP alert has riskcode == 3:
    FAIL pipeline
Else:
    PASS DAST gate
```

This intentionally permits Medium and Low findings to be documented without making the entire delivery pipeline unusable for an intentionally vulnerable training application.

The policy can later be tightened for a production workload.

---

# 8. False Positive Handling

The project does **not** claim that every ZAP alert is a false positive.

Instead, each result is interpreted in application context. Some findings are genuine behaviors of the intentionally vulnerable Juice Shop application, while the pipeline's role is to expose those behaviors and demonstrate risk-based gating.

This distinction avoids incorrectly labeling a real finding as a false positive merely because the application is intentionally vulnerable.

---

# 9. Assessment Conclusion

The DAST implementation successfully demonstrated:

- automated dynamic scanning,
- scanning of a live application target,
- report generation in HTML and XML,
- artifact retention,
- extraction of severity from the XML report,
- a custom CI security policy, and
- a successful gate with zero High-severity findings.

The scan therefore demonstrates the **security-control capability of the platform**, while the documented Medium and Low findings demonstrate the residual vulnerability surface of the intentionally vulnerable workload.
