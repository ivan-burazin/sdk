# LspServerRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**language_id** | **str** |  | 
**path_to_project** | **str** |  | 

## Example

```python
from api_client.models.lsp_server_request import LspServerRequest

# TODO update the JSON string below
json = "{}"
# create an instance of LspServerRequest from a JSON string
lsp_server_request_instance = LspServerRequest.from_json(json)
# print the JSON string representation of the object
print(LspServerRequest.to_json())

# convert the object into a dict
lsp_server_request_dict = lsp_server_request_instance.to_dict()
# create an instance of LspServerRequest from a dict
lsp_server_request_from_dict = LspServerRequest.from_dict(lsp_server_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


