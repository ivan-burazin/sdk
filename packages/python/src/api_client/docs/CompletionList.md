# CompletionList


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**is_incomplete** | **bool** |  | 
**items** | [**List[CompletionItem]**](CompletionItem.md) |  | 

## Example

```python
from api_client.models.completion_list import CompletionList

# TODO update the JSON string below
json = "{}"
# create an instance of CompletionList from a JSON string
completion_list_instance = CompletionList.from_json(json)
# print the JSON string representation of the object
print(CompletionList.to_json())

# convert the object into a dict
completion_list_dict = completion_list_instance.to_dict()
# create an instance of CompletionList from a dict
completion_list_from_dict = CompletionList.from_dict(completion_list_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


