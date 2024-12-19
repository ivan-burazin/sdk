# LspCompletionParams


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**context** | [**CompletionContext**](CompletionContext.md) |  | [optional] 
**language_id** | **str** |  | 
**path_to_project** | **str** |  | 
**position** | [**Position**](Position.md) |  | 
**uri** | **str** |  | 

## Example

```python
from api_client.models.lsp_completion_params import LspCompletionParams

# TODO update the JSON string below
json = "{}"
# create an instance of LspCompletionParams from a JSON string
lsp_completion_params_instance = LspCompletionParams.from_json(json)
# print the JSON string representation of the object
print(LspCompletionParams.to_json())

# convert the object into a dict
lsp_completion_params_dict = lsp_completion_params_instance.to_dict()
# create an instance of LspCompletionParams from a dict
lsp_completion_params_from_dict = LspCompletionParams.from_dict(lsp_completion_params_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


