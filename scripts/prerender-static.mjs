#!/usr/bin/env node
/**
 * Prerender static HTML for blog, services, and tag pages (crawler-accessible).
 * Enhanced structural chrome for better consistency with main site.
 * All visible content and text preserved exactly.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'
import { marked } from 'marked'
import { SITE } from './site-config.mjs'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const dist = path.join(root, 'dist')
const contentDir = path.join(root, 'content', 'blog')

const SERVICE_SLUGS = ['seo', 'paid-ads', 'conversion-funnels', 'ai-automation', 'geo']

function findCssFile() {
  const assetsDir = path.join(dist, 'assets')
  if (!fs.existsSync(assetsDir)) return '/assets/index.css'
  const css = fs.readdirSync(assetsDir).find(f => f.endsWith('.css'))
  return css ? `/assets/${css}` : '/assets/index.css'
}

function loadPosts() {
  return fs.readdirSync(contentDir)
    .filter(f => f.endsWith('.md'))
    .map(file => {
      const raw = fs.readFileSync(path.join(contentDir, file), 'utf8')
      const { data, content } = matter(raw)
      const slug = data.slug || file.replace(/\.md$/, '')
      return { ...data, slug, content, raw }
    })
    .sort((a, b) => new Date(b.date) - new Date(a.date))
}

function escapeHtml(str) {
  return String(str)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

// Static crawl snapshot (exact from main site for consistency)
const CRAWL_SNAPSHOT = `<article id="crawl-snapshot" aria-hidden="true" style="position:absolute;width:1px;height:1px;padding:0;margin:-1px;overflow:hidden;clip:rect(0,0,0,0);white-space:nowrap;border:0">
<h1>Aspen Malibu Marketing — Premium Growth Systems</h1>
<p>Premium growth studio. AI agents, GEO, SEO, paid ads, conversion funnels. 5.8× ROAS. 96% retention.</p>
<h2>Services</h2>
<ul><li><a href="/services/seo">seo</a></li><li><a href="/services/paid-ads">paid-ads</a></li><li><a href="/services/conversion-funnels">conversion-funnels</a></li><li><a href="/services/ai-automation">ai-automation</a></li><li><a href="/services/geo">geo</a></li></ul>
<h2>Insights</h2>
<ul><li><a href="/blog/ai-voice-agents-local-business">AI Voice Agents for Local Businesses: Answer Every Call, Book Every Lead</a></li><li><a href="/blog/case-study-medical-practice-bookings">Case Study: How Meridian Health Partners Increased Bookings 312% in 90 Days</a></li><li><a href="/blog/generative-engine-optimization-guide">Generative Engine Optimization (GEO): The Complete 2026 Guide</a></li><li><a href="/blog/get-cited-in-ai-search">How to Get Cited in ChatGPT, Perplexity, and Google AI Overviews</a></li><li><a href="/blog/growth-marketing-retainer-cost">Growth Marketing Retainer Cost in 2026: Real Pricing, No Guesswork</a></li><li><a href="/blog/llms-txt-schema-okf-guide">llms.txt, Schema.org, and OKF: A Technical Guide for AI Discoverability</a></li><li><a href="/blog/self-service-vs-managed-marketing">Growth Accelerator vs. Bespoke Service: Which Engagement Is Right for You?</a></li><li><a href="/blog/what-we-measure-roas-retention">What We Measure: ROAS, Retention, and the Metrics That Actually Matter</a></li></ul>
</article>`;

function shell({ title, description, canonical, bodyHtml, jsonLd }) {
  const css = findCssFile()
  const ld = jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ''

  // Minimal site header using only text and links that already exist across the site
  const siteHeader = `<header style="padding:1rem 0;border-bottom:1px solid var(--line, #e5e5e5);margin-bottom:1rem;"><a href="/" style="font-family: 'Instrument Serif', serif; font-size:17px; text-decoration:none; color:inherit;">Aspen Malibu Marketing</a> <span style="margin:0 8px; color:#999;">·</span> <a href="/blog" style="font-size:13.5px; text-decoration:none; color:inherit;">Insights</a></header>`;

  // Consistent footer using existing link text
  const siteFooter = `<footer style="margin-top:3rem;padding-top:1rem;border-top:1px solid var(--line, #e5e5e5); font-size:13px;"><a href="/">Home</a> · <a href="/blog">Insights</a></footer>`;

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="canonical" href="${canonical}" />
  <link rel="stylesheet" href="${css}" />
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@400;500;600&display=swap" rel="stylesheet" />
  ${ld}
</head>
<body>
  ${siteHeader}
  ${bodyHtml}
  ${siteFooter}
  ${CRAWL_SNAPSHOT}

  <!-- GoHighLevel External Tracking -->
  <script 
    src="https://link.msgsndr.com/js/external-tracking.js"
    data-tracking-id="tk_8d82b62691534f5b923f18c63271ba77">
  </script>
</body>
</html>`;
}

function writePage(dir, html) {
  fs.mkdirSync(dir, { recursive: true })
  fs.writeFileSync(path.join(dir, 'index.html'), html)
}

function main() {
  if (!fs.existsSync(dist)) {
    console.error('dist/ not found — run vite build first')
    process.exit(1)
  }

  const posts = loadPosts()
  const css = findCssFile()

  // Blog index
  writePage(path.join(dist, 'blog'), shell({
    title: 'Insights — Aspen Malibu Marketing',
    description: 'GEO, AI search, and growth marketing guides.',
    canonical: `${SITE}/blog`,
    bodyHtml: `<main class="blog-list-section" style="padding-top:48px"><div class="container"><h1>Insights</h1>${posts.map(p => `<article><h2><a href="/blog/${p.slug}">${escapeHtml(p.title)}</a></h2><p>${escapeHtml(p.description)}</p></article>`).join('')}</div></main>`,
  }))

  // Blog posts + .md siblings
  posts.forEach(post => {
    const canonical = `${SITE}/blog/${post.slug}`
    const html = marked.parse(post.content)
    writePage(path.join(dist, 'blog', post.slug), shell({
      title: `${post.title} — Aspen Malibu Marketing`,
      description: post.description,
      canonical,
      bodyHtml: `<article class="blog-post" style="padding-top:48px"><div class="container blog-post-container"><h1>${escapeHtml(post.title)}</h1><div class="blog-prose">${html}</div></div></article>`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: post.title,
        description: post.description,
        datePublished: post.date,
        url: canonical,
      },
    }))
    fs.writeFileSync(path.join(dist, 'blog', `${post.slug}.md`), post.raw)
  })

  // Tag pages
  const tags = new Map()
  posts.forEach(p => (p.tags || []).forEach(t => {
    const slug = t.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
    if (!tags.has(slug)) tags.set(slug, { label: t, posts: [] })
    tags.get(slug).posts.push(p)
  }))
  tags.forEach(({ label, posts: tagPosts }, slug) => {
    writePage(path.join(dist, 'blog', 'tag', slug), shell({
      title: `${label} — Insights`,
      description: `Articles about ${label}.`,
      canonical: `${SITE}/blog/tag/${slug}`,
      bodyHtml: `<main style="padding:48px 1.5rem"><h1>${escapeHtml(label)}</h1>${tagPosts.map(p => `<p><a href="/blog/${p.slug}">${escapeHtml(p.title)}</a></p>`).join('')}</main>`,
    }))
  })

  // Service pages - same exact visible content, richer consistent shell
  SERVICE_SLUGS.forEach(slug => {
    writePage(path.join(dist, 'services', slug), shell({
      title: `${slug} — Aspen Malibu Marketing`,
      description: `Aspen Malibu Marketing ${slug.replace(/-/g, ' ')} services.`,
      canonical: `${SITE}/services/${slug}`,
      bodyHtml: `<main style="padding:48px 1.5rem"><h1>${escapeHtml(slug.replace(/-/g, ' '))}</h1><p><a href="/#estimate">Get an estimate</a></p></main>`,
      jsonLd: {
        '@context': 'https://schema.org',
        '@type': 'Service',
        name: slug,
        provider: { '@type': 'Organization', name: 'Aspen Malibu Marketing', url: SITE },
        url: `${SITE}/services/${slug}`,
      },
    }))
  })

  // 404
  writePage(path.join(dist, '404'), shell({
    title: '404 — Aspen Malibu Marketing',
    description: 'Page not found.',
    canonical: `${SITE}/404`,
    bodyHtml: '<main style="padding:48px 1.5rem"><h1>Page not found</h1><p><a href="/">Return home</a></p></main>',
  }))

  console.log(`Prerendered: blog (${posts.length}), tags (${tags.size}), services (${SERVICE_SLUGS.length}), 404`)
}

main()
