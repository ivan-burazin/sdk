# api_client.WorkspaceToolboxApi

All URIs are relative to *http://localhost:3986*

Method | HTTP request | Description
------------- | ------------- | -------------
[**fs_create_folder**](WorkspaceToolboxApi.md#fs_create_folder) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/files/folder | Create folder
[**fs_delete_file**](WorkspaceToolboxApi.md#fs_delete_file) | **DELETE** /workspace/{workspaceId}/{projectId}/toolbox/files | Delete file
[**fs_download_file**](WorkspaceToolboxApi.md#fs_download_file) | **GET** /workspace/{workspaceId}/{projectId}/toolbox/files/download | Download file
[**fs_find_in_files**](WorkspaceToolboxApi.md#fs_find_in_files) | **GET** /workspace/{workspaceId}/{projectId}/toolbox/files/find | Search for text/pattern in files
[**fs_get_file_details**](WorkspaceToolboxApi.md#fs_get_file_details) | **GET** /workspace/{workspaceId}/{projectId}/toolbox/files/info | Get file info
[**fs_list_files**](WorkspaceToolboxApi.md#fs_list_files) | **GET** /workspace/{workspaceId}/{projectId}/toolbox/files | List files
[**fs_move_file**](WorkspaceToolboxApi.md#fs_move_file) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/files/move | Create folder
[**fs_replace_in_files**](WorkspaceToolboxApi.md#fs_replace_in_files) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/files/replace | Repleace text/pattern in files
[**fs_search_files**](WorkspaceToolboxApi.md#fs_search_files) | **GET** /workspace/{workspaceId}/{projectId}/toolbox/files/search | Search for files
[**fs_set_file_permissions**](WorkspaceToolboxApi.md#fs_set_file_permissions) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/files/permissions | Set file owner/group/permissions
[**fs_upload_file**](WorkspaceToolboxApi.md#fs_upload_file) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/files/upload | Upload file
[**get_project_dir**](WorkspaceToolboxApi.md#get_project_dir) | **GET** /workspace/{workspaceId}/{projectId}/toolbox/project-dir | Get project dir
[**git_add_files**](WorkspaceToolboxApi.md#git_add_files) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/git/add | Add files
[**git_branch_list**](WorkspaceToolboxApi.md#git_branch_list) | **GET** /workspace/{workspaceId}/{projectId}/toolbox/git/branches | Get branch list
[**git_clone_repository**](WorkspaceToolboxApi.md#git_clone_repository) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/git/clone | Clone git repository
[**git_commit_changes**](WorkspaceToolboxApi.md#git_commit_changes) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/git/commit | Commit changes
[**git_commit_history**](WorkspaceToolboxApi.md#git_commit_history) | **GET** /workspace/{workspaceId}/{projectId}/toolbox/git/history | Get commit history
[**git_create_branch**](WorkspaceToolboxApi.md#git_create_branch) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/git/branches | Create branch
[**git_git_status**](WorkspaceToolboxApi.md#git_git_status) | **GET** /workspace/{workspaceId}/{projectId}/toolbox/git/status | Get git status
[**git_pull_changes**](WorkspaceToolboxApi.md#git_pull_changes) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/git/pull | Pull changes
[**git_push_changes**](WorkspaceToolboxApi.md#git_push_changes) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/git/push | Push changes
[**lsp_completions**](WorkspaceToolboxApi.md#lsp_completions) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/lsp/completions | Get Lsp Completions
[**lsp_did_close**](WorkspaceToolboxApi.md#lsp_did_close) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/lsp/did-close | Call Lsp DidClose
[**lsp_did_open**](WorkspaceToolboxApi.md#lsp_did_open) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/lsp/did-open | Call Lsp DidOpen
[**lsp_document_symbols**](WorkspaceToolboxApi.md#lsp_document_symbols) | **GET** /workspace/{workspaceId}/{projectId}/toolbox/lsp/document-symbols | Call Lsp DocumentSymbols
[**lsp_start**](WorkspaceToolboxApi.md#lsp_start) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/lsp/start | Start Lsp server
[**lsp_stop**](WorkspaceToolboxApi.md#lsp_stop) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/lsp/stop | Stop Lsp server
[**lsp_workspace_symbols**](WorkspaceToolboxApi.md#lsp_workspace_symbols) | **GET** /workspace/{workspaceId}/{projectId}/toolbox/lsp/workspace-symbols | Call Lsp WorkspaceSymbols
[**process_execute_command**](WorkspaceToolboxApi.md#process_execute_command) | **POST** /workspace/{workspaceId}/{projectId}/toolbox/process/execute | Execute command


# **fs_create_folder**
> fs_create_folder(workspace_id, project_id, path, mode)

Create folder

Create folder inside workspace project

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    path = 'path_example' # str | Path
    mode = 'mode_example' # str | Mode

    try:
        # Create folder
        api_instance.fs_create_folder(workspace_id, project_id, path, mode)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->fs_create_folder: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **path** | **str**| Path | 
 **mode** | **str**| Mode | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fs_delete_file**
> fs_delete_file(workspace_id, project_id, path)

Delete file

Delete file inside workspace project

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    path = 'path_example' # str | Path

    try:
        # Delete file
        api_instance.fs_delete_file(workspace_id, project_id, path)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->fs_delete_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **path** | **str**| Path | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fs_download_file**
> bytearray fs_download_file(workspace_id, project_id, path)

Download file

Download file from workspace project

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    path = 'path_example' # str | Path

    try:
        # Download file
        api_response = api_instance.fs_download_file(workspace_id, project_id, path)
        print("The response of WorkspaceToolboxApi->fs_download_file:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->fs_download_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **path** | **str**| Path | 

### Return type

**bytearray**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | response contains the file |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fs_find_in_files**
> List[Match] fs_find_in_files(workspace_id, project_id, path, pattern)

Search for text/pattern in files

Search for text/pattern inside workspace project files

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.match import Match
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    path = 'path_example' # str | Path
    pattern = 'pattern_example' # str | Pattern

    try:
        # Search for text/pattern in files
        api_response = api_instance.fs_find_in_files(workspace_id, project_id, path, pattern)
        print("The response of WorkspaceToolboxApi->fs_find_in_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->fs_find_in_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **path** | **str**| Path | 
 **pattern** | **str**| Pattern | 

### Return type

[**List[Match]**](Match.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fs_get_file_details**
> FileInfo fs_get_file_details(workspace_id, project_id, path)

Get file info

Get file info inside workspace project

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.file_info import FileInfo
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    path = 'path_example' # str | Path

    try:
        # Get file info
        api_response = api_instance.fs_get_file_details(workspace_id, project_id, path)
        print("The response of WorkspaceToolboxApi->fs_get_file_details:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->fs_get_file_details: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **path** | **str**| Path | 

### Return type

[**FileInfo**](FileInfo.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fs_list_files**
> List[FileInfo] fs_list_files(workspace_id, project_id, path=path)

List files

List files inside workspace project

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.file_info import FileInfo
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    path = 'path_example' # str | Path (optional)

    try:
        # List files
        api_response = api_instance.fs_list_files(workspace_id, project_id, path=path)
        print("The response of WorkspaceToolboxApi->fs_list_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->fs_list_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **path** | **str**| Path | [optional] 

### Return type

[**List[FileInfo]**](FileInfo.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fs_move_file**
> fs_move_file(workspace_id, project_id, source, destination)

Create folder

Create folder inside workspace project

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    source = 'source_example' # str | Source path
    destination = 'destination_example' # str | Destination path

    try:
        # Create folder
        api_instance.fs_move_file(workspace_id, project_id, source, destination)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->fs_move_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **source** | **str**| Source path | 
 **destination** | **str**| Destination path | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fs_replace_in_files**
> List[ReplaceResult] fs_replace_in_files(workspace_id, project_id, replace)

Repleace text/pattern in files

Repleace text/pattern in mutilple files inside workspace project

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.replace_request import ReplaceRequest
from api_client.models.replace_result import ReplaceResult
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    replace = api_client.ReplaceRequest() # ReplaceRequest | ReplaceParams

    try:
        # Repleace text/pattern in files
        api_response = api_instance.fs_replace_in_files(workspace_id, project_id, replace)
        print("The response of WorkspaceToolboxApi->fs_replace_in_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->fs_replace_in_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **replace** | [**ReplaceRequest**](ReplaceRequest.md)| ReplaceParams | 

### Return type

[**List[ReplaceResult]**](ReplaceResult.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fs_search_files**
> SearchFilesResponse fs_search_files(workspace_id, project_id, path, pattern)

Search for files

Search for files inside workspace project

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.search_files_response import SearchFilesResponse
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    path = 'path_example' # str | Path
    pattern = 'pattern_example' # str | Pattern

    try:
        # Search for files
        api_response = api_instance.fs_search_files(workspace_id, project_id, path, pattern)
        print("The response of WorkspaceToolboxApi->fs_search_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->fs_search_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **path** | **str**| Path | 
 **pattern** | **str**| Pattern | 

### Return type

[**SearchFilesResponse**](SearchFilesResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fs_set_file_permissions**
> fs_set_file_permissions(workspace_id, project_id, path, owner=owner, group=group, mode=mode)

Set file owner/group/permissions

Set file owner/group/permissions inside workspace project

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    path = 'path_example' # str | Path
    owner = 'owner_example' # str | Owner (optional)
    group = 'group_example' # str | Group (optional)
    mode = 'mode_example' # str | Mode (optional)

    try:
        # Set file owner/group/permissions
        api_instance.fs_set_file_permissions(workspace_id, project_id, path, owner=owner, group=group, mode=mode)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->fs_set_file_permissions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **path** | **str**| Path | 
 **owner** | **str**| Owner | [optional] 
 **group** | **str**| Group | [optional] 
 **mode** | **str**| Mode | [optional] 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **fs_upload_file**
> fs_upload_file(workspace_id, project_id, path, file)

Upload file

Upload file inside workspace project

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    path = 'path_example' # str | Path
    file = None # bytearray | File

    try:
        # Upload file
        api_instance.fs_upload_file(workspace_id, project_id, path, file)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->fs_upload_file: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **path** | **str**| Path | 
 **file** | **bytearray**| File | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: multipart/form-data
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_project_dir**
> ProjectDirResponse get_project_dir(workspace_id, project_id)

Get project dir

Get project directory

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.project_dir_response import ProjectDirResponse
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID

    try:
        # Get project dir
        api_response = api_instance.get_project_dir(workspace_id, project_id)
        print("The response of WorkspaceToolboxApi->get_project_dir:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->get_project_dir: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 

### Return type

[**ProjectDirResponse**](ProjectDirResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **git_add_files**
> git_add_files(workspace_id, project_id, params)

Add files

Add files to git commit

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.git_add_request import GitAddRequest
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    params = api_client.GitAddRequest() # GitAddRequest | GitAddRequest

    try:
        # Add files
        api_instance.git_add_files(workspace_id, project_id, params)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->git_add_files: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **params** | [**GitAddRequest**](GitAddRequest.md)| GitAddRequest | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **git_branch_list**
> ListBranchResponse git_branch_list(workspace_id, project_id, path)

Get branch list

Get branch list from git repository inside workspace project

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.list_branch_response import ListBranchResponse
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    path = 'path_example' # str | Path to git repository

    try:
        # Get branch list
        api_response = api_instance.git_branch_list(workspace_id, project_id, path)
        print("The response of WorkspaceToolboxApi->git_branch_list:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->git_branch_list: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **path** | **str**| Path to git repository | 

### Return type

[**ListBranchResponse**](ListBranchResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **git_clone_repository**
> git_clone_repository(workspace_id, project_id, params)

Clone git repository

Clone git repository inside workspace project

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.git_clone_request import GitCloneRequest
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    params = api_client.GitCloneRequest() # GitCloneRequest | GitCloneRequest

    try:
        # Clone git repository
        api_instance.git_clone_repository(workspace_id, project_id, params)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->git_clone_repository: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **params** | [**GitCloneRequest**](GitCloneRequest.md)| GitCloneRequest | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **git_commit_changes**
> GitCommitResponse git_commit_changes(workspace_id, project_id, params)

Commit changes

Commit changes to git repository inside workspace project

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.git_commit_request import GitCommitRequest
from api_client.models.git_commit_response import GitCommitResponse
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    params = api_client.GitCommitRequest() # GitCommitRequest | GitCommitRequest

    try:
        # Commit changes
        api_response = api_instance.git_commit_changes(workspace_id, project_id, params)
        print("The response of WorkspaceToolboxApi->git_commit_changes:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->git_commit_changes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **params** | [**GitCommitRequest**](GitCommitRequest.md)| GitCommitRequest | 

### Return type

[**GitCommitResponse**](GitCommitResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **git_commit_history**
> List[GitCommitInfo] git_commit_history(workspace_id, project_id, path)

Get commit history

Get commit history from git repository inside workspace project

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.git_commit_info import GitCommitInfo
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    path = 'path_example' # str | Path to git repository

    try:
        # Get commit history
        api_response = api_instance.git_commit_history(workspace_id, project_id, path)
        print("The response of WorkspaceToolboxApi->git_commit_history:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->git_commit_history: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **path** | **str**| Path to git repository | 

### Return type

[**List[GitCommitInfo]**](GitCommitInfo.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **git_create_branch**
> git_create_branch(workspace_id, project_id, params)

Create branch

Create branch on git repository inside workspace project

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.git_branch_request import GitBranchRequest
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    params = api_client.GitBranchRequest() # GitBranchRequest | GitBranchRequest

    try:
        # Create branch
        api_instance.git_create_branch(workspace_id, project_id, params)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->git_create_branch: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **params** | [**GitBranchRequest**](GitBranchRequest.md)| GitBranchRequest | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **git_git_status**
> GitStatus git_git_status(workspace_id, project_id, path)

Get git status

Get status from git repository inside workspace project

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.git_status import GitStatus
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    path = 'path_example' # str | Path to git repository

    try:
        # Get git status
        api_response = api_instance.git_git_status(workspace_id, project_id, path)
        print("The response of WorkspaceToolboxApi->git_git_status:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->git_git_status: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **path** | **str**| Path to git repository | 

### Return type

[**GitStatus**](GitStatus.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **git_pull_changes**
> git_pull_changes(workspace_id, project_id, params)

Pull changes

Pull changes from remote to git repository inside workspace project

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.git_repo_request import GitRepoRequest
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    params = api_client.GitRepoRequest() # GitRepoRequest | Git pull request

    try:
        # Pull changes
        api_instance.git_pull_changes(workspace_id, project_id, params)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->git_pull_changes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **params** | [**GitRepoRequest**](GitRepoRequest.md)| Git pull request | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **git_push_changes**
> git_push_changes(workspace_id, project_id, params)

Push changes

Push changes to remote from git repository inside workspace project

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.git_repo_request import GitRepoRequest
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    params = api_client.GitRepoRequest() # GitRepoRequest | Git push request

    try:
        # Push changes
        api_instance.git_push_changes(workspace_id, project_id, params)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->git_push_changes: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **params** | [**GitRepoRequest**](GitRepoRequest.md)| Git push request | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lsp_completions**
> CompletionList lsp_completions(workspace_id, project_id, params)

Get Lsp Completions

The Completion request is sent from the client to the server to compute completion items at a given cursor position.

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.completion_list import CompletionList
from api_client.models.lsp_completion_params import LspCompletionParams
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    params = api_client.LspCompletionParams() # LspCompletionParams | LspCompletionParams

    try:
        # Get Lsp Completions
        api_response = api_instance.lsp_completions(workspace_id, project_id, params)
        print("The response of WorkspaceToolboxApi->lsp_completions:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->lsp_completions: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **params** | [**LspCompletionParams**](LspCompletionParams.md)| LspCompletionParams | 

### Return type

[**CompletionList**](CompletionList.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lsp_did_close**
> lsp_did_close(workspace_id, project_id, params)

Call Lsp DidClose

The document close notification is sent from the client to the server when the document got closed in the client.

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.lsp_document_request import LspDocumentRequest
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    params = api_client.LspDocumentRequest() # LspDocumentRequest | LspDocumentRequest

    try:
        # Call Lsp DidClose
        api_instance.lsp_did_close(workspace_id, project_id, params)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->lsp_did_close: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **params** | [**LspDocumentRequest**](LspDocumentRequest.md)| LspDocumentRequest | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lsp_did_open**
> lsp_did_open(workspace_id, project_id, params)

Call Lsp DidOpen

The document open notification is sent from the client to the server to signal newly opened text documents.

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.lsp_document_request import LspDocumentRequest
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    params = api_client.LspDocumentRequest() # LspDocumentRequest | LspDocumentRequest

    try:
        # Call Lsp DidOpen
        api_instance.lsp_did_open(workspace_id, project_id, params)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->lsp_did_open: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **params** | [**LspDocumentRequest**](LspDocumentRequest.md)| LspDocumentRequest | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lsp_document_symbols**
> List[LspSymbol] lsp_document_symbols(workspace_id, project_id, language_id, path_to_project, uri)

Call Lsp DocumentSymbols

The document symbol request is sent from the client to the server.

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.lsp_symbol import LspSymbol
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    language_id = 'language_id_example' # str | Language ID
    path_to_project = 'path_to_project_example' # str | Path to project
    uri = 'uri_example' # str | Document Uri

    try:
        # Call Lsp DocumentSymbols
        api_response = api_instance.lsp_document_symbols(workspace_id, project_id, language_id, path_to_project, uri)
        print("The response of WorkspaceToolboxApi->lsp_document_symbols:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->lsp_document_symbols: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **language_id** | **str**| Language ID | 
 **path_to_project** | **str**| Path to project | 
 **uri** | **str**| Document Uri | 

### Return type

[**List[LspSymbol]**](LspSymbol.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lsp_start**
> lsp_start(workspace_id, project_id, params)

Start Lsp server

Start Lsp server process inside workspace project

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.lsp_server_request import LspServerRequest
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    params = api_client.LspServerRequest() # LspServerRequest | LspServerRequest

    try:
        # Start Lsp server
        api_instance.lsp_start(workspace_id, project_id, params)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->lsp_start: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **params** | [**LspServerRequest**](LspServerRequest.md)| LspServerRequest | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lsp_stop**
> lsp_stop(workspace_id, project_id, params)

Stop Lsp server

Stop Lsp server process inside workspace project

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.lsp_server_request import LspServerRequest
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    params = api_client.LspServerRequest() # LspServerRequest | LspServerRequest

    try:
        # Stop Lsp server
        api_instance.lsp_stop(workspace_id, project_id, params)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->lsp_stop: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **params** | [**LspServerRequest**](LspServerRequest.md)| LspServerRequest | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **lsp_workspace_symbols**
> List[LspSymbol] lsp_workspace_symbols(workspace_id, project_id, language_id, path_to_project, query)

Call Lsp WorkspaceSymbols

The workspace symbol request is sent from the client to the server to list project-wide symbols matching the query string.

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.lsp_symbol import LspSymbol
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    language_id = 'language_id_example' # str | Language ID
    path_to_project = 'path_to_project_example' # str | Path to project
    query = 'query_example' # str | Symbol Query

    try:
        # Call Lsp WorkspaceSymbols
        api_response = api_instance.lsp_workspace_symbols(workspace_id, project_id, language_id, path_to_project, query)
        print("The response of WorkspaceToolboxApi->lsp_workspace_symbols:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->lsp_workspace_symbols: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **language_id** | **str**| Language ID | 
 **path_to_project** | **str**| Path to project | 
 **query** | **str**| Symbol Query | 

### Return type

[**List[LspSymbol]**](LspSymbol.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **process_execute_command**
> ExecuteResponse process_execute_command(workspace_id, project_id, params)

Execute command

Execute command synchronously inside workspace project

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.execute_request import ExecuteRequest
from api_client.models.execute_response import ExecuteResponse
from api_client.rest import ApiException
from pprint import pprint

# Defining the host is optional and defaults to http://localhost:3986
# See configuration.py for a list of all supported configuration parameters.
configuration = api_client.Configuration(
    host = "http://localhost:3986"
)

# The client must configure the authentication and authorization parameters
# in accordance with the API server security policy.
# Examples for each auth method are provided below, use the example that
# satisfies your auth use case.

# Configure API key authorization: Bearer
configuration.api_key['Bearer'] = os.environ["API_KEY"]

# Uncomment below to setup prefix (e.g. Bearer) for API key, if needed
# configuration.api_key_prefix['Bearer'] = 'Bearer'

# Enter a context with an instance of the API client
with api_client.ApiClient(configuration) as api_client:
    # Create an instance of the API class
    api_instance = api_client.WorkspaceToolboxApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    params = api_client.ExecuteRequest() # ExecuteRequest | Execute command request

    try:
        # Execute command
        api_response = api_instance.process_execute_command(workspace_id, project_id, params)
        print("The response of WorkspaceToolboxApi->process_execute_command:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceToolboxApi->process_execute_command: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **params** | [**ExecuteRequest**](ExecuteRequest.md)| Execute command request | 

### Return type

[**ExecuteResponse**](ExecuteResponse.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

