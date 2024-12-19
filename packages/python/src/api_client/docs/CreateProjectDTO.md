# CreateProjectDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_config** | [**BuildConfig**](BuildConfig.md) |  | [optional] 
**env_vars** | **Dict[str, str]** |  | 
**git_provider_config_id** | **str** |  | [optional] 
**image** | **str** |  | [optional] 
**name** | **str** |  | 
**source** | [**CreateProjectSourceDTO**](CreateProjectSourceDTO.md) |  | 
**user** | **str** |  | [optional] 

## Example

```python
from api_client.models.create_project_dto import CreateProjectDTO

# TODO update the JSON string below
json = "{}"
# create an instance of CreateProjectDTO from a JSON string
create_project_dto_instance = CreateProjectDTO.from_json(json)
# print the JSON string representation of the object
print(CreateProjectDTO.to_json())

# convert the object into a dict
create_project_dto_dict = create_project_dto_instance.to_dict()
# create an instance of CreateProjectDTO from a dict
create_project_dto_from_dict = CreateProjectDTO.from_dict(create_project_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


