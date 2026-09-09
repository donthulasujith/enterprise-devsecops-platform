# Runtime Security

## Overview

The application is deployed to Kubernetes using a hardened container configuration.

The runtime security controls are designed to reduce the impact of container compromise by enforcing least privilege, restricting filesystem writes, removing unnecessary Linux capabilities, and preventing unnecessary access to the Kubernetes API.

## Runtime Security Controls

### 1. Non-Root Execution

The Juice Shop container runs as UID 65532 rather than root.

Kubernetes configuration:

```yaml
securityContext:
  runAsUser: 65532
  runAsGroup: 0
  runAsNonRoot: true
```

Runtime validation:

```bash
kubectl exec -n juice-shop <POD> -- id
```

Observed result:

```text
uid=65532 gid=0(root) groups=0(root)
```

The process is running with UID 65532 rather than UID 0.

**Security benefit:**

Running as a non-root user limits the privileges available to an attacker if application-level code execution is achieved.

### 2. Read-Only Root Filesystem

The main Juice Shop container uses:

```yaml
readOnlyRootFilesystem: true
```

This prevents processes inside the container from modifying the container's base filesystem.

Runtime validation was performed by attempting to create a file in `/app`:

```bash
kubectl exec -n juice-shop <POD> -- sh -c 'touch /app/runtime-test'
```

Observed result:

```text
touch: cannot touch '/app/runtime-test': Read-only file system
```

The write was denied as expected.

**Security benefit:**

A compromised application cannot freely modify binaries, configuration files, or other files located on the container's read-only filesystem.

### 3. Restricted Writable Filesystem

Juice Shop requires several directories to be writable during application initialization and runtime.

Instead of disabling the read-only root filesystem, writable `emptyDir` volumes are mounted only at the required application paths:

```text
/app/data
/app/ftp
/app/frontend/dist
/app/.well-known
/app/i18n
/app/logs
```

An init container copies the required application files into the writable volumes before the main application starts.

Runtime validation was performed against `/app/data`:

```bash
kubectl exec -n juice-shop <POD> -- sh -c 'touch /app/data/runtime-test'
```

Observed result:

```text
WRITE SUCCEEDED
```

The temporary test file was subsequently removed.

This demonstrates that the application has access to required writable locations while the remainder of the container filesystem remains read-only.

**Security benefit:**

This follows a least-privilege filesystem model by minimizing the writable surface available to the application.

### 4. Linux Capabilities Removed

The container drops all Linux capabilities:

```yaml
securityContext:
  capabilities:
    drop:
      - ALL
```

Runtime validation:

```bash
kubectl exec -n juice-shop <POD> -- sh -c 'grep Cap /proc/1/status'
```

Observed result:

```text
CapInh: 0000000000000000
CapPrm: 0000000000000000
CapEff: 0000000000000000
CapBnd: 0000000000000000
CapAmb: 0000000000000000
```

The effective capability set is:

```text
CapEff: 0000000000000000
```

**Security benefit:**

Removing unnecessary Linux capabilities reduces the privileges available to a compromised process and limits potential container breakout or system-level actions.

### 5. Privilege Escalation Disabled

The container configuration includes:

```yaml
allowPrivilegeEscalation: false
```

This prevents the container process from gaining additional privileges through mechanisms such as set-user-ID or set-group-ID binaries.

**Security benefit:**

This provides an additional restriction against privilege escalation after application compromise.

### 6. Seccomp Profile

The Pod uses the Kubernetes runtime default seccomp profile:

```yaml
securityContext:
  seccompProfile:
    type: RuntimeDefault
```

Seccomp restricts the system calls that processes inside the container can make.

**Security benefit:**

This reduces the available kernel attack surface for a compromised application.

### 7. Kubernetes Service Account Token Disabled

Automatic ServiceAccount token mounting is disabled:

```yaml
automountServiceAccountToken: false
```

The Juice Shop application does not require access to the Kubernetes API.

**Security benefit:**

If the application is compromised, an attacker does not automatically receive a Kubernetes ServiceAccount token that could potentially be used to interact with the Kubernetes API.

