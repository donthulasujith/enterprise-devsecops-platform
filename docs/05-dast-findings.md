# DAST Security Assessment

## 1. Overview

OWASP ZAP was integrated into the DevSecOps CI/CD pipeline to perform
dynamic application security testing against the deployed OWASP Juice Shop
application.

The scan was performed using ZAP 2.17.0 against the containerized application.

## 2. Scan Results

| Risk Level | Findings |
|------------|----------|
| High | 0 |
| Medium | 5 |
| Low | 5 |
| Informational | 4 |

The scan analyzed 177 endpoints and reported zero false positives.

## 3. Medium Severity Findings

### DAST-01 — Backup File Disclosure

**Severity:** Medium  
**Instances:** 31

#### Description

ZAP identified backup and alternate copies of files that were accessible
through the application's web server.

Examples include:

- `/ftp/quarantine.bak`
- `/ftp/quarantine.backup`
- `/ftp/quarantine.zip`
- `/ftp/quarantine.log`
- `/ftp/package.json.bak`
- `/ftp/package-lock.json.bak`

#### Security Impact

Exposed backup files may contain source code, configuration information,
credentials, internal application data, or other sensitive information.

#### Recommendation

Remove unnecessary backup and temporary files from web-accessible
directories. Backup files should be stored outside the web root and should
not be directly accessible through the application.

#### CWE

CWE-530 — Exposure of Backup File to an Unauthorized Control Sphere

---

### DAST-02 — Bypassing 403

**Severity:** Medium  
**Instances:** 6

#### Description

ZAP identified cases where resources returning HTTP 403 could be accessed
using path normalization techniques.

Example:

`/%2e/ftp/package.json.bak`

#### Security Impact

If access-control protections can be bypassed through alternate URL
representations, attackers may access resources that should be restricted.

#### Recommendation

Normalize and validate request paths consistently before authorization
checks. Ensure that authorization decisions are applied to the canonical
resource path.

---

### DAST-03 — CORS Misconfiguration

**Severity:** Medium  
**Instances:** Systemic

#### Description

ZAP identified permissive Cross-Origin Resource Sharing behavior.

The application returned:

`Access-Control-Allow-Origin: *`

#### Security Impact

Permissive CORS can allow untrusted origins to read resources through
cross-origin browser requests, particularly where sensitive unauthenticated
data is exposed.

#### Recommendation

Restrict allowed origins to trusted domains and avoid wildcard CORS
configuration for sensitive resources.

#### CWE

CWE-942 — Permissive Cross-domain Policy with Untrusted Domains
