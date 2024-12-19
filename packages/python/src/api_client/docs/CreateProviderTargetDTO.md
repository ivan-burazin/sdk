# CreateProviderTargetDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**options** | **str** |  | 
**provider_info** | [**ProviderProviderInfo**](ProviderProviderInfo.md) |  | 

## Example

```python
from api_client.models.create_provider_target_dto import CreateProviderTargetDTO

# TODO update the JSON string below
json = "{}"
# create an instance of CreateProviderTargetDTO from a JSON string
create_provider_target_dto_instance = CreateProviderTargetDTO.from_json(json)
# print the JSON string representation of the object
print(CreateProviderTargetDTO.to_json())

# convert the object into a dict
create_provider_target_dto_dict = create_provider_target_dto_instance.to_dict()
# create an instance of CreateProviderTargetDTO from a dict
create_provider_target_dto_from_dict = CreateProviderTargetDTO.from_dict(create_provider_target_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


