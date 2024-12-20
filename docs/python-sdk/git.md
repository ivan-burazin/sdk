# Table of Contents

* [daytona\_sdk.git](#daytona_sdk.git)
  * [Git](#daytona_sdk.git.Git)
    * [add](#daytona_sdk.git.Git.add)
    * [branches](#daytona_sdk.git.Git.branches)
    * [clone](#daytona_sdk.git.Git.clone)
    * [commit](#daytona_sdk.git.Git.commit)
    * [push](#daytona_sdk.git.Git.push)
    * [pull](#daytona_sdk.git.Git.pull)
    * [status](#daytona_sdk.git.Git.status)

<a id="daytona_sdk.git"></a>

# Module daytona\_sdk.git

Git operations within a Daytona workspace.

This module provides functionality for managing Git repositories, including cloning,
committing changes, pushing/pulling, and checking repository status.

<a id="daytona_sdk.git.Git"></a>

## Git Objects

```python
class Git()
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/git.py#L21)

Provides Git operations within a workspace.

**Arguments**:

- `workspace` - The parent workspace instance
- `toolbox_api` - API client for workspace operations
- `instance` - The workspace instance

<a id="daytona_sdk.git.Git.add"></a>

#### add

```python
def add(path: str, files: List[str]) -> None
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/git.py#L40)

Stages files for commit.

**Arguments**:

- `path` - Repository path
- `files` - List of file paths to stage

<a id="daytona_sdk.git.Git.branches"></a>

#### branches

```python
def branches(path: str) -> ListBranchResponse
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/git.py#L53)

Lists branches in the repository.

**Arguments**:

- `path` - Repository path
  

**Returns**:

  List of branches and their information

<a id="daytona_sdk.git.Git.clone"></a>

#### clone

```python
def clone(url: str,
          path: str,
          branch: Optional[str] = None,
          commit_id: Optional[str] = None,
          username: Optional[str] = None,
          password: Optional[str] = None) -> None
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/git.py#L68)

Clones a Git repository.

**Arguments**:

- `url` - Repository URL
- `path` - Destination path
- `branch` - Branch to clone (optional)
- `commit_id` - Specific commit to clone (optional)
- `username` - Git username for authentication (optional)
- `password` - Git password/token for authentication (optional)

<a id="daytona_sdk.git.Git.commit"></a>

#### commit

```python
def commit(path: str, message: str, author: str, email: str) -> None
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/git.py#L100)

Commits staged changes.

**Arguments**:

- `path` - Repository path
- `message` - Commit message
- `author` - Name of the commit author
- `email` - Email of the commit author

<a id="daytona_sdk.git.Git.push"></a>

#### push

```python
def push(path: str,
         username: Optional[str] = None,
         password: Optional[str] = None) -> None
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/git.py#L115)

Pushes local commits to the remote repository.

**Arguments**:

- `path` - Repository path
- `username` - Git username for authentication (optional)
- `password` - Git password/token for authentication (optional)

<a id="daytona_sdk.git.Git.pull"></a>

#### pull

```python
def pull(path: str,
         username: Optional[str] = None,
         password: Optional[str] = None) -> None
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/git.py#L131)

Pulls changes from the remote repository.

**Arguments**:

- `path` - Repository path
- `username` - Git username for authentication (optional)
- `password` - Git password/token for authentication (optional)

<a id="daytona_sdk.git.Git.status"></a>

#### status

```python
def status(path: str) -> GitStatus
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/git.py#L147)

Gets the current Git repository status.

**Arguments**:

- `path` - Repository path
  

**Returns**:

  Repository status information including staged, unstaged, and untracked files

