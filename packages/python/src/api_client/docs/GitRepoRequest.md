# GitRepoRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**password** | **str** |  | [optional] 
**path** | **str** |  | 
**username** | **str** |  | [optional] 

## Example

```python
from api_client.models.git_repo_request import GitRepoRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GitRepoRequest from a JSON string
git_repo_request_instance = GitRepoRequest.from_json(json)
# print the JSON string representation of the object
print(GitRepoRequest.to_json())

# convert the object into a dict
git_repo_request_dict = git_repo_request_instance.to_dict()
# create an instance of GitRepoRequest from a dict
git_repo_request_from_dict = GitRepoRequest.from_dict(git_repo_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


