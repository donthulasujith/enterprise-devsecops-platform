# Runtime Security

## 1. Overview

The Kubernetes deployment applies multiple runtime security controls to reduce the impact of a compromised application.

The goal is defense in depth: even if the intentionally vulnerable application is exploited, the workload should have limited privileges and limited access to the container filesystem and Linux capabilities.

## 2. Runtime Security Controls

### Non-Root Execution

The application runs using UID 65532 rather than UID 0.

This reduces the privileges available to the application process if the application is compromised.

### Read-Only Root Filesystem

The main application container uses:

`readOnlyRootFilesystem: true`

This prevents writes to the normal container filesystem.

Juice Shop requires several application directories to be writable at runtime, so those specific paths are backed by `emptyDir` volumes.

### Writable Runtime Volumes

The deployment provides writable volumes for:

- `/app/data`
- `/app/ftp`
- `/app/frontend/dist`
- `/app/.well-known`
- `/app/i18n`
- `/app/logs`

An init container copies required image content into the writable volumes before the main application starts.

This allows the root filesystem to remain read-only while preserving the application's required runtime behavior.

### Linux Capabilities

All Linux capabilities are dropped:

```yaml
capabilities:
  drop:
    - ALL
```

This reduces the kernel-level privileges available to the workload.

### Privilege Escalation

The container explicitly disables privilege escalation:

```yaml
allowPrivilegeEscalation: false
```

### Seccomp

The Pod uses:

```yaml
seccompProfile:
  type: RuntimeDefault
```

This applies the container runtime's default seccomp filtering.

### ServiceAccount Token

Automatic ServiceAccount token mounting is disabled:

```yaml
automountServiceAccountToken: false
```

The application does not require Kubernetes API credentials.

### Resource Controls

CPU and memory requests and limits are configured to reduce uncontrolled resource consumption.

### NetworkPolicy

A Kubernetes NetworkPolicy restricts ingress to the application Pod to traffic originating from the Juice Shop namespace on TCP port 3000.

The policy is an ingress restriction; it does not implement complete egress isolation.

## 3. Runtime Validation

The following runtime behaviors were directly tested:

- Process identity showed UID 65532.
- Writing to `/app/runtime-test` failed because the root filesystem was read-only.
- Writing to `/app/data/runtime-test` succeeded because the required application volume is writable.
- Linux capability fields for the main process showed zero effective/permitted/bounding capabilities.
- The application successfully started and listened on port 3000.

Configuration controls such as seccomp, privilege escalation, ServiceAccount token mounting, resource limits, and NetworkPolicy are enforced through the Kubernetes manifests.

## 4. Security Rationale

These controls provide defense in depth:

```text
Application Vulnerability
        |
        v
Compromised Process
        |
        +--> Non-root UID
        +--> No Linux capabilities
        +--> No privilege escalation
        +--> Read-only root filesystem
        +--> No Kubernetes API token
        +--> NetworkPolicy restrictions
        +--> Resource limits
```

The objective is not to claim that the application is vulnerability-free. The objective is to limit the blast radius of a successful application compromise.
