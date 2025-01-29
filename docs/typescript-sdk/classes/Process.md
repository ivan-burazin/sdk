[Daytona TypeScript SDK - v0.7.0](../README.md) / Process

# Class: Process

Handles process and code execution within a workspace
 Process

## Table of contents

### Constructors

- [constructor](Process.md#constructor)

### Methods

- [codeRun](Process.md#coderun)
- [createSession](Process.md#createsession)
- [deleteSession](Process.md#deletesession)
- [executeSession](Process.md#executesession)
- [getExecuteSessionCommandLogs](Process.md#getexecutesessioncommandlogs)
- [listSessions](Process.md#listsessions)
- [processExecuteCommand](Process.md#processexecutecommand)

## Constructors

### constructor

• **new Process**(`codeToolbox`, `toolboxApi`, `instance`): [`Process`](Process.md)

#### Parameters

| Name | Type |
| :------ | :------ |
| `codeToolbox` | [`WorkspaceCodeToolbox`](../interfaces/WorkspaceCodeToolbox.md) |
| `toolboxApi` | `ToolboxApi` |
| `instance` | `Workspace` |

#### Returns

[`Process`](Process.md)

#### Defined in

[Process.ts:17](https://github.com/daytonaio/sdk/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/typescript/src/Process.ts#L17)

## Methods

### codeRun

▸ **codeRun**(`code`): `Promise`\<`ExecuteResponse`\>

Executes code in the workspace using the appropriate language runtime

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `code` | `string` | Code to execute |

#### Returns

`Promise`\<`ExecuteResponse`\>

Code execution results

#### Defined in

[Process.ts:45](https://github.com/daytonaio/sdk/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/typescript/src/Process.ts#L45)

___

### createSession

▸ **createSession**(`sessionId`): `Promise`\<`void`\>

Creates a new exec session in the workspace

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sessionId` | `string` | Unique identifier for the session |

#### Returns

`Promise`\<`void`\>

Code execution results

#### Defined in

[Process.ts:60](https://github.com/daytonaio/sdk/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/typescript/src/Process.ts#L60)

___

### deleteSession

▸ **deleteSession**(`sessionId`): `Promise`\<`void`\>

Deletes a session in the workspace

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sessionId` | `string` | Unique identifier for the session |

#### Returns

`Promise`\<`void`\>

#### Defined in

[Process.ts:101](https://github.com/daytonaio/sdk/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/typescript/src/Process.ts#L101)

___

### executeSession

▸ **executeSession**(`sessionId`, `req`): `Promise`\<`SessionExecuteResponse`\>

Executes a command in the session

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sessionId` | `string` | Unique identifier for the session |
| `req` | `SessionExecuteRequest` | Command to execute and async flag |

#### Returns

`Promise`\<`SessionExecuteResponse`\>

Command execution results

#### Defined in

[Process.ts:72](https://github.com/daytonaio/sdk/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/typescript/src/Process.ts#L72)

___

### getExecuteSessionCommandLogs

▸ **getExecuteSessionCommandLogs**(`sessionId`, `commandId`): `Promise`\<`string`\>

Gets the logs for a command in the session

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `sessionId` | `string` | Unique identifier for the session |
| `commandId` | `string` | Unique identifier for the command |

#### Returns

`Promise`\<`string`\>

Command logs

#### Defined in

[Process.ts:83](https://github.com/daytonaio/sdk/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/typescript/src/Process.ts#L83)

___

### listSessions

▸ **listSessions**(): `Promise`\<`Session`[]\>

Lists all sessions in the workspace

#### Returns

`Promise`\<`Session`[]\>

List of sessions

#### Defined in

[Process.ts:92](https://github.com/daytonaio/sdk/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/typescript/src/Process.ts#L92)

___

### processExecuteCommand

▸ **processExecuteCommand**(`command`, `timeout?`): `Promise`\<`ExecuteResponse`\>

Executes a shell command in the workspace

#### Parameters

| Name | Type | Description |
| :------ | :------ | :------ |
| `command` | `string` | Command to execute |
| `timeout?` | `number` | - |

#### Returns

`Promise`\<`ExecuteResponse`\>

Command execution results

#### Defined in

[Process.ts:28](https://github.com/daytonaio/sdk/blob/ffc8236270880d7442f27c0dd60560911b3c474e/packages/typescript/src/Process.ts#L28)
