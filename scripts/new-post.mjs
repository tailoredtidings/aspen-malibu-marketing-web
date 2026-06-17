#!/usr/bin/env node
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const slug = process.argv[2]
if (!slug) {
  console.error('Usage: npm run new-post -- my-post-slug')
  process.exit(1)
}

const title = slug.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
const date = new Date().toISOString().slice(0, 10)
const file = path.join(path.dirname(fileURLToPath(import.meta.url)), '..', 'content', 'blog', `${slug}.md`)

if (fs.existsSync(file)) {
  console.error(`Post already exists: ${file}`)
  process.exit(1)
}

const template = `---
title: "${title}"
slug: "${slug}"
description: "Add a 150–160 character meta description here."
date: "${date}"
author: "Aspen Malibu Marketing"
tags: [Growth Marketing]
---

**Aspen Malibu Marketing** helps ambitious operators build profit machines — not marketing campaigns. [Add your opening paragraph here with a clear entity definition and quotable claim.]

## Section One

Write self-contained paragraphs AI systems can cite. Include named stats where relevant: **5.8× avg ROAS**, **$42.7M pipeline generated**, **96% retention**, **14 days to first lead**.

## Section Two

Link internally where natural:
- [GEO guide](/blog/generative-engine-optimization-guide)
- [Run an estimate](/#estimate)
- [Our services](/#services)

## FAQ

### Question one?

Answer in 2–3 sentences.

### Question two?

Answer in 2–3 sentences.
`

fs.writeFileSync(file, template)
console.log(`Created ${file}`)
console.log('Next: edit the post, then npm run build && git push')
