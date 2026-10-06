---
title: AniMathIO v1.8.0 – AI Agents in Your Editor
slug: launching-v1.8.0
tags: [release, v1.8.0, mcp, ai]
authors: MemerGamer
---

AniMathIO v1.8.0 lets AI agents build and edit scenes directly in your open project. Connect an MCP client, describe the scene you want, and watch text, equations, media, and animations appear on the canvas.

<!-- truncate -->

## Connect your agent

This release adds support for localhost HTTP MCP with bearer authentication, which is disabled by default. Enable it in Settings, then configure your MCP client with the endpoint URL and token shown there. Keep AniMathIO and your project open while the agent works.

## Import media and export videos

Version 1.8 includes 13 tools in total, with two new additions:

- **add_media**: This tool accepts an absolute local path and imports images, videos, or audio into the currently open project. When importing video files, audio is also added.
- **export_video**: This tool exports the project as a video file to an absolute destination path (.mp4 or .webm). The optional `format` is inferred from the extension when omitted; when supplied, it must match. It overwrites existing files and requires an existing parent directory. Exporting a 30-second video requires at least 30 seconds of real-time recording plus processing time. MP4 conversion will automatically download the FFmpeg core if needed.

## Keep an editable copy

Use `save_project` separately to save an editable project. Read the [AI agent integration guide](/docs/tutorial-advanced/ai-agent-integration) for client setup, all 13 tools, and examples. Download the release from [GitHub](https://github.com/AniMathIO/AniMathIO/releases/tag/animathio-v1.8.0).

Use a generous client timeout for exports and avoid editing or changing playback while recording. The tool reports recording, conversion, and writing failures instead of reporting a partial file as a successful export.
