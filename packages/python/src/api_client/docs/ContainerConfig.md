# ContainerConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**image** | **str** |  | 
**user** | **str** |  | 

## Example

```python
from api_client.models.container_config import ContainerConfig

# TODO update the JSON string below
json = "{}"
# create an instance of ContainerConfig from a JSON string
container_config_instance = ContainerConfig.from_json(json)
# print the JSON string representation of the object
print(ContainerConfig.to_json())

# convert the object into a dict
container_config_dict = container_config_instance.to_dict()
# create an instance of ContainerConfig from a dict
container_config_from_dict = ContainerConfig.from_dict(container_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


