# ReplaceRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | **List[str]** |  | 
**new_value** | **str** |  | 
**pattern** | **str** |  | 

## Example

```python
from api_client.models.replace_request import ReplaceRequest

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceRequest from a JSON string
replace_request_instance = ReplaceRequest.from_json(json)
# print the JSON string representation of the object
print(ReplaceRequest.to_json())

# convert the object into a dict
replace_request_dict = replace_request_instance.to_dict()
# create an instance of ReplaceRequest from a dict
replace_request_from_dict = ReplaceRequest.from_dict(replace_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


