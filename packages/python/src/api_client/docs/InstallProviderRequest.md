# InstallProviderRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**download_urls** | **Dict[str, str]** |  | 
**name** | **str** |  | 

## Example

```python
from api_client.models.install_provider_request import InstallProviderRequest

# TODO update the JSON string below
json = "{}"
# create an instance of InstallProviderRequest from a JSON string
install_provider_request_instance = InstallProviderRequest.from_json(json)
# print the JSON string representation of the object
print(InstallProviderRequest.to_json())

# convert the object into a dict
install_provider_request_dict = install_provider_request_instance.to_dict()
# create an instance of InstallProviderRequest from a dict
install_provider_request_from_dict = InstallProviderRequest.from_dict(install_provider_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


