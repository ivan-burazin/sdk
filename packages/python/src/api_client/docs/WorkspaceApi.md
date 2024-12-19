# api_client.WorkspaceApi

All URIs are relative to *http://localhost:3986*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_workspace**](WorkspaceApi.md#create_workspace) | **POST** /workspace | Create a workspace
[**get_workspace**](WorkspaceApi.md#get_workspace) | **GET** /workspace/{workspaceId} | Get workspace info
[**list_workspaces**](WorkspaceApi.md#list_workspaces) | **GET** /workspace | List workspaces
[**remove_workspace**](WorkspaceApi.md#remove_workspace) | **DELETE** /workspace/{workspaceId} | Remove workspace
[**set_project_state**](WorkspaceApi.md#set_project_state) | **POST** /workspace/{workspaceId}/{projectId}/state | Set project state
[**start_project**](WorkspaceApi.md#start_project) | **POST** /workspace/{workspaceId}/{projectId}/start | Start project
[**start_workspace**](WorkspaceApi.md#start_workspace) | **POST** /workspace/{workspaceId}/start | Start workspace
[**stop_project**](WorkspaceApi.md#stop_project) | **POST** /workspace/{workspaceId}/{projectId}/stop | Stop project
[**stop_workspace**](WorkspaceApi.md#stop_workspace) | **POST** /workspace/{workspaceId}/stop | Stop workspace


# **create_workspace**
> Workspace create_workspace(workspace)

Create a workspace

Create a workspace

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.create_workspace_dto import CreateWorkspaceDTO
from api_client.models.workspace import Workspace
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
    api_instance = api_client.WorkspaceApi(api_client)
    workspace = api_client.CreateWorkspaceDTO() # CreateWorkspaceDTO | Create workspace

    try:
        # Create a workspace
        api_response = api_instance.create_workspace(workspace)
        print("The response of WorkspaceApi->create_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceApi->create_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | [**CreateWorkspaceDTO**](CreateWorkspaceDTO.md)| Create workspace | 

### Return type

[**Workspace**](Workspace.md)

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

# **get_workspace**
> WorkspaceDTO get_workspace(workspace_id, verbose=verbose)

Get workspace info

Get workspace info

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.workspace_dto import WorkspaceDTO
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
    api_instance = api_client.WorkspaceApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    verbose = True # bool | Verbose (optional)

    try:
        # Get workspace info
        api_response = api_instance.get_workspace(workspace_id, verbose=verbose)
        print("The response of WorkspaceApi->get_workspace:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceApi->get_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **verbose** | **bool**| Verbose | [optional] 

### Return type

[**WorkspaceDTO**](WorkspaceDTO.md)

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

# **list_workspaces**
> List[WorkspaceDTO] list_workspaces(verbose=verbose)

List workspaces

List workspaces

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.workspace_dto import WorkspaceDTO
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
    api_instance = api_client.WorkspaceApi(api_client)
    verbose = True # bool | Verbose (optional)

    try:
        # List workspaces
        api_response = api_instance.list_workspaces(verbose=verbose)
        print("The response of WorkspaceApi->list_workspaces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling WorkspaceApi->list_workspaces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **verbose** | **bool**| Verbose | [optional] 

### Return type

[**List[WorkspaceDTO]**](WorkspaceDTO.md)

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

# **remove_workspace**
> remove_workspace(workspace_id, force=force)

Remove workspace

Remove workspace

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
    api_instance = api_client.WorkspaceApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID
    force = True # bool | Force (optional)

    try:
        # Remove workspace
        api_instance.remove_workspace(workspace_id, force=force)
    except Exception as e:
        print("Exception when calling WorkspaceApi->remove_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID | 
 **force** | **bool**| Force | [optional] 

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

# **set_project_state**
> set_project_state(workspace_id, project_id, set_state)

Set project state

Set project state

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.set_project_state import SetProjectState
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
    api_instance = api_client.WorkspaceApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID
    set_state = api_client.SetProjectState() # SetProjectState | Set State

    try:
        # Set project state
        api_instance.set_project_state(workspace_id, project_id, set_state)
    except Exception as e:
        print("Exception when calling WorkspaceApi->set_project_state: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 
 **set_state** | [**SetProjectState**](SetProjectState.md)| Set State | 

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

# **start_project**
> start_project(workspace_id, project_id)

Start project

Start project

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
    api_instance = api_client.WorkspaceApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID

    try:
        # Start project
        api_instance.start_project(workspace_id, project_id)
    except Exception as e:
        print("Exception when calling WorkspaceApi->start_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 

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

# **start_workspace**
> start_workspace(workspace_id)

Start workspace

Start workspace

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
    api_instance = api_client.WorkspaceApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name

    try:
        # Start workspace
        api_instance.start_workspace(workspace_id)
    except Exception as e:
        print("Exception when calling WorkspaceApi->start_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 

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

# **stop_project**
> stop_project(workspace_id, project_id)

Stop project

Stop project

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
    api_instance = api_client.WorkspaceApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name
    project_id = 'project_id_example' # str | Project ID

    try:
        # Stop project
        api_instance.stop_project(workspace_id, project_id)
    except Exception as e:
        print("Exception when calling WorkspaceApi->stop_project: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 
 **project_id** | **str**| Project ID | 

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

# **stop_workspace**
> stop_workspace(workspace_id)

Stop workspace

Stop workspace

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
    api_instance = api_client.WorkspaceApi(api_client)
    workspace_id = 'workspace_id_example' # str | Workspace ID or Name

    try:
        # Stop workspace
        api_instance.stop_workspace(workspace_id)
    except Exception as e:
        print("Exception when calling WorkspaceApi->stop_workspace: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace_id** | **str**| Workspace ID or Name | 

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

