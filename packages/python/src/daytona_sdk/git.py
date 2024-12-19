from typing import List, Optional, TYPE_CHECKING
from api_client import (
    GitStatus,
    ListBranchResponse,
    Match,
    Workspace as WorkspaceInstance,
    WorkspaceToolboxApi,
)

if TYPE_CHECKING:
    from .workspace import Workspace


class Git:
    def __init__(
        self,
        workspace: "Workspace",
        toolbox_api: WorkspaceToolboxApi,
        instance: WorkspaceInstance,
    ):
        self.workspace = workspace
        self.toolbox_api = toolbox_api
        self.instance = instance

    def add(self, path: str, files: List[str]) -> None:
        self.toolbox_api.git_add_files(
            workspace_id=self.instance.id,
            project_id="main",  # todo: remove this after project refactor
            params={"path": path, "files": files},
        )

    def branches(self, path: str) -> ListBranchResponse:
        return self.toolbox_api.git_branch_list(
            workspace_id=self.instance.id,
            project_id="main",  # todo: remove this after project refactor
            path=path,
        )

    def clone(
        self,
        url: str,
        path: str,
        branch: Optional[str] = None,
        commit_id: Optional[str] = None,
        username: Optional[str] = None,
        password: Optional[str] = None,
    ) -> None:
        self.toolbox_api.git_clone_repository(
            workspace_id=self.instance.id,
            project_id="main",  # todo: remove this after project refactor
            params={
                "url": url,
                "branch": branch,
                "path": path,
                "username": username,
                "password": password,
                "commitId": commit_id,
            },
        )

    def commit(self, path: str, message: str, author: str, email: str) -> None:
        self.toolbox_api.git_commit_changes(
            workspace_id=self.instance.id,
            project_id="main",  # todo: remove this after project refactor
            params={"path": path, "message": message, "author": author, "email": email},
        )

    def push(
        self, path: str, username: Optional[str] = None, password: Optional[str] = None
    ) -> None:
        self.toolbox_api.git_push_changes(
            workspace_id=self.instance.id,
            project_id="main",  # todo: remove this after project refactor
            params={"path": path, "username": username, "password": password},
        )

    def pull(
        self, path: str, username: Optional[str] = None, password: Optional[str] = None
    ) -> None:
        self.toolbox_api.git_pull_changes(
            workspace_id=self.instance.id,
            project_id="main",  # todo: remove this after project refactor
            params={"path": path, "username": username, "password": password},
        )

    def status(self, path: str) -> GitStatus:
        return self.toolbox_api.git_git_status(
            workspace_id=self.instance.id,
            project_id="main",  # todo: remove this after project refactor
            path=path,
        )
