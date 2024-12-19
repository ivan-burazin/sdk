import { Daytona } from '@daytona/sdk'

async function main() {
  const daytona = new Daytona()

  //  first, create a workspace
  const workspace = await daytona.create({
    language: 'python',
  })

  try {
    //  now, run some code
    const result = await workspace.process.codeRun(
      'print("Hello World! " + str(3 + 4))',
    )
    if (result.code !== 0) {
      console.error('Error running code:', result.code)
    } else {
      console.log(result.result)
    }
  } catch (error) {
    console.error('Error creating workspace:', error)
  } finally {
    //  cleanup
    await daytona.remove(workspace)
  }
}

main()
