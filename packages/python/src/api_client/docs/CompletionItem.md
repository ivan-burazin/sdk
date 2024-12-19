# CompletionItem


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**detail** | **str** |  | [optional] 
**documentation** | **object** |  | [optional] 
**filter_text** | **str** |  | [optional] 
**insert_text** | **str** |  | [optional] 
**kind** | **int** |  | [optional] 
**label** | **str** |  | 
**sort_text** | **str** |  | [optional] 

## Example

```python
from api_client.models.completion_item import CompletionItem

# TODO update the JSON string below
json = "{}"
# create an instance of CompletionItem from a JSON string
completion_item_instance = CompletionItem.from_json(json)
# print the JSON string representation of the object
print(CompletionItem.to_json())

# convert the object into a dict
completion_item_dict = completion_item_instance.to_dict()
# create an instance of CompletionItem from a dict
completion_item_from_dict = CompletionItem.from_dict(completion_item_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


