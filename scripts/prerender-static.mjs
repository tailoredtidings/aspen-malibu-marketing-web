#!/usr/bin/env node
/**
 * Prerender static HTML for blog, services, and tag pages (crawler-accessible).
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

function shell({ title, description, canonical, bodyHtml, jsonLd }) {
  const css = findCssFile()
  const ld = jsonLd ? `<script type="application/ld+json">${JSON.stringify(jsonLd)}</script>` : ''
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
  ${bodyHtml}
  <p style="max-width:760px;margin:2rem auto;padding:0 1.5rem"><a href="/">Home</a> · <a href="/blog">Insights</a></p>
</body>
</html>`
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

  // Service pages
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
