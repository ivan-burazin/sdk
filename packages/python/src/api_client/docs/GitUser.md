# GitUser


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**email** | **str** |  | 
**id** | **str** |  | 
**name** | **str** |  | 
**username** | **str** |  | 

## Example

```python
from api_client.models.git_user import GitUser

# TODO update the JSON string below
json = "{}"
# create an instance of GitUser from a JSON string
git_user_instance = GitUser.from_json(json)
# print the JSON string representation of the object
print(GitUser.to_json())

# convert the object into a dict
git_user_dict = git_user_instance.to_dict()
# create an instance of GitUser from a dict
git_user_from_dict = GitUser.from_dict(git_user_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


