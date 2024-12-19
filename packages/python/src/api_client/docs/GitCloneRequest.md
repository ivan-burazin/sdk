# GitCloneRequest


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**branch** | **str** |  | [optional] 
**commit_id** | **str** |  | [optional] 
**password** | **str** |  | [optional] 
**path** | **str** |  | 
**url** | **str** |  | 
**username** | **str** |  | [optional] 

## Example

```python
from api_client.models.git_clone_request import GitCloneRequest

# TODO update the JSON string below
json = "{}"
# create an instance of GitCloneRequest from a JSON string
git_clone_request_instance = GitCloneRequest.from_json(json)
# print the JSON string representation of the object
print(GitCloneRequest.to_json())

# convert the object into a dict
git_clone_request_dict = git_clone_request_instance.to_dict()
# create an instance of GitCloneRequest from a dict
git_clone_request_from_dict = GitCloneRequest.from_dict(git_clone_request_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


