# LspSymbol


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**kind** | **int** |  | 
**location** | [**LspLocation**](LspLocation.md) |  | 
**name** | **str** |  | 

## Example

```python
from api_client.models.lsp_symbol import LspSymbol

# TODO update the JSON string below
json = "{}"
# create an instance of LspSymbol from a JSON string
lsp_symbol_instance = LspSymbol.from_json(json)
# print the JSON string representation of the object
print(LspSymbol.to_json())

# convert the object into a dict
lsp_symbol_dict = lsp_symbol_instance.to_dict()
# create an instance of LspSymbol from a dict
lsp_symbol_from_dict = LspSymbol.from_dict(lsp_symbol_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


