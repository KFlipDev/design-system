# One-page designs

How designs start in my projects. Adapted from Stone Librande's GDC 2010 talk "One-Page Designs" ([slides](https://stonetronix.com/gdc-2010/OnePageDesigns.ppt), [video on GDC Vault](https://gdcvault.com/play/1012356/One-Page)). This is a summary in my own words; the examples named below are his and live in the slides.

## Why

People rarely read past the first page or screen of a design doc, and wikis hide how the parts relate. A single visual page gets read, shows the relationships, and forces the designer to understand the system well enough to boil it down. Drawing the page is itself the design work: gaps and bad assumptions show up while laying it out.

## When to use

Start any new design with a one-pager before writing a long doc or any code:
- infrastructure architecture (network, identity, storage, compute)
- CI/CD pipelines and automation flows
- site structure and page layout
- internal tooling and scripts with more than one moving part

Long-form docs (runbooks, READMEs) can follow, but the one-pager stays the entry point and links out to them.

## Layout

1. **Title.** If you can't name it, you don't yet know why you're making it.
2. **Date (and version) on the page.** Copies get passed around; the date is the version control.
3. **Central illustration.** One focal diagram in the middle: topology, flow, map or matrix.
4. **Short description** under the central illustration.
5. **Callouts** around it for detail. Make callouts small diagrams where possible, with a note underneath.
6. **Sidebar** for goals, constraints, checklists or open questions.
7. **Whitespace.** Cramped pages don't get read.
8. **Size encodes importance.** Important things get bigger boxes and bigger fonts.

Start at letter size and grow (tabloid/11x17, then poster) only if the content needs it. When one area needs more depth, give it its own one-pager and link to it rather than packing it in.

## Diagram types to pick from

| Type | Use for | Infra example |
|---|---|---|
| Flow chart | How systems interact; main loops | Git push → GitLab CI → Terraform plan/apply → Proxmox |
| Storyboard | Key moments in sequence, not every step | User onboarding: HR record → IdP → device enrollment → app access |
| Time + space map | Where things live and when they happen | Backup schedule across hosts and offsite targets |
| Module relationships | The whole system at a high level on one page | Homelab: network, identity, compute, storage, observability |
| Strengths/trade-off chart | Comparing options along a spectrum | Proxmox vs. Unraid VMs vs. bare metal for a workload |
| Matrix | Pick two key attributes; fill every cell | Services × environments, or roles × systems for access design |

Rules of thumb:
- If flow-chart lines cross, the chart is too detailed or at the wrong altitude. Simplify and compartmentalize.
- Use iconic shapes rather than literal screenshots so readers focus on the information, not the surface.
- Matrices make gaps visible. Fill every cell in one pass and the matrix becomes a checklist for building and testing.
- If the data doesn't fit a grid, try another shape before forcing it.

## Visual habits from his examples

Seen in the deck's diagrams but not in its speaker notes:
- **Leader lines, not proximity.** Each callout connects to its exact spot on the main illustration with a thin line. The template slide is a big central box with lines out to callouts, a detail inset with notes under it, and a bordered sidebar of bullets.
- **Title block in a corner.** Each Simpsons interior map has a small cartouche: name, scope ("NOT TO SCALE", area), and date. Infra equivalent: diagram name, environment, date, version.
- **Primitives first, then compositions.** One page defines a small visual vocabulary (his combat page: direct, propelled, area-circle, cone, beam); later pages build everything out of those symbols. Do this for infra too: one legend for host, VM, container, network segment, trust boundary and data flow, reused across every diagram.
- **Color = category, held constant.** In the robot-faction triangle and the Spore archetype charts, each faction keeps the same color everywhere it appears. Choose colors per zone or role once (e.g. mgmt, prod, DMZ, IoT) and keep them.
- **Time on an axis.** The Spore creature map puts a minutes/level ruler along the bottom edge, so space and time sit on one page. Useful for backup/retention schedules and rollout plans.
- **Tables for exhaustive pairs.** The Spore cell-interaction page is a full grid (attacker × defender) with the diagonal highlighted; every cell filled. Same shape fits allow/deny matrices between network zones.
- **Iterate visibly.** The archetype chart went through five drawings (spreadsheet → circle → fan → vectors → triangle lattice); the last one was what made the design make sense. Keep early drafts.
- **Expect markup.** The final example is a clean print next to the same sheet covered in a level designer's handwriting a day later. Leave room on the page for that.

