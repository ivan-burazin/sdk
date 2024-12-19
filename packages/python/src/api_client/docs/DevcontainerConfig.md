# DevcontainerConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**file_path** | **str** |  | 

## Example

```python
from api_client.models.devcontainer_config import DevcontainerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of DevcontainerConfig from a JSON string
devcontainer_config_instance = DevcontainerConfig.from_json(json)
# print the JSON string representation of the object
print(DevcontainerConfig.to_json())

# convert the object into a dict
devcontainer_config_dict = devcontainer_config_instance.to_dict()
# create an instance of DevcontainerConfig from a dict
devcontainer_config_from_dict = DevcontainerConfig.from_dict(devcontainer_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


