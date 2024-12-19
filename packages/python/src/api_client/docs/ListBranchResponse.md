# ListBranchResponse


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branches** | **List[str]** |  | 

## Example

```python
from api_client.models.list_branch_response import ListBranchResponse

# TODO update the JSON string below
json = "{}"
# create an instance of ListBranchResponse from a JSON string
list_branch_response_instance = ListBranchResponse.from_json(json)
# print the JSON string representation of the object
print(ListBranchResponse.to_json())

# convert the object into a dict
list_branch_response_dict = list_branch_response_instance.to_dict()
# create an instance of ListBranchResponse from a dict
list_branch_response_from_dict = ListBranchResponse.from_dict(list_branch_response_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


