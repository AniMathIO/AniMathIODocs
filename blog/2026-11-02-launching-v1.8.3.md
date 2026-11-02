---
title: AniMathIO v1.8.3 – Export and Text Sizing Fixes
slug: launching-v1.8.3
tags: [release, v1.8.3]
authors: MemerGamer
---

AniMathIO v1.8.3 is a bug-fix release. It fixes exported videos showing selection handles, makes new text boxes fit their content, and corrects the version reported by the MCP server.

<!-- truncate -->

## Fixes

- **Selection handles in exports.** Exported videos no longer show the selection handles (the Konva transformer) around the selected element. This applies to exports started from the editor and from the MCP `export_video` tool.
- **Text boxes fit their content.** Text added from the editor or through the MCP `add_text` tool now gets a box sized to its text, so words no longer wrap mid-word in a fixed 100x100 box.
- **MCP server version.** The MCP server now reports the app's real version.

## Dependencies

- Updated glob to 14.0.3 and moved minimatch to 11.0.4 where compatible, which addresses two security advisories.
- Some older minimatch 3.x and 5.x copies used by development and build tools have no patched release, so `npm audit` still reports them until those tools update.

## Get the update

Download AniMathIO from [animathio.com](https://animathio.com) or read the [release notes on GitHub](https://github.com/AniMathIO/AniMathIO/releases/tag/animathio-v1.8.3). Downloads are available as AppImage, deb, snap, flatpak, and a Windows installer. See the [full changelog](https://github.com/AniMathIO/AniMathIO/compare/animathio-v1.8.2...animathio-v1.8.3) for every change since v1.8.2.
