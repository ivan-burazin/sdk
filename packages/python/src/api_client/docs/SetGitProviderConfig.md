# SetGitProviderConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **str** |  | [optional] 
**base_api_url** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**provider_id** | **str** |  | 
**signing_key** | **str** |  | [optional] 
**signing_method** | [**SigningMethod**](SigningMethod.md) |  | [optional] 
**token** | **str** |  | 
**username** | **str** |  | [optional] 

## Example

```python
from api_client.models.set_git_provider_config import SetGitProviderConfig

# TODO update the JSON string below
json = "{}"
# create an instance of SetGitProviderConfig from a JSON string
set_git_provider_config_instance = SetGitProviderConfig.from_json(json)
# print the JSON string representation of the object
print(SetGitProviderConfig.to_json())

# convert the object into a dict
set_git_provider_config_dict = set_git_provider_config_instance.to_dict()
# create an instance of SetGitProviderConfig from a dict
set_git_provider_config_from_dict = SetGitProviderConfig.from_dict(set_git_provider_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


