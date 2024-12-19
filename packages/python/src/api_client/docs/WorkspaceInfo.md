# WorkspaceInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**name** | **str** |  | 
**projects** | [**List[ProjectInfo]**](ProjectInfo.md) |  | 
**provider_metadata** | **str** |  | [optional] 

## Example

```python
from api_client.models.workspace_info import WorkspaceInfo

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceInfo from a JSON string
workspace_info_instance = WorkspaceInfo.from_json(json)
# print the JSON string representation of the object
print(WorkspaceInfo.to_json())

# convert the object into a dict
workspace_info_dict = workspace_info_instance.to_dict()
# create an instance of WorkspaceInfo from a dict
workspace_info_from_dict = WorkspaceInfo.from_dict(workspace_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


