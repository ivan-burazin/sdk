# GitStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**ahead** | **int** |  | [optional] 
**behind** | **int** |  | [optional] 
**branch_published** | **bool** |  | [optional] 
**current_branch** | **str** |  | 
**file_status** | [**List[FileStatus]**](FileStatus.md) |  | 

## Example

```python
from api_client.models.git_status import GitStatus

# TODO update the JSON string below
json = "{}"
# create an instance of GitStatus from a JSON string
git_status_instance = GitStatus.from_json(json)
# print the JSON string representation of the object
print(GitStatus.to_json())

# convert the object into a dict
git_status_dict = git_status_instance.to_dict()
# create an instance of GitStatus from a dict
git_status_from_dict = GitStatus.from_dict(git_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


