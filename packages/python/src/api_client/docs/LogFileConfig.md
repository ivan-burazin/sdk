# LogFileConfig


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**compress** | **bool** |  | [optional] 
**local_time** | **bool** |  | [optional] 
**max_age** | **int** |  | 
**max_backups** | **int** |  | 
**max_size** | **int** |  | 
**path** | **str** |  | 

## Example

```python
from api_client.models.log_file_config import LogFileConfig

# TODO update the JSON string below
json = "{}"
# create an instance of LogFileConfig from a JSON string
log_file_config_instance = LogFileConfig.from_json(json)
# print the JSON string representation of the object
print(LogFileConfig.to_json())

# convert the object into a dict
log_file_config_dict = log_file_config_instance.to_dict()
# create an instance of LogFileConfig from a dict
log_file_config_from_dict = LogFileConfig.from_dict(log_file_config_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


