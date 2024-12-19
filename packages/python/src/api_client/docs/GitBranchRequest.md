# GitBranchRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**path** | **str** |  | 

## Example

```python
from api_client.models.git_branch_request import GitBranchRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GitBranchRequest from a JSON string
git_branch_request_instance = GitBranchRequest.from_json(json)
# print the JSON string representation of the object
print(GitBranchRequest.to_json())

# convert the object into a dict
git_branch_request_dict = git_branch_request_instance.to_dict()
# create an instance of GitBranchRequest from a dict
git_branch_request_from_dict = GitBranchRequest.from_dict(git_branch_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


