---
title: Announcing AniMathIO v1.7.0 – Manim Import, a New Canvas Engine & Drag-and-Drop 🎉
slug: launching-v1.7.0
tags: [release, v1.7.0, manim, konva, drag-and-drop, audio, performance]
hide_table_of_contents: false
authors: MemerGamer
---

AniMathIO v1.7.0 is here, and it's the biggest release we've shipped. The headline feature is the **Manim → AniMathIO translation layer**: bring your existing Manim scenes straight into AniMathIO and keep editing them visually. Underneath that, we've replaced the entire canvas rendering engine and closed out every bug on our known-issues list.

<!-- truncate -->

## What's New in v1.7.0

### Manim Import

If you already write [Manim Community](https://www.manim.community/) scenes, you can now bring them into AniMathIO directly. Paste a script or load a `.py` file from the new **Manim Import** panel, and AniMathIO rebuilds it as ordinary timeline elements you can move, restyle and retime.

It supports a practical subset of Manim — `Text`, `Tex`, `MathTex`, `Circle`, `Rectangle`, `ImageMobject`, and animations like `Create`, `Write`, `FadeIn` and `FadeOut` — and reports warnings for anything it can't translate rather than failing the whole import. Mathematical expressions are typeset properly with KaTeX rather than left as raw LaTeX source.

This is a translation, not an emulation: AniMathIO doesn't run Python, so there's nothing extra to install.

See [Importing Manim Scenes](/docs/tutorial-advanced/importing-manim-scenes) for the full guide.

### A New Canvas Engine

We've migrated canvas rendering from fabric.js to [Konva](https://konvajs.org/). This is mostly invisible by design, but it's the foundation the rest of this release builds on — and it brought back snapping guides, which now appear as you drag an element near another element's edge or centre, or near the canvas centre.

### Drag and Drop

- **Drop files straight from your file manager** onto the app — images, video and audio are routed to the right panel automatically
- **Drag resources from the panel onto the canvas**, and they land where you dropped them
- **Elements stay inside the canvas** while you drag them, instead of wandering off the edge

### Audio and Video Fixes

Audio got a thorough pass this release:

- Audio clips now respect their position on the timeline. Previously every clip started from the beginning, so multiple clips played over each other
- Preview audio no longer goes silent after your first export
- Video clips that start partway through the timeline now play correctly during playback
- Clips start and stop cleanly at their boundaries instead of running slightly past them

### Everything Else on the Known-Issues List

All four items from our long-standing known bugs issue are now closed: audio and video elements are fully draggable and editable, the audio bugs above are fixed, and the visual glitches when changing canvas aspect ratio with existing content are resolved.

Along the way we also fixed the canvas going blank after playback reached the end, keyboard shortcuts firing while you were browsing the dashboard, and exports that could fail silently or hand you a corrupt file.

### Under the Hood

- **Node.js 26** and a full dependency refresh, including Electron 44 and React 19.2
- **State management refactor**: the monolithic state class is now ten focused stores, which makes the codebase much easier to contribute to
- **Test coverage roughly doubled**, to 277 unit tests and 111 browser tests

## v1.7.1

Shortly after v1.7.0 we published **v1.7.1**, which restores the Flatpak build. A change in how the Linux executable was named broke Flatpak packaging in v1.7.0 — if you're a Flatpak user, grab v1.7.1.

## Getting Started

1. [Download AniMathIO](https://animathio.com)
2. Browse the [documentation](https://docs.animathio.com)
3. Join our [Discord community](https://discord.com/invite/cZMTYSAHRX)

## What's Coming Next

- **Bundling the video export toolchain** so exporting works fully offline
- **Deeper audio editing**, beyond the background-music workflow we support today
- **Continued Manim coverage**, expanding the set of constructs the importer understands

## Thank You

Thank you to everyone who reported issues and stuck with us through this one — the known-issues list that this release finally clears had been open a long time.

For the complete list of changes, see the [full changelog](https://github.com/AniMathIO/AniMathIO/blob/main/CHANGELOG.md).

Happy animating! 🎨✨
