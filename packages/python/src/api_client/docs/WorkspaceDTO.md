# WorkspaceDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**info** | [**WorkspaceInfo**](WorkspaceInfo.md) |  | [optional] 
**name** | **str** |  | 
**projects** | [**List[Project]**](Project.md) |  | 
**target** | **str** |  | 

## Example

```python
from api_client.models.workspace_dto import WorkspaceDTO

# TODO update the JSON string below
json = "{}"
# create an instance of WorkspaceDTO from a JSON string
workspace_dto_instance = WorkspaceDTO.from_json(json)
# print the JSON string representation of the object
print(WorkspaceDTO.to_json())

# convert the object into a dict
workspace_dto_dict = workspace_dto_instance.to_dict()
# create an instance of WorkspaceDTO from a dict
workspace_dto_from_dict = WorkspaceDTO.from_dict(workspace_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


