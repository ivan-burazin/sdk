# ProviderProviderTargetProperty


## Properties

Name | Type | Description | Notes
------------ | ------------- | ------------- | -------------
**default_value** | **str** | DefaultValue is converted into the appropriate type based on the Type If the property is a FilePath, the DefaultValue is a path to a directory | [optional] 
**description** | **str** | Brief description of the property | [optional] 
**disabled_predicate** | **str** | A regex string matched with the name of the target to determine if the property should be disabled If the regex matches the target name, the property will be disabled E.g. \&quot;^local$\&quot; will disable the property for the local target | [optional] 
**input_masked** | **bool** |  | [optional] 
**options** | **List[str]** | Options is only used if the Type is ProviderTargetPropertyTypeOption | [optional] 
**suggestions** | **List[str]** | Suggestions is an optional list of auto-complete values to assist the user while filling the field | [optional] 
**type** | [**ProviderProviderTargetPropertyType**](ProviderProviderTargetPropertyType.md) |  | [optional] 

## Example

```python
from api_client.models.provider_provider_target_property import ProviderProviderTargetProperty

# TODO update the JSON string below
json = "{}"
# create an instance of ProviderProviderTargetProperty from a JSON string
provider_provider_target_property_instance = ProviderProviderTargetProperty.from_json(json)
# print the JSON string representation of the object
print(ProviderProviderTargetProperty.to_json())

# convert the object into a dict
provider_provider_target_property_dict = provider_provider_target_property_instance.to_dict()
# create an instance of ProviderProviderTargetProperty from a dict
provider_provider_target_property_from_dict = ProviderProviderTargetProperty.from_dict(provider_provider_target_property_dict)
```
[[Back to Model list]](../README.md#documentation-for-models) [[Back to API list]](../README.md#documentation-for-api-endpoints) [[Back to README]](../README.md)


