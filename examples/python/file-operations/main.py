import os
from daytona_sdk import Daytona, CreateWorkspaceParams

daytona = Daytona()
params = CreateWorkspaceParams(
  language="python",
)

# First, create a workspace
workspace = daytona.create(params)

# Get workspace root directory
root_dir = workspace.get_workspace_root_dir()

# List files in the workspace
files = workspace.fs.list_files(root_dir)
print("Files:", files)

# Create a new directory in the workspace
new_dir = os.path.join(root_dir, "new-dir")
workspace.fs.create_folder(new_dir, "755")

file_path = os.path.join(new_dir, "data.txt")

# Add a new file to the workspace
file_content = b"Hello, World!"
workspace.fs.upload_file(file_path, file_content)

# Search for the file we just added
matches = workspace.fs.find_files(root_dir, "World!")
print("Matches:", matches)

# Replace the contents of the file
workspace.fs.replace_in_files([file_path], "Hello, World!", "Goodbye, World!")

# Read the file
downloaded_file = workspace.fs.download_file(file_path)
print("File content:", downloaded_file.decode("utf-8"))

# Change the file permissions
workspace.fs.set_file_permissions(file_path, mode="777")

# Get file info
file_info = workspace.fs.get_file_info(file_path)
print("File info:", file_info)  # Should show the new permissions

# Move the file to the new location
new_file_path = os.path.join(root_dir, "moved-data.txt")
workspace.fs.move_files(file_path, new_file_path)

# Find the file in the new location
search_results = workspace.fs.search_files(root_dir, "moved-data.txt")
print("Search results:", search_results)

# Delete the file
workspace.fs.delete_file(new_file_path)

# daytona.remove(workspace)
