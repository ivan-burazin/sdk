import { Daytona } from '@daytona/sdk'

async function main() {
  const daytona = new Daytona()

  //  first, create a workspace
  const workspace = await daytona.create({
    language: 'python',
  })

  try {
    //  simple code run
    const codeResult = await workspace.process.codeRun(
      'print("Hello World! " + str(3 + 4))',
    )
    if (codeResult.exitCode !== 0) {
      console.error('Error running code:', codeResult.exitCode)
    } else {
      console.log(codeResult.result)
    }

    //  simple command run
    const cmdResult = await workspace.process.processExecuteCommand(
      'echo "Hello World from CMD!"',
    )
    if (cmdResult.exitCode !== 0) {
      console.error('Error running code:', cmdResult.exitCode)
    } else {
      console.log(cmdResult.result)
    }

    //  exec session
    //  session allows for multiple commands to be executed in the same context
    await workspace.process.createSession('session-1')
    //  here we set an environment variable
    await workspace.process.executeSession('session-1', {
      command: 'export FOO=BAR',
    })
    //  here we echo the environment variable
    const response = await workspace.process.executeSession('session-1', {
      command: 'echo $FOO',
    })
    console.log(`FOO=${response.output}`)
    //  we can also get the logs for the command any time after it is executed
    const logs = await workspace.process.getExecuteSessionCommandLogs('session-1', response.cmdId!)
    console.log('logs for command: ',logs)

    //  we can also delete the session
    await workspace.process.deleteSession('session-1')
  } catch (error) {
    console.error('Error creating workspace:', error)
  } finally {
    //  cleanup
    await daytona.remove(workspace)
  }
}

main()
