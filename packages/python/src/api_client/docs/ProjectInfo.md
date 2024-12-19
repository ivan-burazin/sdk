# ProjectInfo


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**created** | **str** |  | 
**is_running** | **bool** |  | 
**name** | **str** |  | 
**provider_metadata** | **str** |  | [optional] 
**workspace_id** | **str** |  | 

## Example

```python
from api_client.models.project_info import ProjectInfo

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectInfo from a JSON string
project_info_instance = ProjectInfo.from_json(json)
# print the JSON string representation of the object
print(ProjectInfo.to_json())

# convert the object into a dict
project_info_dict = project_info_instance.to_dict()
# create an instance of ProjectInfo from a dict
project_info_from_dict = ProjectInfo.from_dict(project_info_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


