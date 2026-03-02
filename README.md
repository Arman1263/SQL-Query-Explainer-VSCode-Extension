# 🚀 SQL Query Explainer — VS Code Extension

AI-powered VS Code extension that converts selected SQL queries into clear, plain-English explanations directly inside your editor.

---

## 📌 Overview

**SQL Query Explainer** helps developers and data learners quickly understand what a SQL query is doing without manually breaking down complex logic.

Instead of guessing what a query does, just:

> Select SQL → Right-click → Explain → Done.

---

## ✨ Features

* 🖱️ Right-click SQL explanation
* ⚡ Fast plain-English output
* 🤖 Powered by OpenRouter LLM
* 🧩 Lightweight VS Code integration
* 🔑 User-configurable API key
* 📦 Installable via VSIX
* 🎯 Beginner-friendly MVP

---

## 🧠 Why This Exists

Many beginners can write SQL but struggle to **interpret complex queries**, especially with:

* Multiple JOINs
* Nested conditions
* Aggregations
* Complex WHERE clauses

This extension removes that friction by providing instant explanations inside VS Code.

---

## 🏗️ Tech Stack

* TypeScript
* Node.js
* VS Code Extension API
* OpenRouter API
* OpenAI-compatible SDK
* esbuild

---

## 📦 Installation

### 🔹 Option 1 — Install from VSIX (Recommended)

1. Download the latest `.vsix` from **Releases**
2. Open VS Code
3. Go to **Extensions**
4. Click **⋯ → Install from VSIX**
5. Select the downloaded file
6. Reload VS Code if prompted

---

## 🔑 Required Setup (Important)

After installation, you **must** add your OpenRouter API key.

### Steps

1. Open VS Code **Settings**
2. Search:

```
SQL Explainer
```

3. Find:

```
OpenRouter API Key
```

4. Paste your key
5. Reload VS Code (recommended)

---

## ▶️ How to Use

1. Open any `.sql` file
2. Select a SQL query
3. Right-click
4. Click **Explain SQL Query**
5. View explanation in the Output panel

---

## 🧪 Example

### Input SQL

```sql
SELECT name, COUNT(*)
FROM orders
WHERE status = 'completed'
GROUP BY name;
```

### Output

> This query retrieves each customer's name and counts how many completed orders they have…

---

## ⚠️ Requirements

* Valid OpenRouter API key
* Internet connection
* VS Code 1.104+

---

## 🐞 Known Limitations (MVP)

* No SQL validation
* Basic formatting
* No loading indicator
* No caching
* Depends on API availability

---

## 🔮 Roadmap

Planned improvements:

* Better formatted explanations
* SQL syntax detection
* Loading spinner
* Copy-to-clipboard
* Marketplace publishing
* Multi-model support

---

## 🛠️ Development

### Clone repo

```bash
git clone https://github.com/Arman1263/SQL-Query-Explainer-VSCode-Extension.git
cd sql-explainer
```

### Install dependencies

```bash
npm install
```

### Build extension

```bash
npm run package
```

### Run in dev mode

Press **F5** inside VS Code.

---

## 📤 Packaging

To generate VSIX:

```bash
vsce package
```

---

## 🧑‍💻 Author

**Arman Amir Shikalgar**
B.Tech — Artificial Intelligence & Data Science

---

## ⭐ Support

If this project helped you:

* ⭐ Star the repo
* 🐛 Report issues
* 💡 Suggest improvements

---

**Built to make SQL understanding faster and easier.**
