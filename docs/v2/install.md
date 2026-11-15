---
title: Install
sidebar_label: Install
sidebar_position: 2
description: "Installers for AniMathIO 2.0 on Windows, macOS and Linux, and how to verify them."
---

# Install AniMathIO 2.0

Download the installer from the [v2.0.0 release page](https://github.com/AniMathIO/AniMathIO/releases/tag/v2.0.0).
Every installer ships the desktop editor (`animathio`), the headless tool (`animathio-cli`) and the first-party
plugin bundles.

| Platform | File | Notes |
| --- | --- | --- |
| Windows | `animathio_2.0.0_x64-setup.exe` | NSIS installer. Unsigned, so SmartScreen warns: choose **More info**, then **Run anyway**. |
| macOS | `AniMathIO_2.0.0_aarch64.dmg` | Apple Silicon. Unsigned and not notarized: right-click the app and choose **Open**. |
| Linux (any distribution) | `animathio_2.0.0_x86_64.AppImage` | Make it executable and run it. The host provides the runtime libraries. |
| Debian and Ubuntu | `animathio_2.0.0_amd64.deb` | Declares its runtime libraries as dependencies. |

## Linux

```bash
chmod +x animathio_2.0.0_x86_64.AppImage
./animathio_2.0.0_x86_64.AppImage
```

```bash
sudo apt install ./animathio_2.0.0_amd64.deb
```

## Verify the installation

```bash
animathio --version
animathio-cli --version
```

CI-built installers carry a build provenance attestation. To check a download:

```bash
gh attestation verify <file> --repo AniMathIO/AniMathIO
```

## Automatic subtitles need a model

The installers include the local speech engine but no model. The first time you generate subtitles, AniMathIO
asks before downloading `tiny` (78 MB), `base` (148 MB, default) or `small` (488 MB), checks its SHA-256 and
stores it in your user data directory.

## Build from source

You need stable Rust (edition 2024). On Linux also install `libasound2-dev`.

```bash
git clone https://github.com/AniMathIO/AniMathIO.git
cd AniMathIO
scripts/build-plugins.sh
cargo run -p animathio --release
```

For an unpackaged release binary set `ANIMATHIO_PLUGIN_DIR=target/plugins` so the editor finds the plugins.
Debug binaries find `target/plugins` on their own.

## Coming from 1.x

2.0 uses a different project format (`.amio`). Convert a 1.x project with
`animathio-cli import-v1 project.animathio -o imported.amio`, or use **Import v1** on the start screen. See
[Migrating from 1.x](./migrating-from-v1). The 1.x installers and documentation remain available as
[v1 (legacy)](/docs/getting-started).
