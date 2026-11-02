---
title: AniMathIO v1.8.1 – Security and Build Fixes
slug: launching-v1.8.1
tags: [release, v1.8.1]
authors: MemerGamer
---

AniMathIO v1.8.1 is a patch release with a security update and a fix for the ffmpeg loader used by video export. It adds no new features.

<!-- truncate -->

## Bug fixes

- Updated Next.js to 16.4.4, which includes a security fix, and fixed the ffmpeg worker build.
- Stripped the ffmpeg dynamic worker URL so Turbopack builds the ffmpeg.wasm loader correctly. Video export depends on this loader.

## Dependencies

This release also updates Electron, Vitest, and several transitive dependencies that had security patches available. Dependabot is now configured to keep Nextron on 9.x.

## Get the update

Download AniMathIO from [animathio.com](https://animathio.com) or read the [release notes on GitHub](https://github.com/AniMathIO/AniMathIO/releases/tag/animathio-v1.8.1). See the [full changelog](https://github.com/AniMathIO/AniMathIO/compare/animathio-v1.8.0...animathio-v1.8.1) for every change since v1.8.0.
