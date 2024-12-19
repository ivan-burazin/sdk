from typing import Optional
from api_client import (
    Workspace as WorkspaceInstance,
    WorkspaceToolboxApi,
    ExecuteResponse,
)
from .code_toolbox.workspace_python_code_toolbox import WorkspaceCodeToolbox


class Process:
    def __init__(
        self,
        code_toolbox: WorkspaceCodeToolbox,
        toolbox_api: WorkspaceToolboxApi,
        instance: WorkspaceInstance,
    ):
        self.code_toolbox = code_toolbox
        self.toolbox_api = toolbox_api
        self.instance = instance

    def exec(self, command: str, cwd: Optional[str] = None) -> ExecuteResponse:
        return self.toolbox_api.process_execute_command(
            workspace_id=self.instance.id,
            project_id="main",
            params={"command": command, "cwd": cwd},
        )

    def code_run(self, code: str) -> ExecuteResponse:
        """Execute code in the workspace using the appropriate runner for the language"""
        command = self.code_toolbox.get_run_command(code)
        return self.exec(command)
