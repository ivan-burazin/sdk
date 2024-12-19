# FileStatus


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**extra** | **str** |  | 
**name** | **str** |  | 
**staging** | [**Status**](Status.md) |  | 
**worktree** | [**Status**](Status.md) |  | 

## Example

```python
from api_client.models.file_status import FileStatus

# TODO update the JSON string below
json = "{}"
# create an instance of FileStatus from a JSON string
file_status_instance = FileStatus.from_json(json)
# print the JSON string representation of the object
print(FileStatus.to_json())

# convert the object into a dict
file_status_dict = file_status_instance.to_dict()
# create an instance of FileStatus from a dict
file_status_from_dict = FileStatus.from_dict(file_status_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


