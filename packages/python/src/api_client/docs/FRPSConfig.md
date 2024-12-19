# FRPSConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**domain** | **str** |  | 
**port** | **int** |  | 
**protocol** | **str** |  | 

## Example

```python
from api_client.models.frps_config import FRPSConfig

# TODO update the JSON string below
json = "{}"
# create an instance of FRPSConfig from a JSON string
frps_config_instance = FRPSConfig.from_json(json)
# print the JSON string representation of the object
print(FRPSConfig.to_json())

# convert the object into a dict
frps_config_dict = frps_config_instance.to_dict()
# create an instance of FRPSConfig from a dict
frps_config_from_dict = FRPSConfig.from_dict(frps_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


