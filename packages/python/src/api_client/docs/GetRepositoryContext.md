# GetRepositoryContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | **str** |  | [optional] 
**id** | **str** |  | [optional] 
**name** | **str** |  | [optional] 
**owner** | **str** |  | [optional] 
**path** | **str** |  | [optional] 
**pr_number** | **int** |  | [optional] 
**sha** | **str** |  | [optional] 
**source** | **str** |  | [optional] 
**url** | **str** |  | 

## Example

```python
from api_client.models.get_repository_context import GetRepositoryContext

# TODO update the JSON string below
json = "{}"
# create an instance of GetRepositoryContext from a JSON string
get_repository_context_instance = GetRepositoryContext.from_json(json)
# print the JSON string representation of the object
print(GetRepositoryContext.to_json())

# convert the object into a dict
get_repository_context_dict = get_repository_context_instance.to_dict()
# create an instance of GetRepositoryContext from a dict
get_repository_context_from_dict = GetRepositoryContext.from_dict(get_repository_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


