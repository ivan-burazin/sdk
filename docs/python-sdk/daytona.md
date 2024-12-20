# Table of Contents

* [daytona\_sdk.daytona](#daytona_sdk.daytona)
  * [DaytonaConfig](#daytona_sdk.daytona.DaytonaConfig)
  * [CreateWorkspaceParams](#daytona_sdk.daytona.CreateWorkspaceParams)
  * [Daytona](#daytona_sdk.daytona.Daytona)
    * [\_\_init\_\_](#daytona_sdk.daytona.Daytona.__init__)
    * [create](#daytona_sdk.daytona.Daytona.create)
    * [remove](#daytona_sdk.daytona.Daytona.remove)
    * [get\_current\_workspace](#daytona_sdk.daytona.Daytona.get_current_workspace)

<a id="daytona_sdk.daytona"></a>

# Module daytona\_sdk.daytona

Daytona SDK for Python

This module provides the main entry point for interacting with Daytona Server API.

<a id="daytona_sdk.daytona.DaytonaConfig"></a>

## DaytonaConfig Objects

```python
@dataclass
class DaytonaConfig()
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/daytona.py#L30)

Configuration options for initializing the Daytona client.

**Arguments**:

- `api_key` - API key for authentication with Daytona server
- `server_url` - URL of the Daytona server
- `target` - Target environment for workspaces

<a id="daytona_sdk.daytona.CreateWorkspaceParams"></a>

## CreateWorkspaceParams Objects

```python
@dataclass
class CreateWorkspaceParams()
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/daytona.py#L44)

Parameters for creating a new workspace.

**Arguments**:

- `id` - Optional workspace ID. If not provided, a random ID will be generated
- `image` - Optional Docker image to use for the workspace
- `language` - Programming language to use in the workspace

<a id="daytona_sdk.daytona.Daytona"></a>

## Daytona Objects

```python
class Daytona()
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/daytona.py#L57)

<a id="daytona_sdk.daytona.Daytona.__init__"></a>

#### \_\_init\_\_

```python
def __init__(config: Optional[DaytonaConfig] = None)
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/daytona.py#L58)

Initialize Daytona instance with optional configuration.
If no config is provided, reads from environment variables using environs.

**Arguments**:

- `config` - Optional DaytonaConfig object containing api_key, server_url, and target
  

**Raises**:

- `ValueError` - If API key or Server URL is not provided either through config or environment variables

<a id="daytona_sdk.daytona.Daytona.create"></a>

#### create

```python
def create(params: Optional[CreateWorkspaceParams] = None) -> Workspace
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/daytona.py#L100)

Creates a new workspace.

**Arguments**:

- `params` - Parameters for workspace creation
  

**Returns**:

  The created workspace instance
  

**Raises**:

- `ValueError` - When an unsupported language is specified

<a id="daytona_sdk.daytona.Daytona.remove"></a>

#### remove

```python
def remove(workspace: Workspace) -> None
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/daytona.py#L174)

Removes a workspace.

**Arguments**:

- `workspace` - The workspace to remove

<a id="daytona_sdk.daytona.Daytona.get_current_workspace"></a>

#### get\_current\_workspace

```python
def get_current_workspace() -> Workspace
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/daytona.py#L182)

Get the current workspace based on environment variables.

**Returns**:

- `Workspace` - The current workspace instance
  

**Raises**:

- `ValueError` - If DAYTONA_WORKSPACE_ID is not set in environment

