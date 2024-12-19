import { v4 as uuidv4 } from 'uuid'

import { WorkspacePythonCodeToolbox } from './code-toolbox/WorkspacePythonCodeToolbox'
import { Workspace } from './Workspace'
import {
  Configuration,
  WorkspaceApi,
  GitProviderApi,
  WorkspaceToolboxApi,
  CreateProjectDTO,
} from './client'
import { WorkspaceTsCodeToolbox } from './code-toolbox/WorkspaceTsCodeToolbox'

interface DaytonaConfig {
  apiKey: string
  serverUrl: string
  target: string
}

//  type CodeLanguage = 'python' | 'javascript' | 'typescript' | 'java' | 'csharp' | 'go' | 'ruby' | 'php' | 'swift' | 'kotlin' | 'rust' | 'scala' | 'r' | 'perl' | 'bash' | 'powershell' | 'sql' | 'html' | 'css' | 'json' | 'yaml' | 'xml' | 'markdown' | 'plaintext'
type CodeLanguage = 'python' | 'javascript' | 'typescript'

type CreateWorkspaceParams = {
  id?: string
  image?: string
  language: CodeLanguage
}

export class Daytona {
  public readonly gitProviderApi: GitProviderApi
  public readonly workspaceApi: WorkspaceApi
  public readonly toolboxApi: WorkspaceToolboxApi
  public readonly target: string

  private readonly apiKey: string
  private readonly serverUrl: string

  constructor(config?: DaytonaConfig) {
    const apiKey = config?.apiKey || process.env.DAYTONA_API_KEY
    if (!apiKey) {
      throw new Error('API key is required')
    }
    const serverUrl = config?.serverUrl || process.env.DAYTONA_SERVER_URL
    if (!serverUrl) {
      throw new Error('Server URL is required')
    }
    const target = config?.target || process.env.DAYTONA_TARGET || 'local'

    this.apiKey = apiKey
    this.serverUrl = serverUrl
    this.target = target

    const configuration = new Configuration({
      basePath: this.serverUrl,
      //  apiKey: this.apiKey,
      headers: {
        Authorization: `Bearer ${this.apiKey}`,
      },
    })

    this.gitProviderApi = new GitProviderApi(configuration)
    this.workspaceApi = new WorkspaceApi(configuration)
    this.toolboxApi = new WorkspaceToolboxApi(configuration)
  }

  public async create(params?: CreateWorkspaceParams): Promise<Workspace> {
    const workspaceId = params?.id || `sandbox-${uuidv4().slice(0, 8)}`

    const codeToolbox = (() => {
      if (!params) {
        //  use python as default language
        return new WorkspacePythonCodeToolbox()
      }
      switch (params?.language) {
        case 'javascript':
        case 'typescript':
          return new WorkspaceTsCodeToolbox()
        case 'python':
          return new WorkspacePythonCodeToolbox()
        default:
          throw new Error(`Unsupported language: ${params?.language}`)
      }
    })()

    const projects: CreateProjectDTO[] = [
      {
        name: 'main',
        image: params?.image || codeToolbox.getDefaultImage(),
        envVars: {
          DAYTONA_SKIP_CLONE: 'true',
        },
        source: {
          //  todo: remove when repo is not required
          repository: {
            branch: 'main',
            cloneTarget: 'branch',
            id: 'python-helloworld',
            name: 'python-helloworld',
            owner: 'dbarnett',
            path: undefined,
            prNumber: undefined,
            sha: '288d7ced1b971fd1b3b0c36002b96e1c3f91542e',
            source: 'github.com',
            url: 'https://github.com/dbarnett/python-helloworld.git',
          },
        },
      },
    ]

    const workspaceInstance = await this.workspaceApi.createWorkspace({
      workspace: {
        id: workspaceId,
        name: workspaceId, //  todo: remove this after project refactor
        projects,
        target: this.target,
      },
    })

    const workspace = new Workspace(
      workspaceId,
      workspaceInstance,
      this.toolboxApi,
      codeToolbox,
    )

    return workspace
  }

  public remove(workspace: Workspace) {
    return this.workspaceApi.removeWorkspace({
      workspaceId: workspace.id,
    })
  }
}
