# ProviderProviderInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**label** | **str** |  | [optional] 
**name** | **str** |  | 
**version** | **str** |  | 

## Example

```python
from api_client.models.provider_provider_info import ProviderProviderInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderProviderInfo from a JSON string
provider_provider_info_instance = ProviderProviderInfo.from_json(json)
# print the JSON string representation of the object
print(ProviderProviderInfo.to_json())

# convert the object into a dict
provider_provider_info_dict = provider_provider_info_instance.to_dict()
# create an instance of ProviderProviderInfo from a dict
provider_provider_info_from_dict = ProviderProviderInfo.from_dict(provider_provider_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


