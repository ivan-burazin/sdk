import {
  CreateSessionRequest,
  ExecuteResponse,
  Session,
  SessionExecuteRequest,
  SessionExecuteResponse,
  ToolboxApi,
  Workspace,
} from '@daytonaio/api-client'
import { WorkspaceCodeToolbox } from './Workspace'

/**
 * Handles process and code execution within a workspace
 * @class Process
 */
export class Process {
  constructor(
    private readonly codeToolbox: WorkspaceCodeToolbox,
    private readonly toolboxApi: ToolboxApi,
    private readonly instance: Workspace,
  ) {}

  /**
   * Executes a shell command in the workspace
   * @param {string} command - Command to execute
   * @returns {Promise<ExecuteResponse>} Command execution results
   */
  public async processExecuteCommand(
    command: string,
    timeout?: number
  ): Promise<ExecuteResponse> {
    const response = await this.toolboxApi.executeCommand(this.instance.id, {
      command,
      timeout,
    })

    return response.data
  }

  /**
   * Executes code in the workspace using the appropriate language runtime
   * @param {string} code - Code to execute
   * @returns {Promise<ExecuteResponse>} Code execution results
   */
  public async codeRun(code: string): Promise<ExecuteResponse> {
    const runCommand = this.codeToolbox.getRunCommand(code)

    const response = await this.toolboxApi.executeCommand(this.instance.id, {
      command: runCommand,
    })

    return response.data
  }

  /**
   * Creates a new exec session in the workspace
   * @param {string} sessionId - Unique identifier for the session
   * @returns {Promise<ExecuteResponse>} Code execution results
   */
  public async createSession(sessionId: string): Promise<void> {
    await this.toolboxApi.createSession(this.instance.id, {
      sessionId,
    })
  }

  /**
   * Executes a command in the session
   * @param {string} sessionId - Unique identifier for the session
   * @param {SessionExecuteRequest} req - Command to execute and async flag
   * @returns {Promise<SessionExecuteResponse>} Command execution results
   */
  public async executeSession(sessionId: string, req: SessionExecuteRequest): Promise<SessionExecuteResponse> {
    const response = await this.toolboxApi.executeSessionCommand(this.instance.id, sessionId, req)
    return response.data
  }

  /**
   * Gets the logs for a command in the session
   * @param {string} sessionId - Unique identifier for the session
   * @param {string} commandId - Unique identifier for the command
   * @returns {Promise<string>} Command logs
   */
  public async getExecuteSessionCommandLogs(sessionId: string, commandId: string): Promise<string> {
    const response = await this.toolboxApi.getSessionCommandLogs(this.instance.id, sessionId, commandId)
    return response.data
  }

  /**
   * Lists all sessions in the workspace
   * @returns {Promise<Session[]>} List of sessions
   */
  public async listSessions(): Promise<Session[]> {
    const response = await this.toolboxApi.listSessions(this.instance.id)
    return response.data
  }

  /**
   * Deletes a session in the workspace
   * @param {string} sessionId - Unique identifier for the session
   */
  public async deleteSession(sessionId: string): Promise<void> {
    await this.toolboxApi.deleteSession(this.instance.id, sessionId)
  }
}
