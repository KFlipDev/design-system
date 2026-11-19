# design-system

Shared colors, type, and page parts for my projects: personal site, homelab docs, one-page designs, and dashboards.

**Live spec:** https://kflipdev.github.io/design-system/

## Vice Night

The current theme. A neutral base with Miami Vice cyan and pink as accents.

| File | What it is |
|---|---|
| `vice-night.css` | Tokens: colors, depth, category, status, ramp, space, text sizes, fonts. Light and dark. |
| `vice-night-kit.css` | Page and diagram parts as `vn-` classes: title block, legend, step badges, stamp, depth boxes, lines, category and status marks, page treatments, print rules. |
| `vice-night-symbols.js` | Eight line drawings as SVG symbols (laptop, server, rack, phone, user, lock, ticket, cloud), plus the arrowhead and gradient defs. |

### Tokens

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | `#F5F7FA` | `#0E1219` | Page background |
| `--surface` | `#FFFFFF` | `#171A22` | Panels |
| `--ink` | `#15171D` | `#ECEEF2` | Text, primary buttons |
| `--muted` | `#5C6270` | `#9AA1AF` | Secondary text |
| `--line` | `#D9E0EA` | `#2A3546` | Borders, dividers |
| `--teal` | `#006F7A` | `#3DE0E8` | Text-safe teal: links, labels |
| `--teal-bright` | `#22D3EE` | `#22D3EE` | Cyan fills, edges, lines: step badges, zone edge, flow |
| `--pink` | `#C2307A` | `#FF6FB5` | Text-safe pink: a special label or number |
| `--pink-bright` | `#FF4FA8` | `#FF4FA8` | Pink fills and borders: the special parts of a page |
| `--pink-tint` | `#FFE8F3` | `#3A1230` | Fill behind a special part |
| `--on-bright` | `#15171D` | `#15171D` | Text on either bright fill |
| `--depth-1` | `#E9EEF5` | `#141A24` | Outer container in a nested diagram |
| `--depth-2` | `#DCE3EE` | `#1B2331` | Groups inside it (layers, bands) |
| `--depth-3` | `#FFFFFF` | `#253043` | Cards, at any depth |
| `--depth-inset` | `#F3F6FA` | `#172030` | Chips and code inside a card |
| `--cat-1` | `#08879A` | `#3DD6E6` | Category mark: aqua |
| `--cat-2` | `#7B4BD6` | `#B79CFF` | Category mark: violet |
| `--cat-3` | `#C94E18` | `#FF9552` | Category mark: sunset orange |
| `--cat-4` | `#1B8557` | `#6FE0A0` | Category mark: palm green |
| `--cat-5` | `#987000` | `#FFD45C` | Category mark: gold |
| `--cat-6` | `#9B3FA6` | `#E08AF0` | Category mark: orchid |
| `--ok`, `--ok-bg` | `#006F7A`, `#D6F6F8` | `#3DE0E8`, `#0C3338` | Status: allowed, passing (aqua) |
| `--warn`, `--warn-bg` | `#934600`, `#FFE6CC` | `#FFB45C`, `#3D270C` | Status: warning (sunset orange) |
| `--block`, `--block-bg` | `#B92438`, `#FFE1E3` | `#FF7A85`, `#451A20` | Status: blocked, failing (coral) |
| `--seq-1` … `--seq-5` | `#D2F7FA` `#8FE9F0` `#3FD4E0` `#0FA9B8` `#FF4FA8` | `#134E55` `#17767F` `#1FA3AE` `#2CCBD6` `#FF4FA8` | Sequential ramp, low to high; `--seq-on-n` is the label color on step n |
| `--space-1` … `--space-5` | 4, 8, 12, 20, 32px | same | Space scale; `--gap` is `--space-4` |
| `--text-1` … `--text-6` | 10.5, 12, 13, 15, 18, 34px | same | Text sizes for diagrams and dense pages |

Type: Syncopate (wordmark and small caps labels only), Sora headings, IBM Plex Sans body, IBM Plex Mono code.

### Rules

