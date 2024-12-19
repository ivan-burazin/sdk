# GitBranch


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**sha** | **str** |  | 

## Example

```python
from api_client.models.git_branch import GitBranch

# TODO update the JSON string below
json = "{}"
# create an instance of GitBranch from a JSON string
git_branch_instance = GitBranch.from_json(json)
# print the JSON string representation of the object
print(GitBranch.to_json())

# convert the object into a dict
git_branch_dict = git_branch_instance.to_dict()
# create an instance of GitBranch from a dict
git_branch_from_dict = GitBranch.from_dict(git_branch_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


