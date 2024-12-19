# PrebuildDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | **str** |  | 
**commit_interval** | **int** |  | [optional] 
**id** | **str** |  | 
**project_config_name** | **str** |  | 
**retention** | **int** |  | 
**trigger_files** | **List[str]** |  | [optional] 

## Example

```python
from api_client.models.prebuild_dto import PrebuildDTO

# TODO update the JSON string below
json = "{}"
# create an instance of PrebuildDTO from a JSON string
prebuild_dto_instance = PrebuildDTO.from_json(json)
# print the JSON string representation of the object
print(PrebuildDTO.to_json())

# convert the object into a dict
prebuild_dto_dict = prebuild_dto_instance.to_dict()
# create an instance of PrebuildDTO from a dict
prebuild_dto_from_dict = PrebuildDTO.from_dict(prebuild_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


