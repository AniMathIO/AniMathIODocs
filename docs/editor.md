---
title: The editor
sidebar_label: The editor
sidebar_position: 3
description: "A tour of the AniMathIO 2 editor: library, viewer, inspector, timeline and export."
---

# The editor

The window is a set of floating panels over a dark background: the **Library** on the left, the **Viewer**
in the middle, the **Inspector** on the right and the **Timeline** underneath. Drag the dividers to resize
panels; View toggles them. Layout and track heights persist between sessions. The title bar carries the
menus (File, Edit, View, Playback, Tools, Clip, Help), the project name, an MCP listener badge and Export.

![The editor with library, viewer, inspector and timeline](/img/v2/release-2-3-editor.webp)

## Library

Five tabs share the Library panel:

- **Media**: imported media as a grid or list, with search, kind filters, durations, resolutions, audio
  waveforms and hover scrubbing of video posters. Click a card to add it at the playhead or drag it onto a
  track. Ctrl+I imports without inserting. The microphone button records audio straight into the library
  (see [Record audio](#record-audio)).
- **Elements**: text, shapes, LaTeX, graphs and third-party clip sources. See [Math objects](./math-objects).
- **Effects**: video and audio effects, transitions, animation presets and **Write on**.
- **Plugins**: installed-plugin inventory, versions and load status. See [Community plugins](./community-plugins).
- **Titles**: eight animated compositions (centered title, title and subtitle, lower third, caption bar,
  chapter card, end card, kinetic word pop, math title). Double-click to add five seconds at the playhead.

![The media pool as a thumbnail grid](/img/v2/editor-media.webp)

![The Titles tab and a lower third](/img/v2/editor-titles.webp)

The Titles tab also has a **Typography** group (Title, Subtitle, Body, Caption and Heading 1 to 6 in Inter,
with the 1.x sizes and weights). Text clips have a font weight and a font (DejaVu Sans or Inter) in the
inspector.

## Record audio

**Record audio** (the microphone button in Library, Media, or File, Record audio) opens a recorder card. Pick an
input or leave "System default", press **Record** and watch the level meter, which turns red at full scale (the
take is distorted). **Stop** saves the take as a WAV asset named "Recording N.wav" in the library and, with
"Add to timeline" on, places an audio clip where the playhead was when you pressed Record, on a free audio
track. Both happen as one undo step. If the clip cannot be placed, the take still stays in the library and a
notice says so. **Cancel** discards the take. If the microphone is missing, busy or blocked by your system's
privacy settings, the card says so; on macOS the system asks for microphone permission the first time. Recording
is off when `ANIMATHIO_AUDIO=none`.

![The recorder mid-take](/img/v2/release-2-3-record-audio.webp)

## Viewer

The selected clip shows a transform gizmo: drag inside to move (snapping to the canvas centre and edges),
drag a corner or edge to scale (Shift keeps the aspect ratio), and drag the handle above the box to rotate
(Shift snaps to 15 degrees). A drag previews without touching the history and lands as one undo step.
Clicking the canvas selects the topmost clip under the pointer; Alt-click cycles through the stack.

The viewer header has zoom, safe-area, rule-of-thirds and checkerboard toggles. The transport shows a large
timecode (click it to type one), edit and frame stepping, play, loop and the shuttle-speed badge.

![Viewer, transport and inspector](/img/v2/editor-viewer.webp)

## Inspector

Sections are collapsible cards with a reset button each. Drag a field label to scrub a value (Shift for fine,
Ctrl for coarse) as one undo step. Every animatable property has a keyframe diamond with previous and next
key arrows. With several clips selected, the Transform fields edit all of them at once. Rotation is shown in
degrees. Opacity sits under Compositing; Speed, Animations, Effects and Audio have their own sections.

A clip whose effect plugin is not loaded gets an amber warning badge in the timeline, a warning row in the
inspector and a toast.

![Selecting several clips shows a summary in the inspector](/img/v2/editor-multiselect.webp)

## Timeline

Clips are coloured by kind and show filmstrips, filled audio waveforms, text and LaTeX snippets, fade curves
and transition windows. Track headers have mute, solo, lock and a gain slider; double-click a name to rename
a track. The pentagon playhead shows a timecode pill while scrubbing, the in and out range is shaded, and an
engaged snap draws a yellow guide.

Tools follow Premiere Pro: Select (V), Blade (C), Ripple trim (B), Rate stretch (R), Slip (Y), Slide (U),
Rolling edit (N) and Hand (H). Ctrl+K adds an edit, Q and W ripple-trim to the playhead, J, K and L shuttle,
and I and O set the in and out points. Each drag is one undo step. The full table is on
[Keyboard shortcuts](./keyboard-shortcuts).

![The timeline with tools, tracks and clips](/img/v2/editor-timeline.webp)

Press M to drop a marker; markers snap and ride along with ripple edits. They also drive
[beat sync](./captions-and-automation#beat-sync).

![Markers on the ruler and the Markers and beats panel](/img/v2/editor-markers.webp)

## Speed and retiming

Select a clip and open **Clip, Speed/Duration** (Ctrl+R), or use the inspector's Speed section. Set 6.25 to
1600%, reverse, a duration in frames or linear ramp keys. Linked audio follows. **Maintain pitch** (on for new
clips) keeps the audio pitch while the speed changes; turn it off for pitch-shifting varispeed. With ramp keys,
select the clip to see its speed curve: drag a square handle to change a key's time and speed, and Alt-click a
handle to remove it. Video above 1x speed is filtered over time instead of dropping frames. **Insert frame
hold segment** splits at the playhead and inserts a held picture. See
[the retiming rules](./architecture#clip-retiming).

## Media fit

Image and video clips have a Fit mode: Fit (contain), Fill (cover), Stretch or 1:1. It is identical in the CPU
and GPU renderers and is used by the gizmo and hit testing.

![Fit, Fill, Stretch and 1:1 side by side](/img/v2/media-fit-modes.webp)

## Export

**Export** opens a form with a Format selector (MP4 with H.264 and AAC, the default, or WebM with VP9 and Opus;
switching it rewrites a `.mp4` or `.webm` extension in the path), a path chooser, whole project, in and out range or a custom range, and the
presets `youtube_1080p`, `youtube_4k`, `shorts_vertical`, `square` and `portrait`. Presets apply to a snapshot
of the project and leave project settings unchanged. **Add to queue** or **Export now** snapshots the project
into a job; the export queue (status bar) runs jobs one at a time with progress, ETA and cancel.

MP4 exports embed the timeline markers inside the exported range as chapters (VLC, mpv and FFmpeg show them);
`animathio-cli export --no-embed-chapters` turns that off. WebM carries no chapters. WebM is slower to encode
than MP4.

![The export dialog with the WebM format selected](/img/v2/release-2-3-export-webm.webp)

![The export dialog](/img/v2/editor-export.webp)

![The export queue popover](/img/v2/editor-export-queue.webp)

## Preferences

Preferences (Ctrl+,) saves the preview renderer (GPU or CPU), the autosave interval, the default export
folder, density, reduced motion and the UI scale (the desktop text scale by default, or 80 to 200%).
`ANIMATHIO_UI_SCALE=150` overrides the scale for one run. Preferences are stored separately from projects.

![The editor at 150% UI scale](/img/v2/editor-scale-150.webp)
