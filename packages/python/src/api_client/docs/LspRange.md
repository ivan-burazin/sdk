# LspRange


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**end** | [**LspPosition**](LspPosition.md) |  | 
**start** | [**LspPosition**](LspPosition.md) |  | 

## Example

```python
from api_client.models.lsp_range import LspRange

# TODO update the JSON string below
json = "{}"
# create an instance of LspRange from a JSON string
lsp_range_instance = LspRange.from_json(json)
# print the JSON string representation of the object
print(LspRange.to_json())

# convert the object into a dict
lsp_range_dict = lsp_range_instance.to_dict()
# create an instance of LspRange from a dict
lsp_range_from_dict = LspRange.from_dict(lsp_range_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


