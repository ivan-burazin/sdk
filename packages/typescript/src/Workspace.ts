import { ToolboxApi, WorkspaceApi } from '@daytonaio/api-client'
import { Workspace as WorkspaceInstance } from '@daytonaio/api-client'
import { FileSystem } from './FileSystem'
import { Git } from './Git'
//  import { LspLanguageId, LspServer } from './LspServer'
import { Process } from './Process'
import { LspLanguageId, LspServer } from './LspServer'

/**
 * Interface defining methods that a code toolbox must implement
 * @interface WorkspaceCodeToolbox
 */
export interface WorkspaceCodeToolbox {
  /** Generates a command to run the provided code */
  getRunCommand(code: string): string
}

/**
 * Represents a Daytona workspace instance with file system, git, and process management capabilities
 * @class Workspace
 */
export class Workspace {
  /** File system operations for the workspace */
  public readonly fs: FileSystem
  /** Git operations for the workspace */
  public readonly git: Git
  /** Process and code execution operations */
  public readonly process: Process

  /**
   * Creates a new workspace instance
   * @param {string} id - Unique identifier for the workspace
   * @param {WorkspaceInstance} instance - The underlying workspace instance
   * @param {WorkspaceApi} workspaceApi - API client for workspace operations
   * @param {ToolboxApi} toolboxApi - API client for toolbox operations
   * 
   * @param {WorkspaceCodeToolbox} codeToolbox - Language-specific toolbox implementation
   */
  constructor(
    public readonly id: string,
    private readonly instance: WorkspaceInstance,
    public readonly workspaceApi: WorkspaceApi,
    public readonly toolboxApi: ToolboxApi,
    private readonly codeToolbox: WorkspaceCodeToolbox,
  ) {
    this.fs = new FileSystem(instance, this.toolboxApi)
    this.git = new Git(this, this.toolboxApi, instance)
    this.process = new Process(this.codeToolbox, this.toolboxApi, instance)
  }

  /**
   * Gets the root directory path of the workspace
   * @returns {Promise<string>} The absolute path to the workspace root
   */
  public async getWorkspaceRootDir(): Promise<string | undefined> {
    const response = await this.toolboxApi.getProjectDir(
      this.instance.id,
    )
    return response.data.dir
  }

  /**
   * Creates a new Language Server Protocol (LSP) server instance
   * @param {LspLanguageId} languageId - The language server type
   * @param {string} pathToProject - Path to the project root
   * @returns {LspServer} A new LSP server instance
   */
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
