# api_client.ServerApi

All URIs are relative to *http://localhost:3986*

Method | HTTP request | Description
------------- | ------------- | -------------
[**generate_network_key**](ServerApi.md#generate_network_key) | **POST** /server/network-key | Generate a new authentication key
[**get_config**](ServerApi.md#get_config) | **GET** /server/config | Get the server configuration
[**get_server_log_files**](ServerApi.md#get_server_log_files) | **GET** /server/logs | List server log files
[**set_config**](ServerApi.md#set_config) | **POST** /server/config | Set the server configuration


# **generate_network_key**
> NetworkKey generate_network_key()

Generate a new authentication key

Generate a new authentication key

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.network_key import NetworkKey
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
    api_instance = api_client.ServerApi(api_client)

    try:
        # Generate a new authentication key
        api_response = api_instance.generate_network_key()
        print("The response of ServerApi->generate_network_key:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerApi->generate_network_key: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**NetworkKey**](NetworkKey.md)

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

# **get_config**
> ServerConfig get_config()

Get the server configuration

Get the server configuration

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.server_config import ServerConfig
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
    api_instance = api_client.ServerApi(api_client)

    try:
        # Get the server configuration
        api_response = api_instance.get_config()
        print("The response of ServerApi->get_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerApi->get_config: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**ServerConfig**](ServerConfig.md)

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

# **get_server_log_files**
> List[str] get_server_log_files()

List server log files

List server log files

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
    api_instance = api_client.ServerApi(api_client)

    try:
        # List server log files
        api_response = api_instance.get_server_log_files()
        print("The response of ServerApi->get_server_log_files:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerApi->get_server_log_files: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

**List[str]**

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

# **set_config**
> ServerConfig set_config(config)

Set the server configuration

Set the server configuration

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.server_config import ServerConfig
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
    api_instance = api_client.ServerApi(api_client)
    config = api_client.ServerConfig() # ServerConfig | Server configuration

    try:
        # Set the server configuration
        api_response = api_instance.set_config(config)
        print("The response of ServerApi->set_config:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling ServerApi->set_config: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **config** | [**ServerConfig**](ServerConfig.md)| Server configuration | 

### Return type

[**ServerConfig**](ServerConfig.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: application/json
 - **Accept**: application/json

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

