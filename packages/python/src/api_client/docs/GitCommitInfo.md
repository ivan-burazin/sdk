# GitCommitInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**author** | **str** |  | 
**email** | **str** |  | 
**hash** | **str** |  | 
**message** | **str** |  | 
**timestamp** | **str** |  | 

## Example

```python
from api_client.models.git_commit_info import GitCommitInfo

# TODO update the JSON string below
json = "{}"
# create an instance of GitCommitInfo from a JSON string
git_commit_info_instance = GitCommitInfo.from_json(json)
# print the JSON string representation of the object
print(GitCommitInfo.to_json())

# convert the object into a dict
git_commit_info_dict = git_commit_info_instance.to_dict()
# create an instance of GitCommitInfo from a dict
git_commit_info_from_dict = GitCommitInfo.from_dict(git_commit_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


