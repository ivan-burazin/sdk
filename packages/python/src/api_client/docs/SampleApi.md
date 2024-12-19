# api_client.SampleApi

All URIs are relative to *http://localhost:3986*

Method | HTTP request | Description
------------- | ------------- | -------------
[**list_samples**](SampleApi.md#list_samples) | **GET** /sample | List samples


# **list_samples**
> List[Sample] list_samples()

List samples

List samples

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.sample import Sample
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
    api_instance = api_client.SampleApi(api_client)

    try:
        # List samples
        api_response = api_instance.list_samples()
        print("The response of SampleApi->list_samples:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling SampleApi->list_samples: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[Sample]**](Sample.md)

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

