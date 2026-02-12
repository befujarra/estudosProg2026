# Antigravity: n8n Workflow Automation

This document serves as the central guide for creating high-quality n8n workflows using the n8n MCP Server and n8n Skills.

## 🎯 Purpose
To design, build, and validate n8n workflows with maximum accuracy and efficiency, leveraging AI-powered tools and skills.

## 🛠️ Resources
- **n8n MCP Server**: [https://github.com/czlonkowski/n8n-mcp](https://github.com/czlonkowski/n8n-mcp)
- **n8n Skills**: [https://github.com/czlonkowski/n8n-skills](https://github.com/czlonkowski/n8n-skills)

---

## 🤖 n8n MCP Server
The n8n MCP server bridges n8n with AI, providing structured access to nodes, templates, and validation tools.

### Key Tools available:
- **`tools_documentation`**: Get documentation for any MCP tool.
- **`search_nodes`**: Search for n8n nodes (core & community).
- **`get_node`**: Get detailed node specs, properties, and docs.
- **`validate_node`**: Validate node configurations (modes: minimal, full).
- **`validate_workflow`**: Complete workflow validation.
- **`search_templates`**: Search the n8n template library.
- **`get_template`**: Get workflow JSON from templates.

### Setup Instructions
(Assuming n8n is running at `http://localhost:5678`)

1.  **Install n8n-mcp**:
    ```bash
    npm install -g n8n-mcp
    ```
2.  **Configure MCP**:
    Add the following to your `mcp_config.json` (typically in `C:\Users\<USER>\.gemini\antigravity\mcp_config.json`):
    ```json
    {
      "mcpServers": {
        "n8n-mcp": {
          "command": "node",
          "args": [
            "C:\\Users\\<USER>\\AppData\\Roaming\\npm\\node_modules\\n8n-mcp\\dist\\mcp\\index.js"
          ],
          "env": {
            "MCP_MODE": "stdio",
            "LOG_LEVEL": "error",
            "DISABLE_CONSOLE_OUTPUT": "true",
            "N8N_API_URL": "http://localhost:5678",
            "N8N_BASE_URL": "http://localhost:5678",
            "N8N_API_KEY": ""
          }
        }
      }
    }
    ```

---

## 🧠 n8n Skills
These skills activate automatically based on the context of the request to provide expert guidance.

| Skill | Activates When... |
| :--- | :--- |
| **n8n Expression Syntax** | Writing expressions, debugging variables (`$json`, `$node`). |
| **n8n MCP Tools Expert** | Searching nodes, accessing templates, validating configs. |
| **n8n Workflow Patterns** | Designing new workflows, connecting nodes. |
| **n8n Validation Expert** | Debugging errors, interpreting validation failures. |
| **n8n Node Configuration** | Configuring node properties, setting up AI workflows. |
| **n8n Code JavaScript** | Writing JS in Code nodes. |
| **n8n Code Python** | Writing Python in Code nodes. |

---

## 📋 Workflow Creation Guidelines

### Core Principles
1.  **Templates First**: Always check `search_templates` before building from scratch.
2.  **Explicit Configuration**: Never trust default parameter values. Explicitly set all parameters.
3.  **Multi-Level Validation**: Use `validate_node(minimal)` -> `validate_node(full)` -> `validate_workflow`.
4.  **Parallel Execution**: Run independent searches and validations in parallel.

### Workflow Process
1.  **Discovery**:
    - Use `search_templates` to find starting points.
    - Use `search_nodes` to find specific integrations.
2.  **Configuration**:
    - Use `get_node` to understand required parameters.
3.  **Building**:
    - Build from validated configurations.
    - **Note on Attribution**: When using a template, always include: "Based on template by [author]".
4.  **Validation**:
    - Run `validate_workflow` before considering the task complete.
