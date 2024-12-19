# GitProvider


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**alias** | **str** |  | 
**base_api_url** | **str** |  | [optional] 
**id** | **str** |  | 
**provider_id** | **str** |  | 
**signing_key** | **str** |  | [optional] 
**signing_method** | [**SigningMethod**](SigningMethod.md) |  | [optional] 
**token** | **str** |  | 
**username** | **str** |  | 

## Example

```python
from api_client.models.git_provider import GitProvider

# TODO update the JSON string below
json = "{}"
# create an instance of GitProvider from a JSON string
git_provider_instance = GitProvider.from_json(json)
# print the JSON string representation of the object
print(GitProvider.to_json())

# convert the object into a dict
git_provider_dict = git_provider_instance.to_dict()
# create an instance of GitProvider from a dict
git_provider_from_dict = GitProvider.from_dict(git_provider_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


