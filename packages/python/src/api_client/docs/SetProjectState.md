# SetProjectState


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**git_status** | [**GitStatus**](GitStatus.md) |  | [optional] 
**uptime** | **int** |  | 

## Example

```python
from api_client.models.set_project_state import SetProjectState

# TODO update the JSON string below
json = "{}"
# create an instance of SetProjectState from a JSON string
set_project_state_instance = SetProjectState.from_json(json)
# print the JSON string representation of the object
print(SetProjectState.to_json())

# convert the object into a dict
set_project_state_dict = set_project_state_instance.to_dict()
# create an instance of SetProjectState from a dict
set_project_state_from_dict = SetProjectState.from_dict(set_project_state_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


