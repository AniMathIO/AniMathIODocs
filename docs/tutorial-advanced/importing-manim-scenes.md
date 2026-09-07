---
sidebar_position: 3
---

# Importing Manim Scenes

AniMathIO can read a [Manim Community](https://www.manim.community/) Python scene and turn it into ordinary AniMathIO elements and animations on your timeline. If you already have Manim scripts, this is the fastest way to bring them into a project you can then edit visually.

The import is a translation, not an emulation — AniMathIO does not run Python or Manim. It reads your script and rebuilds the equivalent elements natively, which means you can move, restyle and retime everything afterwards just like anything else you created by hand.

## Opening the import panel

Select **Manim Import** at the bottom of the left sidebar. The panel opens with an example scene already filled in, so you can try the feature immediately without writing anything.

You have three ways to provide a scene:

- **Type or paste** directly into the editor box
- **Load .py file** to read a script from disk
- **Load example** to restore the built-in sample scene

Click **Import into Timeline** when you're ready. AniMathIO reports how many elements and animations it created, and lists any warnings.

## What gets translated

The parser supports a practical subset of Manim rather than the entire library:

**Mobjects**

- `Text` — becomes a text element, including its `font_size` and `color`
- `MathTex` and `Tex` — typeset with KaTeX and placed as a rendered math element
- `Circle` and `Rectangle` — become shape elements
- `ImageMobject` — becomes an image element

**Animations**

- `Write` and `Create` — translated to a fade-in
- `FadeIn` and `FadeOut`
- `self.play(...)`, including several animations in a single call
- `self.wait(...)`, which extends the scene's total duration

A scene's total length is calculated from your animations and waits, and the project's timeline is extended automatically if the imported scene is longer than the current one.

## Example

The scene shipped with the panel looks like this:

```python
from manim import *

class HelloMath(Scene):
    def construct(self):
        title = Text("Welcome to AniMathIO", font_size=48, color=WHITE)
        formula = MathTex(r"E = mc^2", color=YELLOW)
        subtitle = Text("Mathematical animations made easy", font_size=28, color=GREY)

        self.play(Write(title))
        self.wait(1)
        self.play(FadeIn(formula))
        self.play(Indicate(formula))
        self.wait(0.5)
        self.play(FadeOut(title), FadeIn(subtitle))
        self.wait(1)
```

Importing it produces three elements — `title`, `formula` and `subtitle` — and five animations, with `E = mc²` rendered as proper typeset mathematics rather than raw LaTeX source.

:::tip Press play to see the result
Imported elements carry entrance and exit animations, so at the very start of the timeline some of them are still fully transparent. Press **Play**, or drag the playhead into the middle of a clip, to see the scene as it will actually render.
:::

## Warnings and unsupported constructs

Anything the parser doesn't recognise is reported as a warning instead of failing the whole import, so a partially-supported scene still gives you something to work with.

The most common warning concerns `ImageMobject`: AniMathIO cannot resolve the file path from your Python script, so the image is created as a placeholder that you then point at a real file from the **Images** panel.

Constructs outside the supported subset — custom mobject classes, `ValueTracker`, updaters, 3D scenes, and similar — are skipped. If your scene relies heavily on those, import what translates cleanly and rebuild the rest with AniMathIO's own animation tools.

## After importing

Everything the import produces is a normal AniMathIO element. You can:

- drag elements around the canvas, resize and rotate them
- adjust their timing on the timeline
- add or remove animations from the **Animations** panel
- apply effects, change the background, and mix in audio

From here, [Complex Animations](./complex-animations.md) covers layering and refining what you've imported, and [Exporting Your Project](../tutorial-basics/exporting-your-project.md) covers rendering it to video.
