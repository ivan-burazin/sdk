# api_client.BuildApi

All URIs are relative to *http://localhost:3986*

Method | HTTP request | Description
------------- | ------------- | -------------
[**create_build**](BuildApi.md#create_build) | **POST** /build | Create a build
[**delete_all_builds**](BuildApi.md#delete_all_builds) | **DELETE** /build | Delete ALL builds
[**delete_build**](BuildApi.md#delete_build) | **DELETE** /build/{buildId} | Delete build
[**delete_builds_from_prebuild**](BuildApi.md#delete_builds_from_prebuild) | **DELETE** /build/prebuild/{prebuildId} | Delete builds
[**get_build**](BuildApi.md#get_build) | **GET** /build/{buildId} | Get build data
[**list_builds**](BuildApi.md#list_builds) | **GET** /build | List builds


# **create_build**
> str create_build(create_build_dto)

Create a build

Create a build

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.create_build_dto import CreateBuildDTO
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
    api_instance = api_client.BuildApi(api_client)
    create_build_dto = api_client.CreateBuildDTO() # CreateBuildDTO | Create Build DTO

    try:
        # Create a build
        api_response = api_instance.create_build(create_build_dto)
        print("The response of BuildApi->create_build:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->create_build: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **create_build_dto** | [**CreateBuildDTO**](CreateBuildDTO.md)| Create Build DTO | 

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

# **delete_all_builds**
> delete_all_builds(force=force)

Delete ALL builds

Delete ALL builds

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
    api_instance = api_client.BuildApi(api_client)
    force = True # bool | Force (optional)

    try:
        # Delete ALL builds
        api_instance.delete_all_builds(force=force)
    except Exception as e:
        print("Exception when calling BuildApi->delete_all_builds: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **delete_build**
> delete_build(build_id, force=force)

Delete build

Delete build

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
    api_instance = api_client.BuildApi(api_client)
    build_id = 'build_id_example' # str | Build ID
    force = True # bool | Force (optional)

    try:
        # Delete build
        api_instance.delete_build(build_id, force=force)
    except Exception as e:
        print("Exception when calling BuildApi->delete_build: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **build_id** | **str**| Build ID | 
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

# **delete_builds_from_prebuild**
> delete_builds_from_prebuild(prebuild_id, force=force)

Delete builds

Delete builds

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
    api_instance = api_client.BuildApi(api_client)
    prebuild_id = 'prebuild_id_example' # str | Prebuild ID
    force = True # bool | Force (optional)

    try:
        # Delete builds
        api_instance.delete_builds_from_prebuild(prebuild_id, force=force)
    except Exception as e:
        print("Exception when calling BuildApi->delete_builds_from_prebuild: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
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

# **get_build**
> Build get_build(build_id)

Get build data

Get build data

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.build import Build
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
    api_instance = api_client.BuildApi(api_client)
    build_id = 'build_id_example' # str | Build ID

    try:
        # Get build data
        api_response = api_instance.get_build(build_id)
        print("The response of BuildApi->get_build:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->get_build: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **build_id** | **str**| Build ID | 

### Return type

[**Build**](Build.md)

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

# **list_builds**
> List[Build] list_builds()

List builds

List builds

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.build import Build
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
    api_instance = api_client.BuildApi(api_client)

    try:
        # List builds
        api_response = api_instance.list_builds()
        print("The response of BuildApi->list_builds:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling BuildApi->list_builds: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Build]**](Build.md)

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

