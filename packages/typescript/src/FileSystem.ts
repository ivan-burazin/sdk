import {
  FileInfo,
  Match,
  ReplaceRequest,
  ReplaceResult,
  SearchFilesResponse,
  Workspace as WorkspaceInstance,
  WorkspaceToolboxApi,
} from './client'

type FilePermissionsParams = {
  group?: string
  mode?: string
  owner?: string
}

export class FileSystem {
  constructor(
    private readonly instance: WorkspaceInstance,
    private readonly toolboxApi: WorkspaceToolboxApi,
  ) {}

  public createFolder(path: string, mode: string): Promise<void> {
    return this.toolboxApi.fsCreateFolder({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      path,
      mode,
    })
  }

  public deleteFile(path: string): Promise<void> {
    return this.toolboxApi.fsDeleteFile({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      path,
    })
  }

  public downloadFile(path: string): Promise<Blob> {
    return this.toolboxApi.fsDownloadFile({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      path,
    })
  }

  public findFiles(path: string, pattern: string): Promise<Array<Match>> {
    return this.toolboxApi.fsFindInFiles({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      path,
      pattern,
    })
  }

  public getFileDetails(path: string): Promise<FileInfo> {
    return this.toolboxApi.fsGetFileDetails({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      path,
    })
  }

  public listFiles(path: string): Promise<FileInfo[]> {
    return this.toolboxApi.fsListFiles({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      path,
    })
  }

  public moveFiles(source: string, destination: string): Promise<void> {
    return this.toolboxApi.fsMoveFile({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      source,
      destination,
    })
  }

  public replaceInFiles(
    files: string[],
    pattern: string,
    newValue: string,
  ): Promise<Array<ReplaceResult>> {
    const ReplaceRequest: ReplaceRequest = {
      files,
      newValue,
      pattern,
    }

    return this.toolboxApi.fsReplaceInFiles({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      replace: ReplaceRequest,
    })
  }

  public searchFiles(
    path: string,
    pattern: string,
  ): Promise<SearchFilesResponse> {
    return this.toolboxApi.fsSearchFiles({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      path,
      pattern,
    })
  }

  public setFilePermissions(
    path: string,
    permissions: FilePermissionsParams,
  ): Promise<void> {
    return this.toolboxApi.fsSetFilePermissions({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      path,
      group: permissions.group,
      mode: permissions.mode,
      owner: permissions.owner,
    })
  }

  public uploadFile(path: string, file: Blob): Promise<void> {
    return this.toolboxApi.fsUploadFile({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      path,
      file,
    })
  }
}
