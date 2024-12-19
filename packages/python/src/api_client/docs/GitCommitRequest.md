# GitCommitRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** |  | 
**email** | **str** |  | 
**message** | **str** |  | 
**path** | **str** |  | 

## Example

```python
from api_client.models.git_commit_request import GitCommitRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GitCommitRequest from a JSON string
git_commit_request_instance = GitCommitRequest.from_json(json)
# print the JSON string representation of the object
print(GitCommitRequest.to_json())

# convert the object into a dict
git_commit_request_dict = git_commit_request_instance.to_dict()
# create an instance of GitCommitRequest from a dict
git_commit_request_from_dict = GitCommitRequest.from_dict(git_commit_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