## Points from the talk itself

From the recorded talk, beyond what the slides say:
- **Not fitting is a signal.** If a design won't fit on one page, it's usually too complex or framed wrong. Rethink it before you shrink it.
- **Cut by tier.** Rank the content into tiers 1, 2 and 3. When text has to shrink to a tiny font to fit, cut instead.
- **Every element earns its place.** Nothing decorative; each icon or note encodes a real decision.
- **Put time on it.** State expected durations up front (how long a phase or a migration should take) rather than finding out afterward.
- **One page, several audiences.** Like architectural drawings (the client wants the elevation, the builder wants the floor plan), let the reader take the level of detail they need: headline first, details on closer reading.
- **Shared picture in meetings.** Bringing the page means everyone pictures the same thing, instead of each person imagining something different.
- **Deliver it in person.** Don't just email it or post a wiki link. He walked printouts to people and brought pencils to meetings. Remote equivalent: share it on a call, screen up, and collect annotations.
- **Rough first.** Early versions are plain black-and-white sketches taken to meetings and iterated, sometimes for a week. By the time it's polished and pinned up, it's mostly final.
- **If you're new to this, start with a flow chart** of the core loop.
- **Top-down beats bottom-up.** Lay out the full matrix first and fill it in, rather than resolving cases one at a time as they come up.

## Good examples vs. what not to do

The deck mixes models with counter-examples. Don't copy the second column.

| Copy these | Don't copy these (and why) |
|---|---|
| Layout template: title, date, central illustration, callouts, sidebar | Text-heavy design docs (Leisure Suit Larry, Creature Ball, Grim Fandango): thorough but nobody reads them. He still writes long text privately to think a design through, but he doesn't hand it out |
| Battle.net UI flow (engineers pinned it to their walls) | Design wikis as the main design doc (Spore, Simpsons): they split the design into chunks and hide how the parts relate. Fine as a supporting store (he called the Simpsons wiki, which had a full-time owner, the best he'd worked on) |
| Diablo Act 1 map, Winterstone Castle, combat primitives | Diablo concept art: shows the mood, not the mechanics |
| Simpsons Springfield map and interior plans | Springfield map from the TV show: too vague to build from |
| Creature Keeper training loop flow chart | Health-care bill flow chart: crossing lines everywhere, wrong altitude |
| Robot factions, 2nd pass (each faction along a side) | Robot factions, 1st pass (factions at corners): looked fine, but the design was too predictable |
| Spore cell-interaction grid; final archetype triangle | Archetype spreadsheet (complete but unreadable); first circular archetype chart (looked cool, misrepresented the data) |

Also don't take a page of text and blow it up to poster size; that's still a text document, just bigger.

The common failures: pages of text, information spread across many pages, art in place of mechanics, tangled lines, and diagrams that look good but distort the data.

## Tools

- Vector output only, so it scales cleanly and exports to PDF/SVG/PNG.
- Default: hand-written SVG or HTML artifact (versioned in git, diffable). Mermaid is OK for quick flow charts but not as the final page.
- Store sources next to the project they describe (e.g. `docs/designs/<name>.svg`) and export a PDF when printing.
- Style with Vice Night: neutrals for structure, `--teal` for flows and labels, `--pink` for the one thing that must not be missed (e.g. production or a trust boundary). Dashed outlines mean planned.

## Using it

- Get it seen: link it from the project README, and use it as the lead image when writing the project up.
- Mark it up. Notes and corrections go back into the next dated revision; printed doesn't mean final.
- Start small with one subsystem, then expand.
