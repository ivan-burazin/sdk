# GitRepository


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | **str** |  | 
**clone_target** | [**CloneTarget**](CloneTarget.md) |  | [optional] 
**id** | **str** |  | 
**name** | **str** |  | 
**owner** | **str** |  | 
**path** | **str** |  | [optional] 
**pr_number** | **int** |  | [optional] 
**sha** | **str** |  | 
**source** | **str** |  | 
**url** | **str** |  | 

## Example

```python
from api_client.models.git_repository import GitRepository

# TODO update the JSON string below
json = "{}"
# create an instance of GitRepository from a JSON string
git_repository_instance = GitRepository.from_json(json)
# print the JSON string representation of the object
print(GitRepository.to_json())

# convert the object into a dict
git_repository_dict = git_repository_instance.to_dict()
# create an instance of GitRepository from a dict
git_repository_from_dict = GitRepository.from_dict(git_repository_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


