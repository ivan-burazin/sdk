import {
  CompletionList,
  LspSymbol,
  Workspace as WorkspaceInstance,
  WorkspaceToolboxApi,
} from './client'

export type LspLanguageId = 'typescript'
export type Position = {
  line: number
  character: number
}

export class LspServer {
  constructor(
    private readonly languageId: LspLanguageId,
    private readonly pathToProject: string,
    private readonly toolboxApi: WorkspaceToolboxApi,
    private readonly instance: WorkspaceInstance,
  ) {}

  public async start(): Promise<void> {
    return this.toolboxApi.lspStart({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      params: {
        languageId: this.languageId,
        pathToProject: this.pathToProject,
      },
    })
  }

  public async stop(): Promise<void> {
    return this.toolboxApi.lspStop({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      params: {
        languageId: this.languageId,
        pathToProject: this.pathToProject,
      },
    })
  }

  public async didOpen(path: string): Promise<void> {
    return this.toolboxApi.lspDidOpen({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      params: {
        languageId: this.languageId,
        pathToProject: this.pathToProject,
        uri: 'file://' + path,
      },
    })
  }

  public async didClose(path: string): Promise<void> {
    return this.toolboxApi.lspDidClose({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      params: {
        languageId: this.languageId,
        pathToProject: this.pathToProject,
        uri: 'file://' + path,
      },
    })
  }

  public async documentSymbols(path: string): Promise<LspSymbol[]> {
    return this.toolboxApi.lspDocumentSymbols({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      languageId: this.languageId,
      pathToProject: this.pathToProject,
      uri: 'file://' + path,
    })
  }

  public async workspaceSymbols(query: string): Promise<LspSymbol[]> {
    return this.toolboxApi.lspWorkspaceSymbols({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      languageId: this.languageId,
      pathToProject: this.pathToProject,
      query,
    })
  }

  public async completions(
    path: string,
    position: Position,
  ): Promise<CompletionList> {
    return this.toolboxApi.lspCompletions({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      params: {
        languageId: this.languageId,
        pathToProject: this.pathToProject,
        uri: 'file://' + path,
        position,
      },
    })
  }
}
