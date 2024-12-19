# ReplaceResult


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**error** | **str** |  | [optional] 
**file** | **str** |  | [optional] 
**success** | **bool** |  | [optional] 

## Example

```python
from api_client.models.replace_result import ReplaceResult

# TODO update the JSON string below
json = "{}"
# create an instance of ReplaceResult from a JSON string
replace_result_instance = ReplaceResult.from_json(json)
# print the JSON string representation of the object
print(ReplaceResult.to_json())

# convert the object into a dict
replace_result_dict = replace_result_instance.to_dict()
# create an instance of ReplaceResult from a dict
replace_result_from_dict = ReplaceResult.from_dict(replace_result_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


