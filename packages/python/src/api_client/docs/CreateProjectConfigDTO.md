# CreateProjectConfigDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_config** | [**BuildConfig**](BuildConfig.md) |  | [optional] 
**env_vars** | **Dict[str, str]** |  | 
**git_provider_config_id** | **str** |  | [optional] 
**image** | **str** |  | [optional] 
**name** | **str** |  | 
**repository_url** | **str** |  | 
**user** | **str** |  | [optional] 

## Example

```python
from api_client.models.create_project_config_dto import CreateProjectConfigDTO

# TODO update the JSON string below
json = "{}"
# create an instance of CreateProjectConfigDTO from a JSON string
create_project_config_dto_instance = CreateProjectConfigDTO.from_json(json)
# print the JSON string representation of the object
print(CreateProjectConfigDTO.to_json())

# convert the object into a dict
create_project_config_dto_dict = create_project_config_dto_instance.to_dict()
# create an instance of CreateProjectConfigDTO from a dict
create_project_config_dto_from_dict = CreateProjectConfigDTO.from_dict(create_project_config_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


