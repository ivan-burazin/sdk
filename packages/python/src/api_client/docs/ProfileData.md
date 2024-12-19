# ProfileData


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**env_vars** | **Dict[str, str]** |  | 

## Example

```python
from api_client.models.profile_data import ProfileData

# TODO update the JSON string below
json = "{}"
# create an instance of ProfileData from a JSON string
profile_data_instance = ProfileData.from_json(json)
# print the JSON string representation of the object
print(ProfileData.to_json())

# convert the object into a dict
profile_data_dict = profile_data_instance.to_dict()
# create an instance of ProfileData from a dict
profile_data_from_dict = ProfileData.from_dict(profile_data_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


