from daytona_sdk import Daytona, CreateWorkspaceParams, SessionExecuteRequest
import time
import json
import base64

daytona = Daytona()
params = CreateWorkspaceParams(
    # id="test-t14233",
    language="python",
    # image="daytona/ai-example:1",
    env_vars={
        "PORT": "3000",
        "LOG_LEVEL": "debug",
    },
)
workspace = daytona.create(params)
print(workspace.id)

# Run the code securely inside the workspace
response = workspace.process.code_run('print("Hello World!")')
if response.exit_code != 0:
    print(f"Error: {response.exit_code} {response.result}")
else:
    print(response.result)

response = workspace.process.exec('echo "Hello World from exec!"', cwd="/home/daytona", timeout=10)
if response.exit_code != 0:
    print(f"Error: {response.exit_code} {response.result}")
else:
    print(response.result)

exec_session_id = "exec-session-1"
workspace.process.create_session(exec_session_id)

sessions = workspace.process.list_sessions()
print(sessions)

# Iterate through sessions and print session IDs
for session in sessions:
    print(f"Session ID: {session.session_id}")

execCommand1 = workspace.process.execute_session(exec_session_id, SessionExecuteRequest(
    command="export FOO=BAR"
))
if execCommand1.exit_code != 0:
    print(f"Error: {execCommand1.exit_code} {execCommand1.output}")

execCommand2 = workspace.process.execute_session(exec_session_id, SessionExecuteRequest(
    command="echo $FOO"
))
if execCommand2.exit_code != 0:
    print(f"Error: {execCommand2.exit_code} {execCommand2.output}")
else:
    print(execCommand2.output)

print("Now getting logs for the second command")
logs = workspace.process.get_execute_session_command_logs(exec_session_id, execCommand2.cmd_id)
print(logs)

workspace.process.delete_session(exec_session_id)

daytona.remove(workspace)
