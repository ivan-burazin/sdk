# api_client.PrebuildApi

All URIs are relative to *http://localhost:3986*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_prebuild**](PrebuildApi.md#delete_prebuild) | **DELETE** /project-config/{configName}/prebuild/{prebuildId} | Delete prebuild
[**get_prebuild**](PrebuildApi.md#get_prebuild) | **GET** /project-config/{configName}/prebuild/{prebuildId} | Get prebuild
[**list_prebuilds**](PrebuildApi.md#list_prebuilds) | **GET** /project-config/prebuild | List prebuilds
[**list_prebuilds_for_project_config**](PrebuildApi.md#list_prebuilds_for_project_config) | **GET** /project-config/{configName}/prebuild | List prebuilds for project config
[**process_git_event**](PrebuildApi.md#process_git_event) | **POST** /project-config/prebuild/process-git-event | ProcessGitEvent
[**set_prebuild**](PrebuildApi.md#set_prebuild) | **PUT** /project-config/{configName}/prebuild | Set prebuild


# **delete_prebuild**
> delete_prebuild(config_name, prebuild_id, force=force)

Delete prebuild

Delete prebuild

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
    api_instance = api_client.PrebuildApi(api_client)
    config_name = 'config_name_example' # str | Project config name
    prebuild_id = 'prebuild_id_example' # str | Prebuild ID
    force = True # bool | Force (optional)

    try:
        # Delete prebuild
        api_instance.delete_prebuild(config_name, prebuild_id, force=force)
    except Exception as e:
        print("Exception when calling PrebuildApi->delete_prebuild: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **config_name** | **str**| Project config name | 
 **prebuild_id** | **str**| Prebuild ID | 
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
**204** | No Content |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_prebuild**
> PrebuildDTO get_prebuild(config_name, prebuild_id)

Get prebuild

Get prebuild

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.prebuild_dto import PrebuildDTO
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
    api_instance = api_client.PrebuildApi(api_client)
    config_name = 'config_name_example' # str | Project config name
    prebuild_id = 'prebuild_id_example' # str | Prebuild ID

    try:
        # Get prebuild
        api_response = api_instance.get_prebuild(config_name, prebuild_id)
        print("The response of PrebuildApi->get_prebuild:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrebuildApi->get_prebuild: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **config_name** | **str**| Project config name | 
 **prebuild_id** | **str**| Prebuild ID | 

### Return type

[**PrebuildDTO**](PrebuildDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_prebuilds**
> List[PrebuildDTO] list_prebuilds()

List prebuilds

List prebuilds

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.prebuild_dto import PrebuildDTO
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
    api_instance = api_client.PrebuildApi(api_client)

    try:
        # List prebuilds
        api_response = api_instance.list_prebuilds()
        print("The response of PrebuildApi->list_prebuilds:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrebuildApi->list_prebuilds: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[PrebuildDTO]**](PrebuildDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_prebuilds_for_project_config**
> List[PrebuildDTO] list_prebuilds_for_project_config(config_name)

List prebuilds for project config

List prebuilds for project config

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.prebuild_dto import PrebuildDTO
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
    api_instance = api_client.PrebuildApi(api_client)
    config_name = 'config_name_example' # str | Config name

    try:
        # List prebuilds for project config
        api_response = api_instance.list_prebuilds_for_project_config(config_name)
        print("The response of PrebuildApi->list_prebuilds_for_project_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrebuildApi->list_prebuilds_for_project_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **config_name** | **str**| Config name | 

### Return type

[**List[PrebuildDTO]**](PrebuildDTO.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **process_git_event**
> process_git_event(workspace)

ProcessGitEvent

ProcessGitEvent

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
    api_instance = api_client.PrebuildApi(api_client)
    workspace = None # object | Webhook event

    try:
        # ProcessGitEvent
        api_instance.process_git_event(workspace)
    except Exception as e:
        print("Exception when calling PrebuildApi->process_git_event: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **workspace** | **object**| Webhook event | 

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

# **set_prebuild**
> str set_prebuild(config_name, prebuild)

Set prebuild

Set prebuild

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.create_prebuild_dto import CreatePrebuildDTO
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
    api_instance = api_client.PrebuildApi(api_client)
    config_name = 'config_name_example' # str | Config name
    prebuild = api_client.CreatePrebuildDTO() # CreatePrebuildDTO | Prebuild

    try:
        # Set prebuild
        api_response = api_instance.set_prebuild(config_name, prebuild)
        print("The response of PrebuildApi->set_prebuild:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling PrebuildApi->set_prebuild: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **config_name** | **str**| Config name | 
 **prebuild** | [**CreatePrebuildDTO**](CreatePrebuildDTO.md)| Prebuild | 

### Return type

**str**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: */*

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