- Neutrals carry the page. Cyan does the working jobs; pink is kept for what is special.
- Text uses `--teal` and `--pink`. The `-bright` pair is for fills, edges and lines, never small text: on the light background cyan is 1.68:1 and pink 2.82:1, so anything a reader must read carries ink text (`--on-bright`) or sits next to a label.
- Cyan (`--teal-bright`): step badges, flow lines, the top edge of a zone, link underlines.
- Pink (`--pink-bright` on `--pink-tint`): the special parts of a page, used sparingly: the special step, the card that matters, a stamp, one number.
- The teal-to-pink gradient (`--sunset`) appears only as the top stripe or on one title word. Gradient text prints solid teal, because PDF renderers handle it badly.
- Primary buttons are ink. No gradient backgrounds, neon glows, or palm imagery.
- Depth (cool slate): nested containers step one level darker per level (lighter in dark mode), never alternating; cards are always `--depth-3`. Teal text passes on every depth fill (lowest 4.58:1, on `--depth-2`); pink text does not (4.07:1), so pink labels stay on cards.
- Category colors (`--cat-1`…`--cat-6`): only on diagrams and dashboards where color = category (VLANs, zones, tiers). One hue per category, held constant across pages; used as a 3px bar, an outline or a small tag, never a fill or body text; the category's name always sits next to it. Every hue clears 3:1 on all light surfaces (lowest 3.29:1, aqua on `--depth-2`).
- Status (`--ok`, `--warn`, `--block`): a text mark or a tinted cell, always with a word or icon, never color alone. "Blocked" is coral, not pink.
- Sequential ramp: cyan for steps 1 to 4, pink for the top step. The value is always printed; color is the second cue.

### Page treatments

A treatment is the look of a whole page: its frame, where the title sits, and the drawing style. Set it with `data-sheet` on `<body>`; pages in a set take different ones.

| Treatment | Attribute | Looks like | Use for |
|---|---|---|---|
| Slab | none (default) | A blue-grey panel holding white cards | Maps and lanes |
| Blueprint | `data-sheet="blueprint"` | One ruled sheet border, numbered figures, title block bottom right | One device or service from several angles |
| Poster | `data-sheet="poster"` | No frame or boxes, one big drawing, a large title | One idea or an overview |
| Ledger | `data-sheet="ledger"` | Ruled groups and rows instead of cards | Reference sheets and standards |
| As-built | `data-sheet="asbuilt"` | Dense current-state map, category colors as bars and tags | A system as it runs today |

## Use

Pin to a release so later changes don't restyle a project unexpectedly:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/KFlipDev/design-system@v1.3.0/vice-night.css">
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/KFlipDev/design-system@v1.3.0/vice-night-kit.css">
<script src="https://cdn.jsdelivr.net/gh/KFlipDev/design-system@v1.3.0/vice-night-symbols.js"></script>
```

Only the first line is needed for the tokens alone. A page that cannot load from a CDN keeps a copy of the three files next to it and links them by relative path.

```html
<body class="vn-body vn-tabloid" data-sheet="blueprint">
```

`vn-letter` or `vn-tabloid` picks the printed sheet (landscape). Print is always light.

Dark mode follows the OS by default. Set `data-theme="light"` or `data-theme="dark"` on `<html>` to force one.

Symbols are drawn with `<svg viewBox="0 0 120 84"><use href="#vn-laptop"/></svg>`; the page puts its own text on top. They ship as a script because `<use href="file.svg#id">` does not load from `file://` pages.

## Versioning

Semantic versioning. Token value changes are minor; renamed or removed tokens are major.

## Changelog

- **v1.3.0** (2026-11-18):
  - Fix: light `--teal` `#00808C` → `#006F7A`; the old value was 4.38:1 on the page background, below the 4.5:1 minimum for text.
  - `--bg` and `--line` take the cooler values the one-page designs already used (`#F5F7FA`, `#D9E0EA`; dark `#0E1219`, `#2A3546`).
  - Louder accents: `--teal-bright` `#22D3EE`, `--pink-bright` `#FF4FA8`, dark `--teal` `#3DE0E8`, dark `--pink` `#FF6FB5`. Pink changes from "one highlight per screen" to "the special parts of a page".
  - Category palette changes to aqua, violet, sunset orange, palm green, gold, orchid.
  - New tokens: `--pink-tint`, `--on-bright`, status (`--ok`, `--warn`, `--block` with tints), sequential ramp (`--seq-1`…`5`, `--seq-on-1`…`5`), space scale, text sizes.
  - New files: `vice-night-kit.css` (page and diagram parts, five page treatments, print rules) and `vice-night-symbols.js` (eight symbols).
  - Removed the copy of the one-page design method; the treatments above replace it here.
- **v1.2.0** (2026-11-12): add the category palette (`--cat-1` to `--cat-6`), six muted hues for color-coded categories in as-built and network diagrams.
- **v1.1.0** (2026-10-19): add the depth scale (`--depth-1`, `--depth-2`, `--depth-3`, `--depth-inset`), cool slate, chosen from four options; spec section "Depth".
- **v1.0.0**: first release: palette, type, components, rules.
