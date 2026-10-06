---
sidebar_position: 4
---

# AI Agent Integration

AniMathIO's MCP server lets an AI agent work directly in your editor. MCP (Model Context Protocol) is an open standard that lets agents call tools. Connect Claude Code, Claude Desktop, or another MCP-capable client to add text and equations, import Manim scripts, and create animations — while you watch the changes appear live on the canvas.

For example, you could ask Claude:

> Build me a 20-second scene explaining the Pythagorean theorem. Introduce the equation step by step, use yellow for the final result, and leave time to read each explanation.

The agent builds the scene in your open project, so you can review it on the canvas and refine it with AniMathIO's usual editing tools.

## Enabling the server

The MCP server runs inside AniMathIO and is **off by default**. You don't need to start a separate server process.

1. Open AniMathIO and open a project.
2. Open **Settings** and enable the MCP server.
3. Get the endpoint URL and auth token from Settings. You'll use both in your MCP client.
4. Keep AniMathIO and the project open while the agent works.

The endpoint has the form `http://127.0.0.1:<port>/mcp`. It requires the token and listens on localhost only: it never listens beyond your own machine.

:::tip Save before large changes
AniMathIO has no undo feature. Save your project before letting an agent make large changes, and ask it to work in small steps so you can review the result as it appears.
:::

## Connecting an MCP client

Use a client that can connect to a localhost **HTTP MCP server** and send the auth token. This is an HTTP endpoint, not a stdio server: the client connects to the running app rather than launching it with a command.

### Example: Claude Code

With Claude Code installed, run this in your terminal, replacing `<port>` and `<token>` with the values from AniMathIO Settings:

```bash
claude mcp add --transport http animathio "http://127.0.0.1:<port>/mcp" \
  --header "Authorization: Bearer <token>"
```

This uses Claude Code's [HTTP MCP configuration](https://code.claude.com/docs/en/mcp#option-1-add-a-remote-http-server). Start Claude Code and ask it to inspect the current AniMathIO project, then describe the scene you want to build. Keep the canvas visible to watch the changes as the agent works.

For Claude Desktop or another client, follow that client's instructions for connecting to a local HTTP MCP endpoint with token authentication. Client support and configuration differ; use the URL and token from Settings rather than a stdio launch configuration.

If the connection fails, check that AniMathIO is running, the server is enabled, and the client has the current endpoint and token. A project must be open for every tool except `get_project_state`; otherwise those tools report an error.

:::tip Keep the token private
A connected agent can read and modify the open project and save files. Keep the token and any configuration containing it private, and only enable the server while you are using it. Disable it in Settings when you're finished.
:::

## What the agent can do

You don't need to call these tools yourself. Describe what you want, and the agent uses them to inspect and edit your project. Coordinates are canvas pixels with the origin at the top-left; all times are in milliseconds.

| Tool | What it does | What it takes |
| --- | --- | --- |
| `get_project_state` | Checks whether a project is open and reads canvas settings, total duration, playhead time, elements, and animations. | No arguments. |
| `add_text` | Adds a text element and returns its ID. | Text; optional font size (default 32), font weight (default 400), x/y position, and color. |
| `add_math` | Renders a LaTeX equation with KaTeX as a `mafs` math element and returns its ID. | LaTeX; optional x/y position and color. |
| `import_manim_scene` | Translates a Manim script into elements and animations, reporting their counts, scene duration, and warnings for unsupported constructs. | The script as text. |
| `add_animation` | Adds a `fadeIn`, `fadeOut`, `slideIn`, `slideOut`, `breathe`, or `mafsReveal` animation and returns its ID. | Target element ID, animation type, and duration; optional direction (`left`, `right`, `top`, or `bottom`) for slide animations only. |
| `update_element` | Changes an element's placement or visibility timing. | Element ID; optional position, width, height, rotation, horizontal/vertical scale, and start/end times. |
| `remove_element` | Removes an element and reports whether it was removed. | Element ID. |
| `set_canvas` | Updates canvas settings and total timeline duration. | Optional width, height, background color, and total duration (`maxTimeMs`). |
| `seek` | Moves the playhead to a specific time. | Time (`timeMs`). |
| `set_playing` | Starts or pauses playback. | `playing`: `true` to play or `false` to pause. |
| `save_project` | Saves the project and reports the saved path. | Optional file path. Without one, saves over the currently open file; reports an error if the project has never been saved. |

Manim import uses the same translation as the [Manim import panel](./importing-manim-scenes.md). Unsupported constructs produce warnings rather than failing the whole import, so review those warnings with the agent before refining the scene.

## What it cannot do yet

The MCP tools cannot import media files or export video yet. Add images, video, and audio through the [normal multimedia UI](./working-with-multimedia.md), and use [Exporting Your Project](../tutorial-basics/exporting-your-project.md) when you're ready to render the finished video.

## Tips for good results

- **Be specific**: Give the agent a duration, the equations and explanatory text you want, colors, layout, and the order in which ideas should appear.
- **Start with a Manim script for a whole scene**: If you can describe the scene as a Manim script, ask the agent to use `import_manim_scene`. This is the fastest route to a complete scene within the supported Manim subset.
- **Inspect before editing**: Ask the agent to read the project state first, especially when adding to an existing scene. Tell it which elements to keep.
- **Review as you go**: Watch the live canvas, ask for changes in small steps, and preview the timing with playback.
- **Save first**: Keep a saved copy before large edits. There is no undo, and asking the agent to save without a new path overwrites the current file.
