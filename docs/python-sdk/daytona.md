# Table of Contents

* [daytona\_sdk.daytona](#daytona_sdk.daytona)
  * [DaytonaConfig](#daytona_sdk.daytona.DaytonaConfig)
  * [WorkspaceResources](#daytona_sdk.daytona.WorkspaceResources)
    * [memory](#daytona_sdk.daytona.WorkspaceResources.memory)
    * [disk](#daytona_sdk.daytona.WorkspaceResources.disk)
  * [CreateWorkspaceParams](#daytona_sdk.daytona.CreateWorkspaceParams)
  * [Daytona](#daytona_sdk.daytona.Daytona)
    * [\_\_init\_\_](#daytona_sdk.daytona.Daytona.__init__)
    * [create](#daytona_sdk.daytona.Daytona.create)
    * [remove](#daytona_sdk.daytona.Daytona.remove)
    * [get\_current\_workspace](#daytona_sdk.daytona.Daytona.get_current_workspace)
    * [start](#daytona_sdk.daytona.Daytona.start)
    * [stop](#daytona_sdk.daytona.Daytona.stop)

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

[[view_source]](https://github.com/daytonaio/daytona-client/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/python/src/daytona_sdk/daytona.py#L33)

Configuration options for initializing the Daytona client.

**Arguments**:

- `api_key` - API key for authentication with Daytona server
- `server_url` - URL of the Daytona server
- `target` - Target environment for workspaces

<a id="daytona_sdk.daytona.WorkspaceResources"></a>

## WorkspaceResources Objects

```python
@dataclass
class WorkspaceResources()
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/python/src/daytona_sdk/daytona.py#L46)

Resources configuration for workspace

<a id="daytona_sdk.daytona.WorkspaceResources.memory"></a>

#### memory

in MB

<a id="daytona_sdk.daytona.WorkspaceResources.disk"></a>

#### disk

in GB

<a id="daytona_sdk.daytona.CreateWorkspaceParams"></a>

## CreateWorkspaceParams Objects

```python
@dataclass
class CreateWorkspaceParams()
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/python/src/daytona_sdk/daytona.py#L54)

Parameters for creating a new workspace.

<a id="daytona_sdk.daytona.Daytona"></a>

## Daytona Objects

```python
class Daytona()
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/python/src/daytona_sdk/daytona.py#L68)

<a id="daytona_sdk.daytona.Daytona.__init__"></a>

#### \_\_init\_\_

```python
def __init__(config: Optional[DaytonaConfig] = None)
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/python/src/daytona_sdk/daytona.py#L69)

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

[[view_source]](https://github.com/daytonaio/daytona-client/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/python/src/daytona_sdk/daytona.py#L162)

Creates a new workspace and waits for it to start.

**Arguments**:

- `params` - Optional parameters for workspace creation. If not provided,
  defaults to Python language.
  

**Returns**:

  The created workspace instance

<a id="daytona_sdk.daytona.Daytona.remove"></a>

#### remove

```python
def remove(workspace: Workspace) -> None
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/python/src/daytona_sdk/daytona.py#L237)

Removes a workspace.

**Arguments**:

- `workspace` - The workspace to remove

<a id="daytona_sdk.daytona.Daytona.get_current_workspace"></a>

#### get\_current\_workspace

```python
def get_current_workspace(workspace_id: str) -> Workspace
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/python/src/daytona_sdk/daytona.py#L245)

Get a workspace by its ID.

**Arguments**:

- `workspace_id` - The ID of the workspace to retrieve
  

**Returns**:

- `Workspace` - The workspace instance
  

**Raises**:

- `ValueError` - If workspace_id is not provided

<a id="daytona_sdk.daytona.Daytona.start"></a>

#### start

```python
def start(workspace: Workspace) -> None
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/python/src/daytona_sdk/daytona.py#L270)

Starts a workspace and waits for it to be ready.

**Arguments**:

- `workspace` - The workspace to start

<a id="daytona_sdk.daytona.Daytona.stop"></a>

#### stop

```python
def stop(workspace: Workspace) -> None
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/python/src/daytona_sdk/daytona.py#L279)

Stops a workspace and waits for it to be stopped.

**Arguments**:

- `workspace` - The workspace to stop

