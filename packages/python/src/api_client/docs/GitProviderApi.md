# api_client.GitProviderApi

All URIs are relative to *http://localhost:3986*

Method | HTTP request | Description
------------- | ------------- | -------------
[**get_git_context**](GitProviderApi.md#get_git_context) | **POST** /gitprovider/context | Get Git context
[**get_git_provider**](GitProviderApi.md#get_git_provider) | **GET** /gitprovider/{gitProviderId} | Get Git provider
[**get_git_provider_id_for_url**](GitProviderApi.md#get_git_provider_id_for_url) | **GET** /gitprovider/id-for-url/{url} | Get Git provider ID
[**get_git_user**](GitProviderApi.md#get_git_user) | **GET** /gitprovider/{gitProviderId}/user | Get Git context
[**get_namespaces**](GitProviderApi.md#get_namespaces) | **GET** /gitprovider/{gitProviderId}/namespaces | Get Git namespaces
[**get_repo_branches**](GitProviderApi.md#get_repo_branches) | **GET** /gitprovider/{gitProviderId}/{namespaceId}/{repositoryId}/branches | Get Git repository branches
[**get_repo_prs**](GitProviderApi.md#get_repo_prs) | **GET** /gitprovider/{gitProviderId}/{namespaceId}/{repositoryId}/pull-requests | Get Git repository PRs
[**get_repositories**](GitProviderApi.md#get_repositories) | **GET** /gitprovider/{gitProviderId}/{namespaceId}/repositories | Get Git repositories
[**get_url_from_repository**](GitProviderApi.md#get_url_from_repository) | **POST** /gitprovider/context/url | Get URL from Git repository
[**list_git_providers**](GitProviderApi.md#list_git_providers) | **GET** /gitprovider | List Git providers
[**list_git_providers_for_url**](GitProviderApi.md#list_git_providers_for_url) | **GET** /gitprovider/for-url/{url} | List Git providers for url
[**remove_git_provider**](GitProviderApi.md#remove_git_provider) | **DELETE** /gitprovider/{gitProviderId} | Remove Git provider
[**set_git_provider**](GitProviderApi.md#set_git_provider) | **PUT** /gitprovider | Set Git provider


# **get_git_context**
> GitRepository get_git_context(repository)

Get Git context

Get Git context

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.get_repository_context import GetRepositoryContext
from api_client.models.git_repository import GitRepository
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
    api_instance = api_client.GitProviderApi(api_client)
    repository = api_client.GetRepositoryContext() # GetRepositoryContext | Get repository context

    try:
        # Get Git context
        api_response = api_instance.get_git_context(repository)
        print("The response of GitProviderApi->get_git_context:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GitProviderApi->get_git_context: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | [**GetRepositoryContext**](GetRepositoryContext.md)| Get repository context | 

### Return type

[**GitRepository**](GitRepository.md)

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

# **get_git_provider**
> GitProvider get_git_provider(git_provider_id)

Get Git provider

Get Git provider

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.git_provider import GitProvider
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
    api_instance = api_client.GitProviderApi(api_client)
    git_provider_id = 'git_provider_id_example' # str | ID

    try:
        # Get Git provider
        api_response = api_instance.get_git_provider(git_provider_id)
        print("The response of GitProviderApi->get_git_provider:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GitProviderApi->get_git_provider: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **git_provider_id** | **str**| ID | 

### Return type

[**GitProvider**](GitProvider.md)

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_git_provider_id_for_url**
> str get_git_provider_id_for_url(url)

Get Git provider ID

Get Git provider ID

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
    api_instance = api_client.GitProviderApi(api_client)
    url = 'url_example' # str | Url

    try:
        # Get Git provider ID
        api_response = api_instance.get_git_provider_id_for_url(url)
        print("The response of GitProviderApi->get_git_provider_id_for_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GitProviderApi->get_git_provider_id_for_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **str**| Url | 

### Return type

**str**

### Authorization

[Bearer](../README.md#Bearer)

### HTTP request headers

 - **Content-Type**: Not defined
 - **Accept**: text/plain

### HTTP response details

| Status code | Description | Response headers |
|-------------|-------------|------------------|
**200** | OK |  -  |

[[Back to top]](#) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to Model list]](../README.md#documentation-for-models) [[Back to README]](../README.md)

# **get_git_user**
> GitUser get_git_user(git_provider_id)

Get Git context

Get Git context

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.git_user import GitUser
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
    api_instance = api_client.GitProviderApi(api_client)
    git_provider_id = 'git_provider_id_example' # str | Git Provider Id

    try:
        # Get Git context
        api_response = api_instance.get_git_user(git_provider_id)
        print("The response of GitProviderApi->get_git_user:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GitProviderApi->get_git_user: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **git_provider_id** | **str**| Git Provider Id | 

### Return type

[**GitUser**](GitUser.md)

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

# **get_namespaces**
> List[GitNamespace] get_namespaces(git_provider_id, page=page, per_page=per_page)

Get Git namespaces

Get Git namespaces

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.git_namespace import GitNamespace
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
    api_instance = api_client.GitProviderApi(api_client)
    git_provider_id = 'git_provider_id_example' # str | Git provider
    page = 56 # int | Page number (optional)
    per_page = 56 # int | Number of items per page (optional)

    try:
        # Get Git namespaces
        api_response = api_instance.get_namespaces(git_provider_id, page=page, per_page=per_page)
        print("The response of GitProviderApi->get_namespaces:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GitProviderApi->get_namespaces: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **git_provider_id** | **str**| Git provider | 
 **page** | **int**| Page number | [optional] 
 **per_page** | **int**| Number of items per page | [optional] 

### Return type

[**List[GitNamespace]**](GitNamespace.md)

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

# **get_repo_branches**
> List[GitBranch] get_repo_branches(git_provider_id, namespace_id, repository_id, page=page, per_page=per_page)

Get Git repository branches

Get Git repository branches

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.git_branch import GitBranch
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
    api_instance = api_client.GitProviderApi(api_client)
    git_provider_id = 'git_provider_id_example' # str | Git provider
    namespace_id = 'namespace_id_example' # str | Namespace
    repository_id = 'repository_id_example' # str | Repository
    page = 56 # int | Page number (optional)
    per_page = 56 # int | Number of items per page (optional)

    try:
        # Get Git repository branches
        api_response = api_instance.get_repo_branches(git_provider_id, namespace_id, repository_id, page=page, per_page=per_page)
        print("The response of GitProviderApi->get_repo_branches:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GitProviderApi->get_repo_branches: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **git_provider_id** | **str**| Git provider | 
 **namespace_id** | **str**| Namespace | 
 **repository_id** | **str**| Repository | 
 **page** | **int**| Page number | [optional] 
 **per_page** | **int**| Number of items per page | [optional] 

### Return type

[**List[GitBranch]**](GitBranch.md)

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

# **get_repo_prs**
> List[GitPullRequest] get_repo_prs(git_provider_id, namespace_id, repository_id, page=page, per_page=per_page)

Get Git repository PRs

Get Git repository PRs

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.git_pull_request import GitPullRequest
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
    api_instance = api_client.GitProviderApi(api_client)
    git_provider_id = 'git_provider_id_example' # str | Git provider
    namespace_id = 'namespace_id_example' # str | Namespace
    repository_id = 'repository_id_example' # str | Repository
    page = 56 # int | Page number (optional)
    per_page = 56 # int | Number of items per page (optional)

    try:
        # Get Git repository PRs
        api_response = api_instance.get_repo_prs(git_provider_id, namespace_id, repository_id, page=page, per_page=per_page)
        print("The response of GitProviderApi->get_repo_prs:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GitProviderApi->get_repo_prs: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **git_provider_id** | **str**| Git provider | 
 **namespace_id** | **str**| Namespace | 
 **repository_id** | **str**| Repository | 
 **page** | **int**| Page number | [optional] 
 **per_page** | **int**| Number of items per page | [optional] 

### Return type

[**List[GitPullRequest]**](GitPullRequest.md)

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

# **get_repositories**
> List[GitRepository] get_repositories(git_provider_id, namespace_id, page=page, per_page=per_page)

Get Git repositories

Get Git repositories

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.git_repository import GitRepository
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
    api_instance = api_client.GitProviderApi(api_client)
    git_provider_id = 'git_provider_id_example' # str | Git provider
    namespace_id = 'namespace_id_example' # str | Namespace
    page = 56 # int | Page number (optional)
    per_page = 56 # int | Number of items per page (optional)

    try:
        # Get Git repositories
        api_response = api_instance.get_repositories(git_provider_id, namespace_id, page=page, per_page=per_page)
        print("The response of GitProviderApi->get_repositories:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GitProviderApi->get_repositories: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **git_provider_id** | **str**| Git provider | 
 **namespace_id** | **str**| Namespace | 
 **page** | **int**| Page number | [optional] 
 **per_page** | **int**| Number of items per page | [optional] 

### Return type

[**List[GitRepository]**](GitRepository.md)

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

# **get_url_from_repository**
> RepositoryUrl get_url_from_repository(repository)

Get URL from Git repository

Get URL from Git repository

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.git_repository import GitRepository
from api_client.models.repository_url import RepositoryUrl
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
    api_instance = api_client.GitProviderApi(api_client)
    repository = api_client.GitRepository() # GitRepository | Git repository

    try:
        # Get URL from Git repository
        api_response = api_instance.get_url_from_repository(repository)
        print("The response of GitProviderApi->get_url_from_repository:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GitProviderApi->get_url_from_repository: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **repository** | [**GitRepository**](GitRepository.md)| Git repository | 

### Return type

[**RepositoryUrl**](RepositoryUrl.md)

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

# **list_git_providers**
> List[GitProvider] list_git_providers()

List Git providers

List Git providers

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.git_provider import GitProvider
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
    api_instance = api_client.GitProviderApi(api_client)

    try:
        # List Git providers
        api_response = api_instance.list_git_providers()
        print("The response of GitProviderApi->list_git_providers:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GitProviderApi->list_git_providers: %s\n" % e)
```



### Parameters

This endpoint does not need any parameter.

### Return type

[**List[GitProvider]**](GitProvider.md)

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

# **list_git_providers_for_url**
> List[GitProvider] list_git_providers_for_url(url)

List Git providers for url

List Git providers for url

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.git_provider import GitProvider
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
    api_instance = api_client.GitProviderApi(api_client)
    url = 'url_example' # str | Url

    try:
        # List Git providers for url
        api_response = api_instance.list_git_providers_for_url(url)
        print("The response of GitProviderApi->list_git_providers_for_url:\n")
        pprint(api_response)
    except Exception as e:
        print("Exception when calling GitProviderApi->list_git_providers_for_url: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **url** | **str**| Url | 

### Return type

[**List[GitProvider]**](GitProvider.md)

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

# **remove_git_provider**
> remove_git_provider(git_provider_id)

Remove Git provider

Remove Git provider

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
    api_instance = api_client.GitProviderApi(api_client)
    git_provider_id = 'git_provider_id_example' # str | Git provider

    try:
        # Remove Git provider
        api_instance.remove_git_provider(git_provider_id)
    except Exception as e:
        print("Exception when calling GitProviderApi->remove_git_provider: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **git_provider_id** | **str**| Git provider | 

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

# **set_git_provider**
> set_git_provider(git_provider_config)

Set Git provider

Set Git provider

### Example

* Api Key Authentication (Bearer):

```python
import api_client
from api_client.models.set_git_provider_config import SetGitProviderConfig
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
    api_instance = api_client.GitProviderApi(api_client)
    git_provider_config = api_client.SetGitProviderConfig() # SetGitProviderConfig | Git provider

    try:
        # Set Git provider
        api_instance.set_git_provider(git_provider_config)
    except Exception as e:
        print("Exception when calling GitProviderApi->set_git_provider: %s\n" % e)
```



### Parameters


Name | Type | Description  | Notes
------------- | ------------- | ------------- | -------------
 **git_provider_config** | [**SetGitProviderConfig**](SetGitProviderConfig.md)| Git provider | 

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

