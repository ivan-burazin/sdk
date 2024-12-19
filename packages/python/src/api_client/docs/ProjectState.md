# ProjectState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**git_status** | [**GitStatus**](GitStatus.md) |  | [optional] 
**updated_at** | **str** |  | 
**uptime** | **int** |  | 

## Example

```python
from api_client.models.project_state import ProjectState

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectState from a JSON string
project_state_instance = ProjectState.from_json(json)
# print the JSON string representation of the object
print(ProjectState.to_json())

# convert the object into a dict
project_state_dict = project_state_instance.to_dict()
# create an instance of ProjectState from a dict
project_state_from_dict = ProjectState.from_dict(project_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


