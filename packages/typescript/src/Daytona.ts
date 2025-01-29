import { v4 as uuidv4 } from 'uuid'

import { WorkspacePythonCodeToolbox } from './code-toolbox/WorkspacePythonCodeToolbox'
import { Workspace } from './Workspace'
import {
  Configuration,
  WorkspaceApi,
  ToolboxApi,
  CreateWorkspaceTargetEnum,
} from '@daytonaio/api-client'
import { WorkspaceTsCodeToolbox } from './code-toolbox/WorkspaceTsCodeToolbox'

/**
 * Configuration options for initializing the Daytona client
 * @interface DaytonaConfig
 */
export interface DaytonaConfig {
  /** API key for authentication with Daytona server */
  apiKey: string
  /** URL of the Daytona server */
  serverUrl: string
  /** Target environment for workspaces */
  target: CreateWorkspaceTargetEnum
}

/** 
 * Supported programming languages for code execution
 */
export type CodeLanguage = 'python' | 'javascript' | 'typescript'

/**
 * Resource allocation for a workspace
 * @interface WorkspaceResources
 */
export interface WorkspaceResources {
  /** CPU allocation for the workspace */
  cpu?: number
  /** GPU allocation for the workspace */
  gpu?: number
  /** Memory allocation for the workspace in MB */
  memory?: number
  /** Disk space allocation for the workspace in MB */
  disk?: number
}

/**
 * Parameters for creating a new workspace
 * @interface CreateWorkspaceParams
 */
export type CreateWorkspaceParams = {
  /** Optional workspace ID. If not provided, a random ID will be generated */
  id?: string
  /** Optional Docker image to use for the workspace */
  image?: string
  /** Optional os user to use for the workspace */
  user?: string
  /** Programming language for direct code execution */
  language?: CodeLanguage
  /** Optional environment variables to set in the workspace */
  envVars?: Record<string, string>
  /** Workspace labels */
  labels?: Record<string, string>
  /** Is the workspace port preview public */
  public?: boolean
  /** Target location for the workspace */
  target?: string
  /** Resource allocation for the workspace */
  resources?: WorkspaceResources
  /** If true, will not wait for the workspace to be ready before returning */
  async?: boolean
}

/**
 * Main class for interacting with Daytona Server API
 * @class Daytona
 */
export class Daytona {
  private readonly workspaceApi: WorkspaceApi
  private readonly toolboxApi: ToolboxApi
  private readonly target: CreateWorkspaceTargetEnum

  private readonly apiKey: string
  private readonly serverUrl: string

  /**
   * Creates a new Daytona client instance
   * @param {DaytonaConfig} [config] - Configuration options
   * @throws {Error} When API key or server URL is missing
   */
  constructor(config?: DaytonaConfig) {
    const apiKey = config?.apiKey || process.env.DAYTONA_API_KEY
    if (!apiKey) {
      throw new Error('API key is required')
    }
    const serverUrl = config?.serverUrl || process.env.DAYTONA_SERVER_URL
    if (!serverUrl) {
      throw new Error('Server URL is required')
    }
    const envTarget = process.env.DAYTONA_TARGET as CreateWorkspaceTargetEnum
    const target = config?.target || envTarget

    this.apiKey = apiKey
    this.serverUrl = serverUrl
    this.target = target

    const configuration = new Configuration({
      basePath: this.serverUrl,
      baseOptions: {
        headers: {
          'Authorization': `Bearer ${this.apiKey}`,
        },
      },
    })

    this.workspaceApi = new WorkspaceApi(configuration)
    this.toolboxApi = new ToolboxApi(configuration)
  }

  /**
   * Creates a new workspace
   * @param {CreateWorkspaceParams} [params] - Parameters for workspace creation
   * @returns {Promise<Workspace>} The created workspace instance
   */
  public async create(params?: CreateWorkspaceParams): Promise<Workspace> {
    const workspaceId = params?.id || `sandbox-${uuidv4().slice(0, 8)}`

    const codeToolbox = this.getCodeToolbox(params?.language)

    const labels = params?.labels || {}
    if (params?.language) {
      labels[`code-toolbox-language`] = params.language
    }

    const reponse = await this.workspaceApi.createWorkspace({
        id: workspaceId,
        name: workspaceId, //  todo: remove this after project refactor
        image: params?.image,
        user: params?.user,
        env: params?.envVars || {},
        target: this.target,
        cpu: params?.resources?.cpu,
        gpu: params?.resources?.gpu,
        memory: params?.resources?.memory,
        disk: params?.resources?.disk,
    })

    const workspaceInstance = reponse.data

    const workspace = new Workspace(
      workspaceId,
      workspaceInstance,
      this.workspaceApi,
      this.toolboxApi,
      codeToolbox,
    )

    if (!params?.async) {
      await this.waitUntilReady(workspace)
    }

    return workspace
  }

  /**
   * Gets a workspace by its ID
   * @param {string} workspaceId - The ID of the workspace to retrieve
   * @returns {Promise<Workspace>} The workspace instance
   */
  public async get(workspaceId: string): Promise<Workspace> {
    const response = await this.workspaceApi.getWorkspace(workspaceId)
    const workspaceInstance = response.data
    const language = workspaceInstance.labels && workspaceInstance.labels[`code-toolbox-language`]
    const codeToolbox = this.getCodeToolbox(language as CodeLanguage)

    return new Workspace(workspaceId, workspaceInstance, this.workspaceApi, this.toolboxApi, codeToolbox)
  }

  /**
   * Starts a workspace
   * @param {Workspace} workspace - The workspace to start
   */
  public async start(workspace: Workspace) {
    await this.workspaceApi.startWorkspace(workspace.id)
  }

  /**
   * Stops a workspace
   * @param {Workspace} workspace - The workspace to stop
   * @returns {Promise<void>}
   */
  public async stop(workspace: Workspace) {
    await this.workspaceApi.stopWorkspace(workspace.id)
  }

  /**
   * Removes a workspace
   * @param {Workspace} workspace - The workspace to remove
   * @returns {Promise<void>}
   */
  public async remove(workspace: Workspace) {
    await this.workspaceApi.deleteWorkspace(workspace.id, true)
  }

  public async waitUntilReady(workspace: Workspace) {
    const maxAttempts = 60; // 5 minutes with 5 second intervals
    let attempts = 0;

    while (attempts < maxAttempts) {
      const response = await this.workspaceApi.getWorkspace(workspace.id);
      const state = response.data.state;

      if (state === 'started') {
        return;
      }

      if (state === 'error') {
        throw new Error(`Workspace failed to start with status: ${status}`);
      }

      await new Promise(resolve => setTimeout(resolve, 100)); // Wait 100 ms between checks
      attempts++;
    }

    throw new Error('Workspace failed to become ready within the timeout period');
  }

  private getCodeToolbox(language?: CodeLanguage) {
    switch (language) {
      case 'javascript':
      case 'typescript':
        return new WorkspaceTsCodeToolbox()
      case 'python':
      case undefined:
        return new WorkspacePythonCodeToolbox()
      default:
        throw new Error(`Unsupported language: ${language}`)
    }
  }
}
