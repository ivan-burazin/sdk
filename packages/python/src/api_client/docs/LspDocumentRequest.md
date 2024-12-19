# LspDocumentRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_id** | **str** |  | 
**path_to_project** | **str** |  | 
**uri** | **str** |  | 

## Example

```python
from api_client.models.lsp_document_request import LspDocumentRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LspDocumentRequest from a JSON string
lsp_document_request_instance = LspDocumentRequest.from_json(json)
# print the JSON string representation of the object
print(LspDocumentRequest.to_json())

# convert the object into a dict
lsp_document_request_dict = lsp_document_request_instance.to_dict()
# create an instance of LspDocumentRequest from a dict
lsp_document_request_from_dict = LspDocumentRequest.from_dict(lsp_document_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


