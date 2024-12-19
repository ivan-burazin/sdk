# CreateProjectSourceDTO


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**repository** | [**GitRepository**](GitRepository.md) |  | 

## Example

```python
from api_client.models.create_project_source_dto import CreateProjectSourceDTO

# TODO update the JSON string below
json = "{}"
# create an instance of CreateProjectSourceDTO from a JSON string
create_project_source_dto_instance = CreateProjectSourceDTO.from_json(json)
# print the JSON string representation of the object
print(CreateProjectSourceDTO.to_json())

# convert the object into a dict
create_project_source_dto_dict = create_project_source_dto_instance.to_dict()
# create an instance of CreateProjectSourceDTO from a dict
create_project_source_dto_from_dict = CreateProjectSourceDTO.from_dict(create_project_source_dto_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


