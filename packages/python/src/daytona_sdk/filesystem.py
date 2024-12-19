from typing import List, Optional
from api_client import (
    FileInfo,
    Match,
    ReplaceRequest,
    ReplaceResult,
    SearchFilesResponse,
    Workspace as WorkspaceInstance,
    WorkspaceToolboxApi,
)


class FileSystem:
    def __init__(self, instance: WorkspaceInstance, toolbox_api: WorkspaceToolboxApi):
        self.instance = instance
        self.toolbox_api = toolbox_api

    def create_folder(self, path: str, mode: str) -> None:
        self.toolbox_api.fs_create_folder(
            workspace_id=self.instance.id, project_id="main", path=path, mode=mode
        )

    def delete_file(self, path: str) -> None:
        self.toolbox_api.fs_delete_file(
            workspace_id=self.instance.id, project_id="main", path=path
        )

    def download_file(self, path: str) -> bytes:
        return self.toolbox_api.fs_download_file(
            workspace_id=self.instance.id, project_id="main", path=path
        )

    def find_files(self, path: str, pattern: str) -> List[Match]:
        return self.toolbox_api.fs_find_in_files(
            workspace_id=self.instance.id, project_id="main", path=path, pattern=pattern
        )

    def get_file_details(self, path: str) -> FileInfo:
        return self.toolbox_api.fs_get_file_details(
            workspace_id=self.instance.id, project_id="main", path=path
        )

    def list_files(self, path: str) -> List[FileInfo]:
        return self.toolbox_api.fs_list_files(
            workspace_id=self.instance.id, project_id="main", path=path
        )

    def move_files(self, source: str, destination: str) -> None:
        self.toolbox_api.fs_move_file(
            workspace_id=self.instance.id,
            project_id="main",
            source=source,
            destination=destination,
        )

    def replace_in_files(
        self, files: List[str], pattern: str, new_value: str
    ) -> List[ReplaceResult]:
        replace_request = ReplaceRequest(
            files=files, new_value=new_value, pattern=pattern
        )

        return self.toolbox_api.fs_replace_in_files(
            workspace_id=self.instance.id, project_id="main", replace=replace_request
        )

    def search_files(self, path: str, pattern: str) -> SearchFilesResponse:
        return self.toolbox_api.fs_search_files(
            workspace_id=self.instance.id, project_id="main", path=path, pattern=pattern
        )

    def set_file_permissions(
        self, path: str, mode: str = None, owner: str = None, group: str = None
    ) -> None:
        self.toolbox_api.fs_set_file_permissions(
            workspace_id=self.instance.id,
            project_id="main",
            path=path,
            mode=mode,
            owner=owner,
            group=group,
        )

    def upload_file(self, path: str, file: bytes) -> None:
        self.toolbox_api.fs_upload_file(
            workspace_id=self.instance.id, project_id="main", path=path, file=file
        )
