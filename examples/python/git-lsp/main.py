from daytona_sdk import Daytona
import os


def main():
    daytona = Daytona()

    workspace = daytona.create()

    try:
        root_dir = workspace.get_workspace_root_dir()
        project_dir = os.path.join(root_dir, "learn-typescript")

        # Clone the repository
        workspace.git.clone(
            "https://github.com/panaverse/learn-typescript", project_dir, "master"
        )

        # Search for the file we want to work on
        matches = workspace.fs.find_files(project_dir, "var obj1 = new Base();")
        print("Matches:", matches)

        # Start the language server
        lsp = workspace.create_lsp_server("typescript", project_dir)
        lsp.start()

        # Notify the language server of the document we want to work on
        lsp.did_open(matches[0].file)

        # Get symbols in the document
        symbols = lsp.document_symbols(matches[0].file)
        print("Symbols:", symbols)

        # Fix the error in the document
        workspace.fs.replace_in_files(
            [matches[0].file], "var obj1 = new Base();", "var obj1 = new E();"
        )

        # Notify the language server of the document change
        lsp.did_close(matches[0].file)
        lsp.did_open(matches[0].file)

        # Get completions at a specific position
        completions = lsp.completions(matches[0].file, {"line": 12, "character": 18})
        print("Completions:", completions)

    except Exception as error:
        print("Error creating workspace:", error)
    finally:
        # Cleanup
        daytona.remove(workspace)


if __name__ == "__main__":
    main()
