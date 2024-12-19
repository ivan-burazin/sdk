import {
  GitStatus,
  ListBranchResponse,
  Match,
  Workspace as WorkspaceInstance,
  WorkspaceToolboxApi,
} from './client'
import { Workspace } from './Workspace'

export class Git {
  constructor(
    private readonly workspace: Workspace,
    private readonly toolboxApi: WorkspaceToolboxApi,
    private readonly instance: WorkspaceInstance,
  ) {}
  public async add(path: string, files: string[]): Promise<void> {
    await this.toolboxApi.gitAddFiles({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      params: {
        path,
        files,
      },
    })
  }

  public async branches(path: string): Promise<ListBranchResponse> {
    return await this.toolboxApi.gitBranchList({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      path,
    })
  }

  public async clone(
    url: string,
    path: string,
    branch?: string,
    commitId?: string,
    username?: string,
    password?: string,
  ): Promise<void> {
    await this.toolboxApi.gitCloneRepository({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      params: {
        url: url,
        branch: branch,
        path,
        username,
        password,
        commitId,
      },
    })
  }

  public async commit(
    path: string,
    message: string,
    author: string,
    email: string,
  ): Promise<void> {
    await this.toolboxApi.gitCommitChanges({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      params: {
        path,
        message,
        author,
        email,
      },
    })
  }

  public async push(
    path: string,
    username?: string,
    password?: string,
  ): Promise<void> {
    await this.toolboxApi.gitPushChanges({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      params: {
        path,
        username,
        password,
      },
    })
  }

  public async pull(
    path: string,
    username?: string,
    password?: string,
  ): Promise<void> {
    await this.toolboxApi.gitPullChanges({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      params: {
        path,
        username,
        password,
      },
    })
  }

  public async status(path: string): Promise<GitStatus> {
    return await this.toolboxApi.gitGitStatus({
      workspaceId: this.instance.id,
      projectId: 'main', //  todo: remove this after project refactor
      path,
    })
  }
}
