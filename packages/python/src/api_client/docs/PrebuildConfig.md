# PrebuildConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | **str** |  | 
**commit_interval** | **int** |  | 
**id** | **str** |  | 
**retention** | **int** |  | 
**trigger_files** | **List[str]** |  | 

## Example

```python
from api_client.models.prebuild_config import PrebuildConfig

# TODO update the JSON string below
json = "{}"
# create an instance of PrebuildConfig from a JSON string
prebuild_config_instance = PrebuildConfig.from_json(json)
# print the JSON string representation of the object
print(PrebuildConfig.to_json())

# convert the object into a dict
prebuild_config_dict = prebuild_config_instance.to_dict()
# create an instance of PrebuildConfig from a dict
prebuild_config_from_dict = PrebuildConfig.from_dict(prebuild_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


