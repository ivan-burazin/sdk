# CreatePrebuildDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | **str** |  | [optional] 
**commit_interval** | **int** |  | [optional] 
**id** | **str** |  | [optional] 
**retention** | **int** |  | 
**trigger_files** | **List[str]** |  | [optional] 

## Example

```python
from api_client.models.create_prebuild_dto import CreatePrebuildDTO

# TODO update the JSON string below
json = "{}"
# create an instance of CreatePrebuildDTO from a JSON string
create_prebuild_dto_instance = CreatePrebuildDTO.from_json(json)
# print the JSON string representation of the object
print(CreatePrebuildDTO.to_json())

# convert the object into a dict
create_prebuild_dto_dict = create_prebuild_dto_instance.to_dict()
# create an instance of CreatePrebuildDTO from a dict
create_prebuild_dto_from_dict = CreatePrebuildDTO.from_dict(create_prebuild_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


