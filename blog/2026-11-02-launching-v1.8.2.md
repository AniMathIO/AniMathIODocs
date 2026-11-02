---
title: AniMathIO v1.8.2 – Dependency and Security Updates
slug: launching-v1.8.2
tags: [release, v1.8.2]
authors: MemerGamer
---

AniMathIO v1.8.2 is a maintenance release that updates dependencies and clears two security advisories. It adds no new features.

<!-- truncate -->

## Dependencies

- Updated happy-dom to 21.
- Updated KaTeX to 0.18.
- Updated serialize-javascript to 7.

The serialize-javascript and happy-dom updates clear their security advisories.

## Known issue

The zod advisory [GHSA-mrhx-c7xc-m3w5](https://github.com/advisories/GHSA-mrhx-c7xc-m3w5) remains open. The fix needs zod 4, but `@imgly/background-removal`, which AniMathIO uses for background removal, still requires zod 3. The practical risk is low for a local desktop app. The advisory is tracked in `DEPENDENCIES.md` in the AniMathIO repository.

## Get the update

Download AniMathIO from [animathio.com](https://animathio.com) or read the [release notes on GitHub](https://github.com/AniMathIO/AniMathIO/releases/tag/animathio-v1.8.2). Downloads are available as AppImage, deb, snap, flatpak, and a Windows installer. See the [full changelog](https://github.com/AniMathIO/AniMathIO/compare/animathio-v1.8.1...animathio-v1.8.2) for every change since v1.8.1.
