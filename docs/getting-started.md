---
title: Getting started
sidebar_label: Getting started
sidebar_position: 1
slug: /
description: "What AniMathIO 2 is, how to install it and how to make your first video."
---

# Getting started with AniMathIO 2

AniMathIO 2 is a native editor for math animation videos, rewritten from scratch in Rust. The core is a
small, reliable video editor: media clips, a multi-track timeline, transforms and keyframes, audio, preview
and export. Everything math-specific (text, LaTeX, graphs, shapes, effects, importers) is a sandboxed
WebAssembly plugin.

![The AniMathIO 2 editor](/img/v2/editor-main.webp)

:::note Coming from 1.x?
The 1.x documentation is still online as [v1 (legacy)](/docs/v1/getting-started). Projects import with
`animathio-cli import-v1`; see [Migrating from 1.x](./migrating-from-v1).
:::

## What changed from 1.x

- **Native, not Electron.** The editor is a GPUI desktop application. Preview renders on the GPU when an
  adapter is available and falls back to a CPU reference renderer, which is also what export uses.
- **Plugins.** Text, shapes, LaTeX, graphs, clip effects, audio effects, animation presets and the Manim
  importer are plugins that run in a sandbox with memory, fuel and time limits. See
  [Plugin authoring](./plugins).
- **Deterministic rendering.** One pure function of the project and a time produces every frame, so preview,
  export and the test suite agree.
- **Automation.** Local subtitles, autocut, scene cuts, auto reframe, beat sync, ducking and denoise. See
  [Captions and automation](./captions-and-automation).
- **Scriptable.** Every edit is a serializable, invertible command, available from the editor, the command
  line ([CLI](./cli)) and MCP clients ([Control protocol and MCP](./mcp)).
- **A new project format.** AniMathIO 2 saves `.amio` archives. 1.x `.animathio` projects import one way.

## Install

Download the installer for your platform from the [latest release](https://github.com/AniMathIO/AniMathIO/releases/latest)
and follow the [install page](./install). Each installer ships the editor (`animathio`), the command line tool
(`animathio-cli`) and the first-party plugins.

## Your first video

1. **Start.** Launch AniMathIO. The start screen offers canvas presets (1080p, 4K, 9:16, square, 4:5),
   templates, recent projects, and Open, Import v1 and Import Manim.
2. **Add media.** Drop files on the Library, or press Ctrl+I. A video with sound adds a linked audio clip.
3. **Add a math object.** Open the **Math** tab in the Library, pick LaTeX, Plot, Vector and so on, edit it in
   the dialog and press Add. See [Math objects](./math-objects).
4. **Edit.** Cut with the blade (C) or Ctrl+K, trim, move, and animate with keyframes or the animation
   presets in the inspector. The default shortcuts follow Premiere Pro; see
   [Keyboard shortcuts](./keyboard-shortcuts).
5. **Export.** Press Export, choose a preset (for example `youtube_1080p` or `shorts_vertical`) and add it to
   the queue. Exports run in the background and never block the editor.

![The start screen with canvas presets and recent projects](/img/v2/editor-start.webp)

## Working from the command line

```bash
animathio-cli new-sample -o sample.amio
animathio-cli render sample.amio --frame 30 -o frame.png
animathio-cli export sample.amio --output sample.mp4
```

The [CLI reference](./cli) lists every subcommand.

## Where to go next

- [The editor](./editor): panels, timeline, viewer, inspector and export.
- [Math objects](./math-objects) and [Captions and automation](./captions-and-automation).
- [Plugin authoring](./plugins), [CLI](./cli) and [MCP](./mcp) if you want to extend or script AniMathIO.
