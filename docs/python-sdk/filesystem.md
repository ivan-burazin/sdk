# Table of Contents

* [daytona\_sdk.filesystem](#daytona_sdk.filesystem)
  * [FileSystem](#daytona_sdk.filesystem.FileSystem)
    * [create\_folder](#daytona_sdk.filesystem.FileSystem.create_folder)
    * [delete\_file](#daytona_sdk.filesystem.FileSystem.delete_file)
    * [download\_file](#daytona_sdk.filesystem.FileSystem.download_file)
    * [find\_files](#daytona_sdk.filesystem.FileSystem.find_files)
    * [get\_file\_details](#daytona_sdk.filesystem.FileSystem.get_file_details)
    * [list\_files](#daytona_sdk.filesystem.FileSystem.list_files)
    * [move\_files](#daytona_sdk.filesystem.FileSystem.move_files)
    * [replace\_in\_files](#daytona_sdk.filesystem.FileSystem.replace_in_files)
    * [search\_files](#daytona_sdk.filesystem.FileSystem.search_files)
    * [set\_file\_permissions](#daytona_sdk.filesystem.FileSystem.set_file_permissions)
    * [upload\_file](#daytona_sdk.filesystem.FileSystem.upload_file)

<a id="daytona_sdk.filesystem"></a>

# Module daytona\_sdk.filesystem

File system operations within a Daytona workspace.

This module provides functionality for managing files and directories in a workspace,
including creating, deleting, moving files, and searching file contents.

<a id="daytona_sdk.filesystem.FileSystem"></a>

## FileSystem Objects

```python
class FileSystem()
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/filesystem.py#L20)

Provides file system operations within a workspace.

**Arguments**:

- `instance` - The workspace instance
- `toolbox_api` - API client for workspace operations

<a id="daytona_sdk.filesystem.FileSystem.create_folder"></a>

#### create\_folder

```python
def create_folder(path: str, mode: str) -> None
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/filesystem.py#L32)

Creates a new folder in the workspace.

**Arguments**:

- `path` - Path where the folder should be created
- `mode` - Folder permissions in octal format (e.g. "755")

<a id="daytona_sdk.filesystem.FileSystem.delete_file"></a>

#### delete\_file

```python
def delete_file(path: str) -> None
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/filesystem.py#L43)

Deletes a file from the workspace.

**Arguments**:

- `path` - Path to the file to delete

<a id="daytona_sdk.filesystem.FileSystem.download_file"></a>

#### download\_file

```python
def download_file(path: str) -> bytes
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/filesystem.py#L53)

Downloads a file from the workspace.

**Arguments**:

- `path` - Path to the file to download
  

**Returns**:

  The file contents as bytes

<a id="daytona_sdk.filesystem.FileSystem.find_files"></a>

#### find\_files

```python
def find_files(path: str, pattern: str) -> List[Match]
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/filesystem.py#L66)

Searches for files matching a pattern.

**Arguments**:

- `path` - Root directory to start search from
- `pattern` - Search pattern to match against file contents
  

**Returns**:

  List of matches found in files

<a id="daytona_sdk.filesystem.FileSystem.get_file_details"></a>

#### get\_file\_details

```python
def get_file_details(path: str) -> FileInfo
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/filesystem.py#L80)

Gets detailed information about a file.

**Arguments**:

- `path` - Path to the file
  

**Returns**:

  Detailed file information including size, permissions, etc.

<a id="daytona_sdk.filesystem.FileSystem.list_files"></a>

#### list\_files

```python
def list_files(path: str) -> List[FileInfo]
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/filesystem.py#L93)

Lists files and directories in a given path.

**Arguments**:

- `path` - Directory path to list contents from
  

**Returns**:

  List of file and directory information

<a id="daytona_sdk.filesystem.FileSystem.move_files"></a>

#### move\_files

```python
def move_files(source: str, destination: str) -> None
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/filesystem.py#L106)

Moves files from one location to another.

**Arguments**:

- `source` - Source file/directory path
- `destination` - Destination path

<a id="daytona_sdk.filesystem.FileSystem.replace_in_files"></a>

#### replace\_in\_files

```python
def replace_in_files(files: List[str], pattern: str,
                     new_value: str) -> List[ReplaceResult]
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/filesystem.py#L120)

Replaces text in multiple files.

**Arguments**:

- `files` - List of file paths to perform replacements in
- `pattern` - Pattern to search for (supports regex)
- `new_value` - Text to replace matches with
  

**Returns**:

  List of results indicating replacements made in each file

<a id="daytona_sdk.filesystem.FileSystem.search_files"></a>

#### search\_files

```python
def search_files(path: str, pattern: str) -> SearchFilesResponse
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/filesystem.py#L141)

Searches for files matching a pattern in their names.

**Arguments**:

- `path` - Root directory to start search from
- `pattern` - Pattern to match against file names
  

**Returns**:

  Search results containing matching file paths

<a id="daytona_sdk.filesystem.FileSystem.set_file_permissions"></a>

#### set\_file\_permissions

```python
def set_file_permissions(path: str,
                         mode: str = None,
                         owner: str = None,
                         group: str = None) -> None
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/filesystem.py#L155)

Sets permissions and ownership for a file or directory.

**Arguments**:

- `path` - Path to the file/directory
- `mode` - File mode/permissions in octal format (e.g. "644") (optional)
- `owner` - User owner of the file (optional)
- `group` - Group owner of the file (optional)

<a id="daytona_sdk.filesystem.FileSystem.upload_file"></a>

#### upload\_file

```python
def upload_file(path: str, file: bytes) -> None
```

[[view_source]](https://github.com/daytonaio/daytona-client/blob/b45168f061cd6be86cb18d4f6da11d28c59292bf/packages/python/src/daytona_sdk/filesystem.py#L175)

Uploads a file to the workspace.

**Arguments**:

- `path` - Destination path in the workspace
- `file` - File contents as bytes

