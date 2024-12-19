# ProviderTarget


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_default** | **bool** |  | 
**name** | **str** |  | 
**options** | **str** | JSON encoded map of options | 
**provider_info** | [**ProviderProviderInfo**](ProviderProviderInfo.md) |  | 

## Example

```python
from api_client.models.provider_target import ProviderTarget

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderTarget from a JSON string
provider_target_instance = ProviderTarget.from_json(json)
# print the JSON string representation of the object
print(ProviderTarget.to_json())

# convert the object into a dict
provider_target_dict = provider_target_instance.to_dict()
# create an instance of ProviderTarget from a dict
provider_target_from_dict = ProviderTarget.from_dict(provider_target_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


