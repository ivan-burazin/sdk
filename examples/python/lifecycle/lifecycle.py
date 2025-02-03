from daytona_sdk import Daytona
from pprint import pprint

daytona = Daytona()

print("Creating workspace")
workspace = daytona.create()
print("Workspace created")

workspace.set_labels({
    "public": True,
})

print("Stopping workspace")
daytona.stop(workspace)
print("Workspace stopped")

print("Starting workspace")
daytona.start(workspace)
print("Workspace started")

print("Getting existing workspace")
existing_workspace = daytona.get_current_workspace(workspace.id)
print("Get existing workspace")

response = existing_workspace.process.exec('echo "Hello World from exec!"', cwd="/home/daytona", timeout=10)
if response.exit_code != 0:
    print(f"Error: {response.exit_code} {response.result}")
else:
    print(response.result)

workspaces = daytona.list()
print("Total workspaces count:" , len(workspaces))
pprint(vars(workspaces[0].info()))  # This will show all attributes of the first workspace

print("Removing workspace")
daytona.remove(workspace)
print("Workspace removed")
