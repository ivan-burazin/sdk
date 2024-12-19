# CreateWorkspaceDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**id** | **str** |  | 
**name** | **str** |  | 
**projects** | [**List[CreateProjectDTO]**](CreateProjectDTO.md) |  | 
**target** | **str** |  | 

## Example

```python
from api_client.models.create_workspace_dto import CreateWorkspaceDTO

# TODO update the JSON string below
json = "{}"
# create an instance of CreateWorkspaceDTO from a JSON string
create_workspace_dto_instance = CreateWorkspaceDTO.from_json(json)
# print the JSON string representation of the object
print(CreateWorkspaceDTO.to_json())

# convert the object into a dict
create_workspace_dto_dict = create_workspace_dto_instance.to_dict()
# create an instance of CreateWorkspaceDTO from a dict
create_workspace_dto_from_dict = CreateWorkspaceDTO.from_dict(create_workspace_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


