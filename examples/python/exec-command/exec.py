from daytona_sdk import Daytona, CreateWorkspaceParams

daytona = Daytona()

params = CreateWorkspaceParams(
    language="python",
)
workspace = daytona.create(params)

# Run the code securely inside the workspace
response = workspace.process.code_run('print("Hello World!")')
if response.exit_code != 0:
    print(f"Error: {response.exit_code} {response.result}")
else:
    print(response.result)

# Execute an os command in the workspace
response = workspace.process.exec('echo "Hello World from exec!"', cwd="/home/daytona", timeout=10)
if response.exit_code != 0:
    print(f"Error: {response.exit_code} {response.result}")
else:
    print(response.result)

daytona.remove(workspace)
