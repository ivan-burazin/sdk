# CompletionContext


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**trigger_character** | **str** |  | [optional] 
**trigger_kind** | **int** |  | 

## Example

```python
from api_client.models.completion_context import CompletionContext

# TODO update the JSON string below
json = "{}"
# create an instance of CompletionContext from a JSON string
completion_context_instance = CompletionContext.from_json(json)
# print the JSON string representation of the object
print(CompletionContext.to_json())

# convert the object into a dict
completion_context_dict = completion_context_instance.to_dict()
# create an instance of CompletionContext from a dict
completion_context_from_dict = CompletionContext.from_dict(completion_context_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


