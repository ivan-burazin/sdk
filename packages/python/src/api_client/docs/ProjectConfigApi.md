# api_client.ProjectConfigApi

All URIs are relative to *http://localhost:3986*

Method | HTTP request | Description
------------- | ------------- | -------------
[**delete_project_config**](ProjectConfigApi.md#delete_project_config) | **DELETE** /project-config/{configName} | Delete project config data
[**get_default_project_config**](ProjectConfigApi.md#get_default_project_config) | **GET** /project-config/default/{gitUrl} | Get project configs by git url
[**get_project_config**](ProjectConfigApi.md#get_project_config) | **GET** /project-config/{configName} | Get project config data
[**list_project_configs**](ProjectConfigApi.md#list_project_configs) | **GET** /project-config | List project configs
[**set_default_project_config**](ProjectConfigApi.md#set_default_project_config) | **PATCH** /project-config/{configName}/set-default | Set project config to default
[**set_project_config**](ProjectConfigApi.md#set_project_config) | **PUT** /project-config | Set project config data


# **delete_project_config**
> delete_project_config(config_name, force=force)

Delete project config data

Delete project config data

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
    api_instance = api_client.ProjectConfigApi(api_client)
    config_name = 'config_name_example' # str | Config name
    force = True # bool | Force (optional)

    try:
        # Delete project config data
        api_instance.delete_project_config(config_name, force=force)
    except Exception as e:
        print("Exception when calling ProjectConfigApi->delete_project_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **config_name** | **str**| Config name | 
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

# **get_default_project_config**
> ProjectConfig get_default_project_config(git_url)

Get project configs by git url

Get project configs by git url

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.project_config import ProjectConfig
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
    api_instance = api_client.ProjectConfigApi(api_client)
    git_url = 'git_url_example' # str | Git URL

    try:
        # Get project configs by git url
        api_response = api_instance.get_default_project_config(git_url)
        print("The response of ProjectConfigApi->get_default_project_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectConfigApi->get_default_project_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **git_url** | **str**| Git URL | 

### Return type

[**ProjectConfig**](ProjectConfig.md)

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

# **get_project_config**
> ProjectConfig get_project_config(config_name)

Get project config data

Get project config data

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.project_config import ProjectConfig
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
    api_instance = api_client.ProjectConfigApi(api_client)
    config_name = 'config_name_example' # str | Config name

    try:
        # Get project config data
        api_response = api_instance.get_project_config(config_name)
        print("The response of ProjectConfigApi->get_project_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectConfigApi->get_project_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **config_name** | **str**| Config name | 

### Return type

[**ProjectConfig**](ProjectConfig.md)

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

# **list_project_configs**
> List[ProjectConfig] list_project_configs()

List project configs

List project configs

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.project_config import ProjectConfig
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
    api_instance = api_client.ProjectConfigApi(api_client)

    try:
        # List project configs
        api_response = api_instance.list_project_configs()
        print("The response of ProjectConfigApi->list_project_configs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProjectConfigApi->list_project_configs: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ProjectConfig]**](ProjectConfig.md)

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

# **set_default_project_config**
> set_default_project_config(config_name)

Set project config to default

Set project config to default

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
    api_instance = api_client.ProjectConfigApi(api_client)
    config_name = 'config_name_example' # str | Config name

    try:
        # Set project config to default
        api_instance.set_default_project_config(config_name)
    except Exception as e:
        print("Exception when calling ProjectConfigApi->set_default_project_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **config_name** | **str**| Config name | 

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

# **set_project_config**
> set_project_config(project_config)

Set project config data

Set project config data

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.create_project_config_dto import CreateProjectConfigDTO
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
    api_instance = api_client.ProjectConfigApi(api_client)
    project_config = api_client.CreateProjectConfigDTO() # CreateProjectConfigDTO | Project config

    try:
        # Set project config data
        api_instance.set_project_config(project_config)
    except Exception as e:
        print("Exception when calling ProjectConfigApi->set_project_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **project_config** | [**CreateProjectConfigDTO**](CreateProjectConfigDTO.md)| Project config | 

### Return type

void (empty response body)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: Not defined

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**201** | Created |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

