# Build


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**build_config** | [**BuildConfig**](BuildConfig.md) |  | [optional] 
**container_config** | [**ContainerConfig**](ContainerConfig.md) |  | 
**created_at** | **str** |  | 
**env_vars** | **Dict[str, str]** |  | 
**id** | **str** |  | 
**image** | **str** |  | [optional] 
**prebuild_id** | **str** |  | 
**repository** | [**GitRepository**](GitRepository.md) |  | 
**state** | [**BuildBuildState**](BuildBuildState.md) |  | 
**updated_at** | **str** |  | 
**user** | **str** |  | [optional] 

## Example

```python
from api_client.models.build import Build

# TODO update the JSON string below
json = "{}"
# create an instance of Build from a JSON string
build_instance = Build.from_json(json)
# print the JSON string representation of the object
print(Build.to_json())

# convert the object into a dict
build_dict = build_instance.to_dict()
# create an instance of Build from a dict
build_from_dict = Build.from_dict(build_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