### 8. Resource Limits

CPU and memory requests and limits are configured:

```yaml
resources:
  requests:
    cpu: "250m"
    memory: "256Mi"
  limits:
    cpu: "500m"
    memory: "512Mi"
```

**Security benefit:**

Resource limits help prevent a single compromised or malfunctioning container from consuming unlimited node resources.

### 9. Kubernetes NetworkPolicy

A Kubernetes NetworkPolicy is configured for the Juice Shop workload.

The policy restricts ingress traffic to the Juice Shop Pod and permits TCP traffic on port 3000 from workloads in the Juice Shop namespace.

**Security benefit:**

Network segmentation reduces unnecessary network exposure and limits which workloads can communicate with the application.

### 10. Health Monitoring

The deployment uses Kubernetes readiness and liveness probes.

Readiness probe:

```yaml
readinessProbe:
  httpGet:
    path: /
    port: 3000
```

Liveness probe:

```yaml
livenessProbe:
  httpGet:
    path: /
    port: 3000
```

The readiness probe prevents traffic from being sent to a Pod before the application is ready.

The liveness probe allows Kubernetes to restart the container if the application becomes unhealthy.

**Security and reliability benefit:**

Health checks improve service reliability and allow Kubernetes to automatically recover from certain runtime failures.

## Runtime Validation

The following runtime tests were performed against the deployed Juice Shop Pod.

| Security Control | Validation | Result |
|---|---|---|
| Non-root execution | `id` | UID 65532 |
| Read-only root filesystem | Attempted write to `/app` | Denied |
| Required writable directory | Write to `/app/data` | Allowed |
| Linux capabilities | `/proc/1/status` | All capability sets = 0 |
| Privilege escalation | Kubernetes security context | Disabled |
| Seccomp | Kubernetes security context | RuntimeDefault |
| ServiceAccount token | Pod configuration | Disabled |
| Resource limits | Kubernetes deployment | Configured |
| Network isolation | NetworkPolicy | Configured |
| Application health | Kubernetes Pod status | `1/1 Running` |

## Runtime Security Architecture

The runtime security model follows a defense-in-depth approach:

```text
                    Kubernetes Cluster
                           |
                    Juice Shop Pod
                           |
             +-------------+-------------+
             |                           |
       Security Context             Application
             |                           |
     +-------+-------+           +-------+-------+
     |       |       |           |       |       |
   Non-   Seccomp  No Linux    Read-   Writable  Health
   root   Runtime  Capabilities Only   Volumes   Probes
           Default             Root
                               FS
             |
       No Privilege
        Escalation
             |
       No ServiceAccount
           Token
```

The application therefore operates with a restricted runtime identity and a minimized filesystem and privilege footprint.

## Security Impact

These runtime controls are designed to reduce the potential impact of an application compromise.

If an attacker successfully exploits a vulnerability in Juice Shop, the compromised process would still be constrained by:

- Non-root execution
- Read-only container filesystem
- Limited writable directories
- No Linux capabilities
- Disabled privilege escalation
- Seccomp restrictions
- No automatically mounted Kubernetes API token
- Kubernetes NetworkPolicy
- CPU and memory limits

This demonstrates that security controls continue beyond the CI/CD pipeline and remain enforced when the application is running.

## Conclusion

The Kubernetes deployment applies defense-in-depth runtime security controls while maintaining the functionality required by the intentionally vulnerable Juice Shop application.

Runtime validation confirmed that the most important container security controls are actively enforced rather than only defined in Kubernetes manifests.

The deployment therefore demonstrates security across the development lifecycle:

```text
Source Code
     |
     v
CI/CD Security
     |
     +-- SAST
     +-- SCA
     +-- Secret Scanning
     +-- Container Scanning
     +-- DAST
     +-- IaC Scanning
     |
     v
Hardened Container
     |
     v
Hardened Kubernetes Runtime
     |
     +-- Non-root
     +-- Read-only filesystem
     +-- No capabilities
     +-- Seccomp
     +-- No privilege escalation
     +-- NetworkPolicy
     +-- Resource limits
     |
     v
Running Application
```
