---
title: Announcing AniMathIO 2.0
slug: launching-v2.0.0
tags: [release, v2.0.0, rust, plugins, migration]
authors: MemerGamer
draft: true
---

<!-- DRAFT: unpublished until the maintainer approves the 2.0 release. `draft: true` keeps it out of production builds. Remove that line to publish. -->

AniMathIO 2.0 is a from-scratch rewrite of the editor in Rust. It is a native desktop app with a small video-editor core, and everything math-specific lives in sandboxed WebAssembly plugins.

<!-- truncate -->

## What 2.0 is

- **A simple video editor at the core:** media clips, a multi-track timeline, transforms and keyframes, audio, preview and export.
- **Plugins for everything else:** text, LaTeX, graphs, shapes, effects, animation presets, audio effects, the Manim importer and the v1 importer are WebAssembly components that run in a sandbox with memory, time and file limits.
- **One render function:** preview, export and tests share the same deterministic renderer, so an exported frame matches what you saw.
- **Every edit is a command:** each change is a serializable, invertible command. Undo and redo, the command line, the local control protocol and the MCP server all go through it.
- **Installers for Windows, macOS and Linux:** see the [install page](/docs/v2/install).

## Why the rewrite

TODO(maintainer): a few factual sentences on why the Electron app was replaced (startup and preview performance, memory use, a plugin boundary instead of a monolith, headless rendering). Keep it to what can be shown.

## Highlights

- Math objects as clips: LaTeX with a live preview and a Write-on reveal, plots, vectors, polygons and grids. See [math objects](/docs/v2/math-objects).
- Local automatic subtitles with styled and word-highlight captions, SRT and WebVTT import and export, plus silence and scene-cut detection, auto reframe, beat markers and auto ducking. See [captions and automation](/docs/v2/captions-and-automation).
- A Premiere-style keymap. See [keyboard shortcuts](/docs/v2/keyboard-shortcuts).
- `animathio-cli` for headless rendering and the same tools through [MCP](/docs/v2/mcp).
- A documented [plugin API](/docs/v2/plugins).

## Benchmarks

TODO(benchmarks): numbers for 1.x versus 2.0 (startup, preview frame rate, export time, memory). Fill from `docs/benchmarks.md` in the main repository, and state the hardware and method.

## Showcase

TODO(videos): embed the three showcase explainers once the video files are published.

## Migrating from 1.x

Import a 1.x project with `animathio-cli import-v1 project.animathio -o imported.amio`, or through the Manim importer for Manim scenes. The import is one-way and has known gaps, for example graphs arrive as images. Read [migrating from 1.x](/docs/v2/migrating-from-v1) before moving a project, and keep your originals. The 1.x documentation stays available under [v1 (legacy)](/docs/getting-started), and the 1.x changelogs are linked from the earlier release posts.

## Get it

Download 2.0.0 from the [GitHub release](https://github.com/AniMathIO/AniMathIO/releases/tag/v2.0.0). The Windows and macOS installers are unsigned for now; the install page explains the warnings you will see.
