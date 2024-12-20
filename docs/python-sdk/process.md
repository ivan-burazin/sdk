# Table of Contents

* [daytona\_sdk.process](#daytona_sdk.process)
  * [Process](#daytona_sdk.process.Process)
    * [exec](#daytona_sdk.process.Process.exec)
    * [code\_run](#daytona_sdk.process.Process.code_run)

<a id="daytona_sdk.process"></a>

# Module daytona\_sdk.process

Process and code execution within a Daytona workspace.

This module provides functionality for executing commands and running code
in the workspace environment.

<a id="daytona_sdk.process.Process"></a>

## Process Objects

```python
class Process()
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/process.py#L17)

Handles process and code execution within a workspace.

**Arguments**:

- `code_toolbox` - Language-specific code execution toolbox
- `toolbox_api` - API client for workspace operations
- `instance` - The workspace instance

<a id="daytona_sdk.process.Process.exec"></a>

#### exec

```python
def exec(command: str, cwd: Optional[str] = None) -> ExecuteResponse
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/process.py#L36)

Executes a shell command in the workspace.

**Arguments**:

- `command` - Command to execute
- `cwd` - Working directory for command execution (optional)
  

**Returns**:

  Command execution results

<a id="daytona_sdk.process.Process.code_run"></a>

#### code\_run

```python
def code_run(code: str) -> ExecuteResponse
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/process.py#L52)

Executes code in the workspace using the appropriate language runtime.

**Arguments**:

- `code` - Code to execute
  

**Returns**:

  Code execution results

