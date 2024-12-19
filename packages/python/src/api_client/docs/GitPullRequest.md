# GitPullRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | **str** |  | 
**name** | **str** |  | 
**sha** | **str** |  | 
**source_repo_id** | **str** |  | 
**source_repo_name** | **str** |  | 
**source_repo_owner** | **str** |  | 
**source_repo_url** | **str** |  | 

## Example

```python
from api_client.models.git_pull_request import GitPullRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GitPullRequest from a JSON string
git_pull_request_instance = GitPullRequest.from_json(json)
# print the JSON string representation of the object
print(GitPullRequest.to_json())

# convert the object into a dict
git_pull_request_dict = git_pull_request_instance.to_dict()
# create an instance of GitPullRequest from a dict
git_pull_request_from_dict = GitPullRequest.from_dict(git_pull_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


