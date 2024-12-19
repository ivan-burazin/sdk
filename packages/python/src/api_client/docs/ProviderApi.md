# api_client.ProviderApi

All URIs are relative to *http://localhost:3986*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_target_manifest**](ProviderApi.md#get_target_manifest) | **GET** /provider/{provider}/target-manifest | Get provider target manifest
[**install_provider**](ProviderApi.md#install_provider) | **POST** /provider/install | Install a provider
[**list_providers**](ProviderApi.md#list_providers) | **GET** /provider | List providers
[**uninstall_provider**](ProviderApi.md#uninstall_provider) | **POST** /provider/{provider}/uninstall | Uninstall a provider


# **get_target_manifest**
> Dict[str, ProviderProviderTargetProperty] get_target_manifest(provider)

Get provider target manifest

Get provider target manifest

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.provider_provider_target_property import ProviderProviderTargetProperty
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
    api_instance = api_client.ProviderApi(api_client)
    provider = 'provider_example' # str | Provider name

    try:
        # Get provider target manifest
        api_response = api_instance.get_target_manifest(provider)
        print("The response of ProviderApi->get_target_manifest:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProviderApi->get_target_manifest: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **str**| Provider name | 

### Return type

[**Dict[str, ProviderProviderTargetProperty]**](ProviderProviderTargetProperty.md)

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

# **install_provider**
> install_provider(provider)

Install a provider

Install a provider

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.install_provider_request import InstallProviderRequest
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
    api_instance = api_client.ProviderApi(api_client)
    provider = api_client.InstallProviderRequest() # InstallProviderRequest | Provider to install

    try:
        # Install a provider
        api_instance.install_provider(provider)
    except Exception as e:
        print("Exception when calling ProviderApi->install_provider: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | [**InstallProviderRequest**](InstallProviderRequest.md)| Provider to install | 

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
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **list_providers**
> List[Provider] list_providers()

List providers

List providers

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.provider import Provider
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
    api_instance = api_client.ProviderApi(api_client)

    try:
        # List providers
        api_response = api_instance.list_providers()
        print("The response of ProviderApi->list_providers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ProviderApi->list_providers: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Provider]**](Provider.md)

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

# **uninstall_provider**
> uninstall_provider(provider)

Uninstall a provider

Uninstall a provider

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
    api_instance = api_client.ProviderApi(api_client)
    provider = 'provider_example' # str | Provider to uninstall

    try:
        # Uninstall a provider
        api_instance.uninstall_provider(provider)
    except Exception as e:
        print("Exception when calling ProviderApi->uninstall_provider: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **provider** | **str**| Provider to uninstall | 

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

