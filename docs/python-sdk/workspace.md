# Table of Contents

* [daytona\_sdk.workspace](#daytona_sdk.workspace)
  * [Workspace](#daytona_sdk.workspace.Workspace)
    * [get\_workspace\_root\_dir](#daytona_sdk.workspace.Workspace.get_workspace_root_dir)
    * [create\_lsp\_server](#daytona_sdk.workspace.Workspace.create_lsp_server)

<a id="daytona_sdk.workspace"></a>

# Module daytona\_sdk.workspace

Core workspace functionality for Daytona.

This module provides the main Workspace class that coordinates file system,
Git, process execution, and LSP functionality.

<a id="daytona_sdk.workspace.Workspace"></a>

## Workspace Objects

```python
class Workspace()
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/workspace.py#L17)

Represents a Daytona workspace instance.

A workspace provides file system operations, Git operations, process execution,
and LSP functionality.

**Arguments**:

- `id` - Unique identifier for the workspace
- `instance` - The underlying workspace instance
- `toolbox_api` - API client for workspace operations
- `code_toolbox` - Language-specific toolbox implementation
  

**Attributes**:

- `fs` - File system operations interface for managing files and directories
- `git` - Git operations interface for version control functionality
- `process` - Process execution interface for running commands and code

<a id="daytona_sdk.workspace.Workspace.get_workspace_root_dir"></a>

#### get\_workspace\_root\_dir

```python
def get_workspace_root_dir() -> str
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/workspace.py#L52)

Gets the root directory path of the workspace.

**Returns**:

  The absolute path to the workspace root

<a id="daytona_sdk.workspace.Workspace.create_lsp_server"></a>

#### create\_lsp\_server

```python
def create_lsp_server(language_id: LspLanguageId,
                      path_to_project: str) -> LspServer
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/workspace.py#L63)

Creates a new Language Server Protocol (LSP) server instance.

**Arguments**:

- `language_id` - The language server type
- `path_to_project` - Path to the project root
  

**Returns**:

  A new LSP server instance

