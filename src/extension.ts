import * as vscode from "vscode";
import OpenAI from "openai";

export function activate(context: vscode.ExtensionContext) {
  const disposable = vscode.commands.registerCommand(
    "sql-explainer.explainSQL",
    async () => {
      // 🔹 Get selected text
      const editor = vscode.window.activeTextEditor;
      if (!editor) {
        vscode.window.showErrorMessage("No active editor found.");
        return;
      }

      const selection = editor.selection;
      const selectedText = editor.document.getText(selection);

      if (!selectedText) {
        vscode.window.showWarningMessage("Please select a SQL query.");
        return;
      }

      // 🔹 Read API key from VS Code settings
      const config = vscode.workspace.getConfiguration("sqlExplainer");
      const apiKey = config.get<string>("openrouterApiKey");

      if (!apiKey) {
        vscode.window.showErrorMessage(
          "OpenRouter API key not set. Go to Settings → search 'SQL Explainer' and add your key."
        );
        return;
      }

      // 🔹 Create OpenRouter client
      const client = new OpenAI({
        apiKey,
        baseURL: "https://openrouter.ai/api/v1",
      });

      // 🔹 Show loading
      const output = vscode.window.createOutputChannel("SQL Explainer");
      output.clear();
      output.appendLine("Analyzing SQL query...\n");
      output.show(true);

      try {
        const response = await client.responses.create({
          model: "meta-llama/llama-3.1-8b-instruct",
          input: `Explain this SQL query in simple plain English:\n\n${selectedText}`,
        });

        const explanation =
          response.output_text || "No explanation generated.";

        output.clear();
        output.appendLine("=== SQL Explanation ===\n");
        output.appendLine(explanation);
      } catch (error: any) {
        console.error("OPENROUTER ERROR:", error);

        vscode.window.showErrorMessage(
          "Failed to generate explanation. Check your API key and internet connection."
        );
      }
    }
  );

  context.subscriptions.push(disposable);
}

export function deactivate() {}