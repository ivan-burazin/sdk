from daytona_sdk import Daytona, CreateWorkspaceParams

daytona = Daytona()

params = CreateWorkspaceParams(language="python")
workspace = daytona.create()

response = workspace.process.code_run('print("Sum of 3 and 4 is " + str(3 + 4))')
if response.code != 0:
    print(f"Error: {response.code} {response.result}")
else:
    print(response.result)

daytona.remove(workspace)
