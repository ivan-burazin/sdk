# ProjectConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_config** | [**BuildConfig**](BuildConfig.md) |  | [optional] 
**default** | **bool** |  | 
**env_vars** | **Dict[str, str]** |  | 
**git_provider_config_id** | **str** |  | [optional] 
**image** | **str** |  | 
**name** | **str** |  | 
**prebuilds** | [**List[PrebuildConfig]**](PrebuildConfig.md) |  | [optional] 
**repository_url** | **str** |  | 
**user** | **str** |  | 

## Example

```python
from api_client.models.project_config import ProjectConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ProjectConfig from a JSON string
project_config_instance = ProjectConfig.from_json(json)
# print the JSON string representation of the object
print(ProjectConfig.to_json())

# convert the object into a dict
project_config_dict = project_config_instance.to_dict()
# create an instance of ProjectConfig from a dict
project_config_from_dict = ProjectConfig.from_dict(project_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


