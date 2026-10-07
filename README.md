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

Type: Syncopate (wordmark and small caps labels only), Sora headings, IBM Plex Sans body, IBM Plex Mono code.

### Rules

- Neutrals ~90%, teal ~7%, pink ~3%.
- Text uses `--teal` and `--pink`. The `-bright` shades are for fills and stripes only; they fail contrast as small text on the light background.
- The teal-to-pink gradient (`--sunset`) appears only as a 2–3px stripe or on one short headline phrase.
- Primary buttons are ink. No gradient backgrounds, neon glows, or palm imagery.

## Use

Pin to a release so later changes don't restyle a project unexpectedly:

```html
<link rel="stylesheet" href="https://cdn.jsdelivr.net/gh/KFlipDev/design-system@v1.0.0/vice-night.css">
```

Dark mode follows the OS by default. Set `data-theme="light"` or `data-theme="dark"` on `<html>` to force one.

## Versioning

Semantic versioning. Token value changes are minor; renamed or removed tokens are major.
