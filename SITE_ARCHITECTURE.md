# Site Architecture

## Core model

The site should behave as one continuous exhibition with optional side doors—not as a portfolio homepage followed by eight isolated case-study templates.

The primary experience is **Archive**. A compact **Index** offers fast scanning. **About** supplies biography, roles, and contact details without interrupting the visual journey.

## Primary navigation

1. **Archive** — the curated exhibition and default route
2. **Index** — every body of work in a compact, filterable list
3. **About** — short biography, selected experience, collaborators/credits, and contact

Persistent utilities:

- Collection counter and title while scrolling
- “View index” shortcut
- Sound/motion controls only if motion is later added
- Contact link in the footer and desktop header; no oversized “hire me” banner

The eight collection names should appear inside the Archive as a room list, not as eight competing top-level navigation items.

## Homepage / Archive flow

### 0. Threshold

Full-viewport opening statement:

> **I make stories, symbols and systems. This is where I keep the evidence.**

Subline:

> A personal creative archive of imagined worlds, living brands, published stories, and things I’ve built since 2016.

An understated “Enter the archive” cue leads directly into work. Use a cropped or animated fragment from `Arcane 1.png` only if it does not compete with the statement.

### 1. Room directory

A typographic list of the eight collections, each with a one-line promise. Hover/focus may reveal one representative image, but the list must remain readable and keyboard accessible.

### 2. Visual Stories

Horizontal narrative strips establish scale and storytelling ability immediately. This is the strongest opening collection.

### 3. Imaginary Worlds

The monumental poster triptych shifts from sequential storytelling to singular images.

### 4. Brands in the Wild

Fervor and SuperNaati introduce commercial context, food culture, process, and voice.

### 5. Marks & Meaning

A quiet specimen room creates breathing space after the dense campaign wall.

### 6. Things I Built

Trace appears as a guided conversation flow. Articled remains absent until assets or naming confirmation exist.

### 7. Stories That Travel

The physical publication and its documentary evidence introduce reach without unsupported metrics.

### 8. Building a Brand From Zero

Lucio becomes the final professional crescendo: focused, authored, and spatially bold.

### 9. Behind the Work

Personal photographs and a short first-person biography bring the archive back to its maker.

### 10. Exit / Contact

A restrained closing invitation: availability, location/time zone if useful, email, and selected social links. Follow with the compact collection list so visitors can re-enter another room.

## Index

The Index is a dense archival table for recruiters, collaborators, and repeat visitors who need speed.

Recommended fields:

- Work title
- Collection
- Year or range
- Context: commissioned, self-initiated, published, exploratory
- Role
- Collaborators/client
- Medium

Filters should be semantic rather than industry clichés: **Stories**, **Worlds**, **Brands**, **Symbols**, **Products**, **Published**, **Personal**.

## About

Suggested content order:

1. Train-door portrait
2. A 90–120 word first-person biography
3. “Making since 2016” timeline with no more than five meaningful markers
4. Practice areas: identity and art direction; visual storytelling and illustration; editorial and campaigns; information design; digital products and experiments
5. Selected roles and collaborators, all fact-checked
6. Contact and downloadable résumé if desired

The About page should explain the connective tissue between disciplines, not repeat every project description.

## Collection-page pattern

Each room can have its own presentation logic while sharing a minimal metadata system:

1. Collection title and one-sentence curatorial premise
2. One dominant work or sequence
3. Supporting wall, tray, or flow
4. Compact captions revealed without leaving the work
5. One personal annotation—what drew you to the subject or what you noticed
6. Next-room transition based on a visual or conceptual connection

Individual work detail routes are optional. Create them only for bodies with enough evidence and process—likely Lucio, the graphic novel, and a future Articled/Trace story. Do not manufacture long case studies from thin material.

## Content model

Every work record should support:

- `title`
- `collection`
- `year`
- `context`
- `role`
- `client_or_origin`
- `collaborators`
- `medium`
- `short_caption`
- `assets`
- `sequence_order`
- `credits_status`
- `external_evidence`

This structure lets the site distinguish professional work from personal exploration without visually segregating either as lesser work.

## Responsive behavior

- On desktop, use horizontal movement only inside clearly bounded narrative rooms; keep normal vertical scrolling as the global behavior.
- On mobile, turn wide strips into controlled pan/zoom readers or ordered panels. Do not shrink 5,000-pixel narratives into unreadable thumbnails.
- Poster rooms become a vertical sequence with full-bleed moments.
- Symbol specimens retain generous negative space.
- Product screens become a scroll-snap flow with explanatory text outside the devices.
- Documentary photographs stay uncropped whenever faces, book covers, or contextual evidence would be lost.

## Accessibility and performance

- Supply descriptive alt text for meaning, not filenames.
- Provide text equivalents for words embedded in images, especially Udgamreads and SuperNaati sequences.
- Respect reduced-motion preferences and never make horizontal scrolling the only way forward.
- Generate optimized derivatives for delivery while retaining originals untouched.
- Lazy-load supporting walls, but load the opening work deliberately to avoid a blank threshold.
- Maintain strong focus states and full keyboard access to captions, readers, and the Index.
