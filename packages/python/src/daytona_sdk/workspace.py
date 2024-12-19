import asyncio
from .filesystem import FileSystem
from .git import Git
from .process import Process
from .lsp_server import LspServer, LspLanguageId
from api_client import Workspace as WorkspaceInstance, WorkspaceToolboxApi
from .code_toolbox.workspace_python_code_toolbox import WorkspaceCodeToolbox


class Workspace:
    def __init__(
        self,
        id: str,
        instance: WorkspaceInstance,
        toolbox_api: WorkspaceToolboxApi,
        code_toolbox: WorkspaceCodeToolbox,
    ):
        self.id = id
        self.instance = instance
        self.toolbox_api = toolbox_api
        self.code_toolbox = code_toolbox

        # Initialize components
        self.fs = FileSystem(instance, self.toolbox_api)
        self.git = Git(self, self.toolbox_api, instance)
        self.process = Process(self.code_toolbox, self.toolbox_api, instance)

    def get_workspace_root_dir(self) -> str:
        response = self.toolbox_api.get_project_dir(
            workspace_id=self.instance.id, project_id="main"
        )
        return response.dir

    def create_lsp_server(
        self, language_id: LspLanguageId, path_to_project: str
    ) -> LspServer:
        return LspServer(language_id, path_to_project, self.toolbox_api, self.instance)
