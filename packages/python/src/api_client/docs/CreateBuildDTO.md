# CreateBuildDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | **str** |  | 
**env_vars** | **Dict[str, str]** |  | 
**prebuild_id** | **str** |  | [optional] 
**project_config_name** | **str** |  | 

## Example

```python
from api_client.models.create_build_dto import CreateBuildDTO

# TODO update the JSON string below
json = "{}"
# create an instance of CreateBuildDTO from a JSON string
create_build_dto_instance = CreateBuildDTO.from_json(json)
# print the JSON string representation of the object
print(CreateBuildDTO.to_json())

# convert the object into a dict
create_build_dto_dict = create_build_dto_instance.to_dict()
# create an instance of CreateBuildDTO from a dict
create_build_dto_from_dict = CreateBuildDTO.from_dict(create_build_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


