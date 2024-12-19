import {
  ExecuteResponse,
  Workspace as WorkspaceInstance,
  WorkspaceToolboxApi,
} from './client'
import { WorkspaceCodeToolbox } from './Workspace'

export class Process {
  constructor(
    private readonly codeToolbox: WorkspaceCodeToolbox,
    private readonly toolboxApi: WorkspaceToolboxApi,
    private readonly instance: WorkspaceInstance,
  ) {}

  public async processExecuteCommand(
    command: string,
  ): Promise<ExecuteResponse> {
    return this.toolboxApi.processExecuteCommand({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      params: {
        command,
      },
    })
  }

  public codeRun(code: string): Promise<ExecuteResponse> {
    const runCommand = this.codeToolbox.getRunCommand(code)

    return this.toolboxApi.processExecuteCommand({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      params: {
        command: runCommand,
      },
    })
  }
}
