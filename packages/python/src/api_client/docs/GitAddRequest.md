# GitAddRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**files** | **List[str]** | files to add (use . for all files) | 
**path** | **str** |  | 

## Example

```python
from api_client.models.git_add_request import GitAddRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GitAddRequest from a JSON string
git_add_request_instance = GitAddRequest.from_json(json)
# print the JSON string representation of the object
print(GitAddRequest.to_json())

# convert the object into a dict
git_add_request_dict = git_add_request_instance.to_dict()
# create an instance of GitAddRequest from a dict
git_add_request_from_dict = GitAddRequest.from_dict(git_add_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


