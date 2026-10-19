# design-system

Shared colors, type, and UI rules for my projects: personal site, homelab docs, and dashboards.

**Live spec:** https://kflipdev.github.io/design-system/

## Vice Night

The current theme. A neutral base with Miami Vice teal and pink as accents.

| Token | Light | Dark | Use |
|---|---|---|---|
| `--bg` | `#F6F7F8` | `#101218` | Page background |
| `--ink` | `#15171D` | `#ECEEF2` | Text, primary buttons |
| `--muted` | `#5C6270` | `#9AA1AF` | Secondary text |
| `--line` | `#E2E4E9` | `#262A35` | Borders, dividers |
| `--teal` | `#00808C` | `#4FD6DE` | Links, focus, labels |
| `--teal-bright` | `#2BC4CF` | `#2BC4CF` | Fills, stripe, status dots |
| `--pink` | `#C2307A` | `#FF85BF` | One highlight per screen |
| `--pink-bright` | `#F06FAE` | `#F06FAE` | Stripe end, active underline |
| `--depth-1` | `#E9EEF5` | `#141A24` | Outer container in a nested diagram |
| `--depth-2` | `#DCE3EE` | `#1B2331` | Groups inside it (layers, bands) |
| `--depth-3` | `#FFFFFF` | `#253043` | Cards, at any depth |
| `--depth-inset` | `#F3F6FA` | `#172030` | Chips and code inside a card |

Type: Syncopate (wordmark and small caps labels only), Sora headings, IBM Plex Sans body, IBM Plex Mono code.

### Rules

- Neutrals ~90%, teal ~7%, pink ~3%.
- Text uses `--teal` and `--pink`. The `-bright` shades are for fills and stripes only; they fail contrast as small text on the light background.
- The teal-to-pink gradient (`--sunset`) appears only as a 2–3px stripe or on one short headline phrase.
- Primary buttons are ink. No gradient backgrounds, neon glows, or palm imagery.
- Depth (cool slate): nested containers step one level darker per level (lighter in dark mode), never alternating; cards are always `--depth-3`. Labels on `--depth-1`/`--depth-2` use `--muted` or `--ink`, because teal and pink text drop below 4.5:1 there.

## One-page designs

New designs (architecture, pipelines, page layouts, tooling) start as a single annotated page before any long doc or code. Method, layout template, diagram types, and good versus bad examples: [one-page-designs.md](one-page-designs.md).

## Use

Pin to a release so later changes don't restyle a project unexpectedly:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/KFlipDev/design-system@v1.1.0/vice-night.css">
```

Dark mode follows the OS by default. Set `data-theme="light"` or `data-theme="dark"` on `<html>` to force one.

## Versioning

Semantic versioning. Token value changes are minor; renamed or removed tokens are major.

## Changelog

- **v1.1.0** (2026-10-19): add the depth scale (`--depth-1`, `--depth-2`, `--depth-3`, `--depth-inset`), cool slate, chosen from four options; spec section "Depth".
- **v1.0.0**: first release: palette, type, components, rules.
