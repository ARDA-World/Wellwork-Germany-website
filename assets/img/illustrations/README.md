# Hero character illustrations

The homepage hero (`index.html` and `en/index.html`) has **three reserved slots**
for flat-vector character illustrations. They're currently rendered as empty
dashed-border placeholders so the layout is visible without the real assets.

When the wellwork admin sends the SVGs, drop them in **this folder** with these
exact filenames:

| Filename                    | Content (from reference)           | Slot position            |
|-----------------------------|------------------------------------|--------------------------|
| `figure-1-megaphone.svg`    | Man holding a megaphone            | bottom-left              |
| `figure-2-ladder.svg`       | Woman on a ladder                  | center                   |
| `figure-3-tablet.svg`       | Man holding a tablet / clipboard   | bottom-right             |

## After dropping in the files

Open `index.html` and `en/index.html` and swap each placeholder `<span class="hero__figure-slot"></span>`
for an `<img>` tag pointing at the real file. The surrounding `<div class="hero__figure ...">`
stays the same — only the inner `<span>` changes.

### Example (DE)
```html
<!-- before -->
<div class="hero__figure hero__figure--left" data-slot="figure-1-megaphone">
  <span class="hero__figure-slot"></span>
</div>

<!-- after -->
<div class="hero__figure hero__figure--left" data-slot="figure-1-megaphone">
  <img src="assets/img/illustrations/figure-1-megaphone.svg" alt="">
</div>
```

### Example (EN)
```html
<!-- en/index.html uses relative paths — prefix with ../ -->
<img src="../assets/img/illustrations/figure-1-megaphone.svg" alt="">
```

## Color notes
If the SVGs come in the default SK purple (`#452F91` / `#6C63FF`) they'll look
on-brand out of the box. If they come in a different accent color, we can
find-replace the fill color across all three files.

## Sizing
The CSS caps each figure at 32–38% of the hero frame width. They're positioned
absolutely so aspect ratio is preserved — no cropping, no stretching.
