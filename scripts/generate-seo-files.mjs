#!/usr/bin/env node
/**
 * Generate sitemap, llms.txt, llms-full.txt, RSS feed, OKF bundle, and crawl snapshot.
 * Run after generate-blog-data.mjs.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const publicDir = path.join(root, 'public')
const okfDir = path.join(publicDir, 'okf')
const SITE = 'https://aspenmalibumarketing.com'
const TODAY = new Date().toISOString().slice(0, 10)

const { allPosts } = await import(`file://${path.join(root, 'src/lib/blog-posts.generated.js')}`)

const SERVICE_SLUGS = ['seo', 'paid-ads', 'conversion-funnels', 'ai-automation', 'geo']

const tagSet = new Map()
allPosts.forEach(post => {
  (post.tags || []).forEach(tag => {
    const slug = tag.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    if (!tagSet.has(slug)) tagSet.set(slug, tag)
  })
})

function xmlEscape(s) {
  return s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;')
}

function urlEntry(loc, priority, changefreq = 'monthly') {
  return `  <url>
    <loc>${xmlEscape(loc)}</loc>
    <lastmod>${TODAY}</lastmod>
    <changefreq>${changefreq}</changefreq>
    <priority>${priority}</priority>
  </url>`
}

// ── sitemap.xml ──
const sitemapUrls = [
  urlEntry(`${SITE}/`, '1.0', 'weekly'),
  urlEntry(`${SITE}/blog`, '0.9', 'weekly'),
  urlEntry(`${SITE}/feed.xml`, '0.5', 'daily'),
  ...SERVICE_SLUGS.map(slug => urlEntry(`${SITE}/services/${slug}`, '0.85')),
  ...allPosts.map(p => urlEntry(`${SITE}/blog/${p.slug}`, '0.8')),
  ...[...tagSet.entries()].map(([slug]) => urlEntry(`${SITE}/blog/tag/${slug}`, '0.7')),
]

fs.writeFileSync(
  path.join(publicDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${sitemapUrls.join('\n')}
</urlset>
`
)

// ── feed.xml ──
const feedItems = allPosts.map(p => `    <item>
      <title>${xmlEscape(p.title)}</title>
      <link>${SITE}/blog/${p.slug}</link>
      <guid isPermaLink="true">${SITE}/blog/${p.slug}</guid>
      <pubDate>${new Date(p.date).toUTCString()}</pubDate>
      <description>${xmlEscape(p.description)}</description>
    </item>`).join('\n')

fs.writeFileSync(
  path.join(publicDir, 'feed.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>Aspen Malibu Marketing — Insights</title>
    <link>${SITE}/blog</link>
    <description>Growth, GEO, and AI discovery guides from Aspen Malibu Marketing.</description>
    <language>en-us</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${SITE}/feed.xml" rel="self" type="application/rss+xml"/>
${feedItems}
  </channel>
</rss>
`
)

// ── llms.txt ──
const blogLines = allPosts.map(p =>
  `- [${p.title}](${SITE}/blog/${p.slug}): ${p.description}`
).join('\n')

const serviceLines = [
  ['seo', 'Search Engine Optimization', 'Local SEO, technical fixes, content that ranks and converts'],
  ['paid-ads', 'Paid Ads Management', 'Google, Meta, TikTok, YouTube — optimized for ROAS'],
  ['conversion-funnels', 'Conversion Funnels', 'Landing pages, nurture sequences, form optimization'],
  ['ai-automation', 'AI Automation', 'Voice AI, chatbots, content AI, reviews AI, workflows'],
  ['geo', 'Generative Engine Optimization (GEO)', 'llms.txt, schema, OKF, AI citation architecture'],
].map(([slug, name, desc]) =>
  `- [${name}](${SITE}/services/${slug}): ${desc}`
).join('\n')

const tagLines = [...tagSet.entries()].map(([slug, label]) =>
  `- [${label}](${SITE}/blog/tag/${slug}): Articles tagged ${label}`
).join('\n')

fs.writeFileSync(
  path.join(publicDir, 'llms.txt'),
  `# Aspen Malibu Marketing

> Premium growth studio for ambitious operators. We build and run AI-powered revenue systems — voice agents, paid ads, SEO, funnels, and LLM discovery — for local service businesses. 5.8× avg ROAS · 96% retention · $42.7M pipeline generated.

Website: ${SITE} · Email: partners@aspenmalibumarketing.com

Full reference: [llms-full.txt](${SITE}/llms-full.txt) · RSS: [feed.xml](${SITE}/feed.xml) · OKF: [okf/index.md](${SITE}/okf/index.md)

## Company

- [Home](${SITE}/): Premium growth systems — AI agents, ads, funnels, automation
- [About](${SITE}/#about): Systems over tactics, AI + senior taste, built to profit
- [AI Engine](${SITE}/#ai): Conversation, Voice, Content, and Reviews AI — 24/7
- [Process](${SITE}/#process): Audit → build → AI engine → ads/SEO → scale in 14 days
- [Results](${SITE}/#results): 5.8× ROAS, $42.7M generated, 14 days to first lead, 96% retention
- [Pricing](${SITE}/#pricing): Professional Site, Growth Accelerator ($997/mo+), Bespoke Service
- [Estimator](${SITE}/#estimate): Live scoped pricing from official rate card
- [FAQ](${SITE}/#faq): Pricing, platform, ads, cancellation

## Services

${serviceLines}

## Insights (Blog)

- [All insights](${SITE}/blog): ${allPosts.length} guides on GEO, AI search, pricing, and growth systems
${blogLines}

## Topics

${tagLines}

## Contact

- [Email](mailto:partners@aspenmalibumarketing.com): partners@aspenmalibumarketing.com
- [Free audit](${SITE}/#cta): 3-minute funnel and ad account video audit

## Optional

- [Client login](https://app.aspenmalibumarketing.com): Revenue dashboard and platform
- [llms-full.txt](${SITE}/llms-full.txt): Complete company, pricing, and FAQ reference
- [sitemap.xml](${SITE}/sitemap.xml): All indexable URLs
`
)

// ── llms-full.txt ──
const postSummaries = allPosts.map(p =>
  `### ${p.title}\n${p.description}\nURL: ${SITE}/blog/${p.slug}\nTags: ${(p.tags || []).join(', ')}`
).join('\n\n')

fs.writeFileSync(
  path.join(publicDir, 'llms-full.txt'),
  `# Aspen Malibu Marketing — Full Reference
Generated: ${TODAY}

> Premium growth studio for ambitious operators. We build profit machines — not marketing campaigns.

**Website:** ${SITE}
**Email:** partners@aspenmalibumarketing.com
**Metrics:** 5.8× avg ROAS · $42.7M pipeline · 14 days to first lead · 96% retention

## Engagements

1. **Professional Site** — Custom conversion website, managed hosting, CRM integration
2. **Growth Accelerator** — Self-service platform from $997/mo (CRM, 4 AI layers, automation)
3. **Bespoke Service** — Fully managed profit engine with senior team ($2,995–$20,995+/mo)

## Services

${serviceLines.replace(/- \[/g, '- ').replace(/\]\(/g, ' — ').replace(/\): /g, ': ')}

## All blog posts (${allPosts.length})

${postSummaries}

## Service pages

${SERVICE_SLUGS.map(s => `- ${SITE}/services/${s}`).join('\n')}

## Technical discovery files

- ${SITE}/llms.txt
- ${SITE}/llms-full.txt
- ${SITE}/sitemap.xml
- ${SITE}/feed.xml
- ${SITE}/okf/index.md
`
)

// ── OKF bundle ──
fs.mkdirSync(okfDir, { recursive: true })

const okfIndex = `---
type: Index
title: Aspen Malibu Marketing Knowledge Bundle
description: Open Knowledge Format bundle for AI agents — company, services, and insights.
---

# Aspen Malibu Marketing — OKF Bundle

Knowledge graph for AI agents. See individual concept files in this directory.

## Concepts

${allPosts.map(p => `- [${p.slug}.md](./${p.slug}.md): ${p.title}`).join('\n')}
${SERVICE_SLUGS.map(s => `- [service-${s}.md](./service-${s}.md): ${s} service`).join('\n')}
- [company.md](./company.md): Company overview
`

fs.writeFileSync(path.join(okfDir, 'index.md'), okfIndex)

fs.writeFileSync(path.join(okfDir, 'company.md'), `---
type: Organization
title: Aspen Malibu Marketing
description: Premium growth studio — AI automation, GEO, SEO, paid ads, and conversion funnels.
resource: ${SITE}/
tags: [marketing, GEO, AI, growth]
---

# Aspen Malibu Marketing

Premium growth studio for ambitious operators. We build and run complete revenue engines.

- **ROAS:** 5.8× average
- **Pipeline:** $42.7M generated
- **Retention:** 96%
- **Launch:** 14 days to live
- **Email:** partners@aspenmalibumarketing.com
`)

allPosts.forEach(post => {
  fs.writeFileSync(
    path.join(okfDir, `${post.slug}.md`),
    `---
type: Article
title: ${post.title}
description: ${post.description}
resource: ${SITE}/blog/${post.slug}
tags: [${(post.tags || []).map(t => t.replace(/,/g, '')).join(', ')}]
---

# ${post.title}

${post.description}

Read full article: ${SITE}/blog/${post.slug}
Markdown: ${SITE}/blog/${post.slug}.md
`
  )
})

SERVICE_SLUGS.forEach(slug => {
  fs.writeFileSync(
    path.join(okfDir, `service-${slug}.md`),
    `---
type: Service
title: ${slug}
resource: ${SITE}/services/${slug}
---

# Service: ${slug}

${SITE}/services/${slug}
`
  )
})

// ── crawl snapshot for index.html injection ──
fs.writeFileSync(
  path.join(publicDir, 'crawl-snapshot.html'),
  `<article id="crawl-snapshot" aria-hidden="true" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0">
<h1>Aspen Malibu Marketing — Premium Growth Systems</h1>
<p>Premium growth studio. AI agents, GEO, SEO, paid ads, conversion funnels. 5.8× ROAS. 96% retention.</p>
<h2>Services</h2>
<ul>${SERVICE_SLUGS.map(s => `<li><a href="/services/${s}">${s}</a></li>`).join('')}</ul>
<h2>Insights</h2>
<ul>${allPosts.map(p => `<li><a href="/blog/${p.slug}">${p.title}</a></li>`).join('')}</ul>
</article>`
)

console.log(`SEO files: sitemap (${sitemapUrls.length} URLs), llms.txt, llms-full.txt, feed.xml, OKF (${allPosts.length + SERVICE_SLUGS.length + 1} concepts)`)
