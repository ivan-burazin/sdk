from typing import List, Dict, Literal
from api_client import (
    CompletionList,
    LspSymbol,
    Workspace as WorkspaceInstance,
    WorkspaceToolboxApi,
)

LspLanguageId = Literal["typescript"]


class Position:
    def __init__(self, line: int, character: int):
        self.line = line
        self.character = character


class LspServer:
    def __init__(
        self,
        language_id: LspLanguageId,
        path_to_project: str,
        toolbox_api: WorkspaceToolboxApi,
        instance: WorkspaceInstance,
    ):
        self.language_id = language_id
        self.path_to_project = path_to_project
        self.toolbox_api = toolbox_api
        self.instance = instance

    def start(self) -> None:
        self.toolbox_api.lsp_start(
            workspace_id=self.instance.id,
            project_id="main",
            params={
                "language_id": self.language_id,
                "path_to_project": self.path_to_project,
            },
        )

    def stop(self) -> None:
        self.toolbox_api.lsp_stop(
            workspace_id=self.instance.id,
            project_id="main",
            params={
                "language_id": self.language_id,
                "path_to_project": self.path_to_project,
            },
        )

    def did_open(self, path: str) -> None:
        self.toolbox_api.lsp_did_open(
            workspace_id=self.instance.id,
            project_id="main",
            params={
                "language_id": self.language_id,
                "path_to_project": self.path_to_project,
                "uri": f"file://{path}",
            },
        )

    def did_close(self, path: str) -> None:
        self.toolbox_api.lsp_did_close(
            workspace_id=self.instance.id,
            project_id="main",
            params={
                "language_id": self.language_id,
                "path_to_project": self.path_to_project,
                "uri": f"file://{path}",
            },
        )

    def document_symbols(self, path: str) -> List[LspSymbol]:
        return self.toolbox_api.lsp_document_symbols(
            workspace_id=self.instance.id,
            project_id="main",
            language_id=self.language_id,
            path_to_project=self.path_to_project,
            uri=f"file://{path}",
        )

    def workspace_symbols(self, query: str) -> List[LspSymbol]:
        return self.toolbox_api.lsp_workspace_symbols(
            workspace_id=self.instance.id,
            project_id="main",
            language_id=self.language_id,
            path_to_project=self.path_to_project,
            query=query,
        )

    def completions(self, path: str, position: Position) -> CompletionList:
        return self.toolbox_api.lsp_completions(
            workspace_id=self.instance.id,
            project_id="main",
            params={
                "language_id": self.language_id,
                "path_to_project": self.path_to_project,
                "uri": f"file://{path}",
                "position": position,
            },
        )
