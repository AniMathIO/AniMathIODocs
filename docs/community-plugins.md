---
title: Community plugins
sidebar_label: Community plugins
sidebar_position: 6.5
description: "Install, enable and manage third-party AniMathIO plugins."
---

# Community plugins

Community plugins add tools made by other authors to AniMathIO. The
[plugins repository](https://github.com/AniMathIO/plugins) hosts the registry and source links,
including **Code Snippets** (`io.github.animathio.code-snippets`): syntax-highlighted code with reveal
and token morph animations inspired by Shiki Magic Move.

## Turn community plugins on

Community plugins are **off by default**. Open **Preferences**, turn on **Community plugins** and save.
Both this global switch and a plugin's individual enabled flag must be on before it can load.
Newly installed plugins start **disabled**.

Plugins run as sandboxed WebAssembly components with memory and execution limits and no direct network
or filesystem access. They are still third-party code, **not audited by AniMathIO**. A registry listing
is not a security audit; review the author and source before enabling a plugin. The `org.animathio.*`
IDs are reserved for first-party plugins, so community bundles cannot replace them.

## Install and enable

In **Library → Plugins**, use **Browse** to search the registry, inspect a plugin's source and compatibility, install it, then enable it under **Installed**; **Install from file** accepts a local `.amplugin` bundle, and the same view lets you disable or remove installed plugins.

The CLI works independently of Browse. Download an `.amplugin` from an author you trust, then install
and enable it explicitly:

```bash
animathio-cli plugins community on
animathio-cli plugins install ./code-snippets.amplugin
animathio-cli plugins list
animathio-cli plugins enable io.github.animathio.code-snippets
```

For a remote download, use an HTTPS URL and the SHA-256 published by the author or registry:

```bash
animathio-cli plugins install 'https://example.org/plugin.amplugin' --sha256 PUBLISHED_SHA256
```

Replace the example URL and `PUBLISHED_SHA256` with the actual asset URL and its 64-character hash.
The hash is verified before installation. HTTPS is required, including redirects.

```bash
animathio-cli plugins list --json
animathio-cli plugins disable io.github.animathio.code-snippets
animathio-cli plugins remove io.github.animathio.code-snippets
animathio-cli plugins community off
```

`community` without `on` or `off` shows the switch state. `install --force` replaces an existing
plugin while preserving its enabled flag; use it only for an update you trust.

Editor changes load and unload plugins without a restart. After CLI changes while the editor is open,
save Preferences to re-read the settings. Disabling or removing a plugin leaves clips that need it
showing a missing-plugin placeholder; re-enable the required plugin to render them again.

## Where bundles live

| Platform | User plugin folder |
| --- | --- |
| Linux | `~/.local/share/animathio/plugins` |
| macOS | `~/Library/Application Support/animathio/plugins` |
| Windows | `%APPDATA%\animathio\plugins` |
| Flatpak (host path) | `~/.var/app/com.animathio.AniMathIO/data/animathio/plugins` |

These are the default locations. Installing a bundle does not enable it, and copying files into the
folder does not bypass the global switch or the per-plugin enabled flag.

To build your own extension, see [Plugin authoring](./plugins) and the
[registry contribution guide](https://github.com/AniMathIO/plugins/blob/main/CONTRIBUTING.md).
