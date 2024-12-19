# LspLocation


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**range** | [**LspRange**](LspRange.md) |  | 
**uri** | **str** |  | 

## Example

```python
from api_client.models.lsp_location import LspLocation

# TODO update the JSON string below
json = "{}"
# create an instance of LspLocation from a JSON string
lsp_location_instance = LspLocation.from_json(json)
# print the JSON string representation of the object
print(LspLocation.to_json())

# convert the object into a dict
lsp_location_dict = lsp_location_instance.to_dict()
# create an instance of LspLocation from a dict
lsp_location_from_dict = LspLocation.from_dict(lsp_location_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


