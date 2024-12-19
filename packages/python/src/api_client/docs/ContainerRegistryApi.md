# api_client.ContainerRegistryApi

All URIs are relative to *http://localhost:3986*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_container_registry**](ContainerRegistryApi.md#get_container_registry) | **GET** /container-registry/{server} | Get container registry credentials
[**list_container_registries**](ContainerRegistryApi.md#list_container_registries) | **GET** /container-registry | List container registries
[**remove_container_registry**](ContainerRegistryApi.md#remove_container_registry) | **DELETE** /container-registry/{server} | Remove a container registry credentials
[**set_container_registry**](ContainerRegistryApi.md#set_container_registry) | **PUT** /container-registry/{server} | Set container registry credentials


# **get_container_registry**
> ContainerRegistry get_container_registry(server)

Get container registry credentials

Get container registry credentials

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.container_registry import ContainerRegistry
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
    api_instance = api_client.ContainerRegistryApi(api_client)
    server = 'server_example' # str | Container Registry server name

    try:
        # Get container registry credentials
        api_response = api_instance.get_container_registry(server)
        print("The response of ContainerRegistryApi->get_container_registry:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContainerRegistryApi->get_container_registry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **server** | **str**| Container Registry server name | 

### Return type

[**ContainerRegistry**](ContainerRegistry.md)

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

# **list_container_registries**
> List[ContainerRegistry] list_container_registries()

List container registries

List container registries

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.container_registry import ContainerRegistry
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
    api_instance = api_client.ContainerRegistryApi(api_client)

    try:
        # List container registries
        api_response = api_instance.list_container_registries()
        print("The response of ContainerRegistryApi->list_container_registries:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ContainerRegistryApi->list_container_registries: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[ContainerRegistry]**](ContainerRegistry.md)

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

# **remove_container_registry**
> remove_container_registry(server)

Remove a container registry credentials

Remove a container registry credentials

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
    api_instance = api_client.ContainerRegistryApi(api_client)
    server = 'server_example' # str | Container Registry server name

    try:
        # Remove a container registry credentials
        api_instance.remove_container_registry(server)
    except Exception as e:
        print("Exception when calling ContainerRegistryApi->remove_container_registry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **server** | **str**| Container Registry server name | 

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

# **set_container_registry**
> set_container_registry(server, container_registry)

Set container registry credentials

Set container registry credentials

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.container_registry import ContainerRegistry
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
    api_instance = api_client.ContainerRegistryApi(api_client)
    server = 'server_example' # str | Container Registry server name
    container_registry = api_client.ContainerRegistry() # ContainerRegistry | Container Registry credentials to set

    try:
        # Set container registry credentials
        api_instance.set_container_registry(server, container_registry)
    except Exception as e:
        print("Exception when calling ContainerRegistryApi->set_container_registry: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **server** | **str**| Container Registry server name | 
 **container_registry** | [**ContainerRegistry**](ContainerRegistry.md)| Container Registry credentials to set | 

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

