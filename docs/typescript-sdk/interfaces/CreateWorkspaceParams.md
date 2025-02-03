[Daytona TypeScript SDK - v0.9.0](../README.md) / CreateWorkspaceParams

# Interface: CreateWorkspaceParams

Parameters for creating a new workspace
 CreateWorkspaceParams

## Table of contents

### Properties

- [async](CreateWorkspaceParams.md#async)
- [envVars](CreateWorkspaceParams.md#envvars)
- [id](CreateWorkspaceParams.md#id)
- [image](CreateWorkspaceParams.md#image)
- [labels](CreateWorkspaceParams.md#labels)
- [language](CreateWorkspaceParams.md#language)
- [public](CreateWorkspaceParams.md#public)
- [resources](CreateWorkspaceParams.md#resources)
- [target](CreateWorkspaceParams.md#target)
- [user](CreateWorkspaceParams.md#user)

## Properties

### async

• `Optional` **async**: `boolean`

If true, will not wait for the workspace to be ready before returning

#### Defined in

[Daytona.ts:70](https://github.com/daytonaio/sdk/blob/1398af77e9dc731b596a6407c9aac388c5e999a6/packages/typescript/src/Daytona.ts#L70)

___

### envVars

• `Optional` **envVars**: `Record`\<`string`, `string`\>

Optional environment variables to set in the workspace

#### Defined in

[Daytona.ts:60](https://github.com/daytonaio/sdk/blob/1398af77e9dc731b596a6407c9aac388c5e999a6/packages/typescript/src/Daytona.ts#L60)

___

### id

• `Optional` **id**: `string`

Optional workspace ID. If not provided, a random ID will be generated

#### Defined in

[Daytona.ts:52](https://github.com/daytonaio/sdk/blob/1398af77e9dc731b596a6407c9aac388c5e999a6/packages/typescript/src/Daytona.ts#L52)

___

### image

• `Optional` **image**: `string`

Optional Docker image to use for the workspace

#### Defined in

[Daytona.ts:54](https://github.com/daytonaio/sdk/blob/1398af77e9dc731b596a6407c9aac388c5e999a6/packages/typescript/src/Daytona.ts#L54)

___

### labels

• `Optional` **labels**: `Record`\<`string`, `string`\>

Workspace labels

#### Defined in

[Daytona.ts:62](https://github.com/daytonaio/sdk/blob/1398af77e9dc731b596a6407c9aac388c5e999a6/packages/typescript/src/Daytona.ts#L62)

___

### language

• `Optional` **language**: `CodeLanguage`

Programming language for direct code execution

#### Defined in

[Daytona.ts:58](https://github.com/daytonaio/sdk/blob/1398af77e9dc731b596a6407c9aac388c5e999a6/packages/typescript/src/Daytona.ts#L58)

___

### public

• `Optional` **public**: `boolean`

Is the workspace port preview public

#### Defined in

[Daytona.ts:64](https://github.com/daytonaio/sdk/blob/1398af77e9dc731b596a6407c9aac388c5e999a6/packages/typescript/src/Daytona.ts#L64)

___

### resources

• `Optional` **resources**: `WorkspaceResources`

Resource allocation for the workspace

#### Defined in

[Daytona.ts:68](https://github.com/daytonaio/sdk/blob/1398af77e9dc731b596a6407c9aac388c5e999a6/packages/typescript/src/Daytona.ts#L68)

___

### target

• `Optional` **target**: `string`

Target location for the workspace

#### Defined in

[Daytona.ts:66](https://github.com/daytonaio/sdk/blob/1398af77e9dc731b596a6407c9aac388c5e999a6/packages/typescript/src/Daytona.ts#L66)

___

### user

• `Optional` **user**: `string`

Optional os user to use for the workspace

#### Defined in

[Daytona.ts:56](https://github.com/daytonaio/sdk/blob/1398af77e9dc731b596a6407c9aac388c5e999a6/packages/typescript/src/Daytona.ts#L56)
