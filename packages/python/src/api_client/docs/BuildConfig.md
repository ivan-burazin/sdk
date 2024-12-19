# BuildConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**cached_build** | [**CachedBuild**](CachedBuild.md) |  | [optional] 
**devcontainer** | [**DevcontainerConfig**](DevcontainerConfig.md) |  | [optional] 

## Example

```python
from api_client.models.build_config import BuildConfig

# TODO update the JSON string below
json = "{}"
# create an instance of BuildConfig from a JSON string
build_config_instance = BuildConfig.from_json(json)
# print the JSON string representation of the object
print(BuildConfig.to_json())

# convert the object into a dict
build_config_dict = build_config_instance.to_dict()
# create an instance of BuildConfig from a dict
build_config_from_dict = BuildConfig.from_dict(build_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


