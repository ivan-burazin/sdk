import { Workspace as WorkspaceInstance, WorkspaceToolboxApi } from './client'
import { FileSystem } from './FileSystem'
import { Git } from './Git'
import { LspLanguageId, LspServer } from './LspServer'
import { Process } from './Process'

export interface WorkspaceCodeToolbox {
  getDefaultImage(): string
  getRunCommand(code: string): string
}

export class Workspace {
  public readonly fs: FileSystem
  public readonly git: Git
  public readonly process: Process

  constructor(
    public readonly id: string,
    private readonly instance: WorkspaceInstance,
    public readonly toolboxApi: WorkspaceToolboxApi,
    private readonly codeToolbox: WorkspaceCodeToolbox,
  ) {
    this.fs = new FileSystem(instance, this.toolboxApi)
    this.git = new Git(this, this.toolboxApi, instance)
    this.process = new Process(this.codeToolbox, this.toolboxApi, instance)
  }

  public async getWorkspaceRootDir(): Promise<string> {
    const response = await this.toolboxApi.getProjectDir({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
    })
    return response.dir!
  }

  public createLspServer(
    languageId: LspLanguageId,
    pathToProject: string,
  ): LspServer {
    return new LspServer(
      languageId,
      pathToProject,
      this.toolboxApi,
      this.instance,
    )
  }
}
