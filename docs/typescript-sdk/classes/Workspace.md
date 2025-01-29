[Daytona TypeScript SDK - v0.7.0](../README.md) / Workspace

# Class: Workspace

Represents a Daytona workspace instance with file system, git, and process management capabilities
 Workspace

## Table of contents

### Constructors

- [constructor](Workspace.md#constructor)

### Properties

- [fs](Workspace.md#fs)
- [git](Workspace.md#git)
- [id](Workspace.md#id)
- [process](Workspace.md#process)
- [toolboxApi](Workspace.md#toolboxapi)
- [workspaceApi](Workspace.md#workspaceapi)

### Methods

- [createLspServer](Workspace.md#createlspserver)
- [getWorkspaceRootDir](Workspace.md#getworkspacerootdir)

## Constructors

### constructor

• **new Workspace**(`id`, `instance`, `workspaceApi`, `toolboxApi`, `codeToolbox`): [`Workspace`](Workspace.md)

Creates a new workspace instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `id` | `string` | Unique identifier for the workspace |
| `instance` | `Workspace` | The underlying workspace instance |
| `workspaceApi` | `WorkspaceApi` | API client for workspace operations |
| `toolboxApi` | `ToolboxApi` | API client for toolbox operations |
| `codeToolbox` | [`WorkspaceCodeToolbox`](../interfaces/WorkspaceCodeToolbox.md) | Language-specific toolbox implementation |

#### Returns

[`Workspace`](Workspace.md)

#### Defined in

[Workspace.ts:39](https://github.com/daytonaio/sdk/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/typescript/src/Workspace.ts#L39)

## Properties

### fs

• `Readonly` **fs**: [`FileSystem`](FileSystem.md)

File system operations for the workspace

#### Defined in

[Workspace.ts:24](https://github.com/daytonaio/sdk/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/typescript/src/Workspace.ts#L24)

___

### git

• `Readonly` **git**: [`Git`](Git.md)

Git operations for the workspace

#### Defined in

[Workspace.ts:26](https://github.com/daytonaio/sdk/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/typescript/src/Workspace.ts#L26)

___

### id

• `Readonly` **id**: `string`

Unique identifier for the workspace

#### Defined in

[Workspace.ts:40](https://github.com/daytonaio/sdk/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/typescript/src/Workspace.ts#L40)

___

### process

• `Readonly` **process**: [`Process`](Process.md)

Process and code execution operations

#### Defined in

[Workspace.ts:28](https://github.com/daytonaio/sdk/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/typescript/src/Workspace.ts#L28)

___

### toolboxApi

• `Readonly` **toolboxApi**: `ToolboxApi`

API client for toolbox operations

#### Defined in

[Workspace.ts:43](https://github.com/daytonaio/sdk/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/typescript/src/Workspace.ts#L43)

___

### workspaceApi

• `Readonly` **workspaceApi**: `WorkspaceApi`

API client for workspace operations

#### Defined in

[Workspace.ts:42](https://github.com/daytonaio/sdk/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/typescript/src/Workspace.ts#L42)

## Methods

### createLspServer

▸ **createLspServer**(`languageId`, `pathToProject`): `LspServer`

Creates a new Language Server Protocol (LSP) server instance

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `languageId` | ``"typescript"`` | The language server type |
| `pathToProject` | `string` | Path to the project root |

#### Returns

`LspServer`

A new LSP server instance

#### Defined in

[Workspace.ts:68](https://github.com/daytonaio/sdk/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/typescript/src/Workspace.ts#L68)

___

### getWorkspaceRootDir

▸ **getWorkspaceRootDir**(): `Promise`\<`undefined` \| `string`\>

Gets the root directory path of the workspace

#### Returns

`Promise`\<`undefined` \| `string`\>

The absolute path to the workspace root

#### Defined in

[Workspace.ts:55](https://github.com/daytonaio/sdk/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/typescript/src/Workspace.ts#L55)
