# Table of Contents

* [daytona\_sdk.workspace](#daytona_sdk.workspace)
  * [WorkspaceResources](#daytona_sdk.workspace.WorkspaceResources)
  * [WorkspaceInfo](#daytona_sdk.workspace.WorkspaceInfo)
  * [Workspace](#daytona_sdk.workspace.Workspace)
    * [info](#daytona_sdk.workspace.Workspace.info)
    * [get\_workspace\_root\_dir](#daytona_sdk.workspace.Workspace.get_workspace_root_dir)
    * [create\_lsp\_server](#daytona_sdk.workspace.Workspace.create_lsp_server)
    * [set\_labels](#daytona_sdk.workspace.Workspace.set_labels)
    * [start](#daytona_sdk.workspace.Workspace.start)
    * [stop](#daytona_sdk.workspace.Workspace.stop)
    * [wait\_for\_workspace\_start](#daytona_sdk.workspace.Workspace.wait_for_workspace_start)
    * [wait\_for\_workspace\_stop](#daytona_sdk.workspace.Workspace.wait_for_workspace_stop)

<a id="daytona_sdk.workspace"></a>

# Module daytona\_sdk.workspace

Core workspace functionality for Daytona.

This module provides the main Workspace class that coordinates file system,
Git, process execution, and LSP functionality.

<a id="daytona_sdk.workspace.WorkspaceResources"></a>

## WorkspaceResources Objects

```python
@dataclass
class WorkspaceResources()
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/1398af77e9dc731b596a6407c9aac388c5e999a6/packages/python/src/daytona_sdk/workspace.py#L21)

Resources allocated to a workspace.

<a id="daytona_sdk.workspace.WorkspaceInfo"></a>

## WorkspaceInfo Objects

```python
@dataclass
class WorkspaceInfo()
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/1398af77e9dc731b596a6407c9aac388c5e999a6/packages/python/src/daytona_sdk/workspace.py#L29)

Structured information about a workspace.

<a id="daytona_sdk.workspace.Workspace"></a>

## Workspace Objects

```python
class Workspace()
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/1398af77e9dc731b596a6407c9aac388c5e999a6/packages/python/src/daytona_sdk/workspace.py#L45)

Represents a Daytona workspace instance.

A workspace provides file system operations, Git operations, process execution,
and LSP functionality.

**Arguments**:

- `id` - Unique identifier for the workspace
- `instance` - The underlying workspace instance
- `workspace_api` - API client for workspace operations
- `toolbox_api` - API client for workspace operations
- `code_toolbox` - Language-specific toolbox implementation
  

**Attributes**:

- `fs` - File system operations interface for managing files and directories
- `git` - Git operations interface for version control functionality
- `process` - Process execution interface for running commands and code

<a id="daytona_sdk.workspace.Workspace.info"></a>

#### info

```python
def info() -> WorkspaceInfo
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/1398af77e9dc731b596a6407c9aac388c5e999a6/packages/python/src/daytona_sdk/workspace.py#L83)

Get structured information about the workspace.

**Returns**:

- `WorkspaceInfo` - Structured workspace information

<a id="daytona_sdk.workspace.Workspace.get_workspace_root_dir"></a>

#### get\_workspace\_root\_dir

```python
def get_workspace_root_dir() -> str
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/1398af77e9dc731b596a6407c9aac388c5e999a6/packages/python/src/daytona_sdk/workspace.py#L127)

Gets the root directory path of the workspace.

**Returns**:

  The absolute path to the workspace root

<a id="daytona_sdk.workspace.Workspace.create_lsp_server"></a>

#### create\_lsp\_server

```python
def create_lsp_server(language_id: LspLanguageId,
                      path_to_project: str) -> LspServer
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/1398af77e9dc731b596a6407c9aac388c5e999a6/packages/python/src/daytona_sdk/workspace.py#L138)

Creates a new Language Server Protocol (LSP) server instance.

**Arguments**:

- `language_id` - The language server type
- `path_to_project` - Path to the project root
  

**Returns**:

  A new LSP server instance

<a id="daytona_sdk.workspace.Workspace.set_labels"></a>

#### set\_labels

```python
def set_labels(labels: Dict[str, str]) -> Dict[str, str]
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/1398af77e9dc731b596a6407c9aac388c5e999a6/packages/python/src/daytona_sdk/workspace.py#L152)

Sets labels for the workspace.

**Arguments**:

- `labels` - Dictionary of key-value pairs representing workspace labels
  

**Returns**:

  Dictionary containing the updated workspace labels
  

**Raises**:

- `urllib.error.HTTPError` - If the server request fails
- `urllib.error.URLError` - If there's a network/connection error

<a id="daytona_sdk.workspace.Workspace.start"></a>

#### start

```python
def start()
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/1398af77e9dc731b596a6407c9aac388c5e999a6/packages/python/src/daytona_sdk/workspace.py#L170)

Starts the workspace.

<a id="daytona_sdk.workspace.Workspace.stop"></a>

#### stop

```python
def stop()
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/1398af77e9dc731b596a6407c9aac388c5e999a6/packages/python/src/daytona_sdk/workspace.py#L176)

Stops the workspace.

<a id="daytona_sdk.workspace.Workspace.wait_for_workspace_start"></a>

#### wait\_for\_workspace\_start

```python
def wait_for_workspace_start() -> None
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/1398af77e9dc731b596a6407c9aac388c5e999a6/packages/python/src/daytona_sdk/workspace.py#L181)

Wait for workspace to reach 'started' state.

**Raises**:

- `Exception` - If workspace fails to start or times out

<a id="daytona_sdk.workspace.Workspace.wait_for_workspace_stop"></a>

#### wait\_for\_workspace\_stop

```python
def wait_for_workspace_stop() -> None
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/1398af77e9dc731b596a6407c9aac388c5e999a6/packages/python/src/daytona_sdk/workspace.py#L211)

Wait for workspace to reach 'stopped' state.

**Raises**:

- `Exception` - If workspace fails to stop or times out

