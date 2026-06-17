#!/usr/bin/env node
/**
 * Prerender blog pages as static HTML for crawlers + copy .md siblings for llms.txt spec.
 * Run after `vite build`.
 */
import fs from 'node:fs'
import path from 'node:path'
import { fileURLToPath } from 'node:url'
import matter from 'gray-matter'
import { marked } from 'marked'

const __dirname = path.dirname(fileURLToPath(import.meta.url))
const root = path.join(__dirname, '..')
const dist = path.join(root, 'dist')
const contentDir = path.join(root, 'content', 'blog')
const SITE = 'https://aspenmalibumarketing.com'

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
  return str
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function shell({ title, description, canonical, bodyHtml, jsonLd }) {
  const css = findCssFile()
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>${escapeHtml(title)}</title>
  <meta name="description" content="${escapeHtml(description)}" />
  <link rel="canonical" href="${canonical}" />
  <meta property="og:title" content="${escapeHtml(title)}" />
  <meta property="og:description" content="${escapeHtml(description)}" />
  <meta property="og:url" content="${canonical}" />
  <meta property="og:type" content="article" />
  <meta property="og:site_name" content="Aspen Malibu Marketing" />
  <meta name="twitter:card" content="summary_large_image" />
  <link rel="stylesheet" href="${css}" />
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="anonymous" />
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600&family=Geist+Mono:wght@400;500&display=swap" rel="stylesheet" />
  <script type="application/ld+json">${JSON.stringify(jsonLd)}</script>
</head>
<body>
  <article class="blog-post" style="padding-top:48px">
    <div class="container blog-post-container">
      <p><a href="/blog">← All insights</a> · <a href="/">Home</a></p>
      ${bodyHtml}
      <p style="margin-top:48px;padding-top:24px;border-top:1px solid rgba(10,14,26,0.08)">
        <a href="/#estimate">Run an estimate</a> ·
        <a href="mailto:partners@aspenmalibumarketing.com">Contact us</a>
      </p>
    </div>
  </article>
</body>
</html>`
}

function postBodyHtml(post) {
  const html = marked.parse(post.content)
  return `<header class="blog-post-header">
    <div class="blog-post-meta"><time datetime="${post.date}">${post.date}</time><span>${post.readingTime || ''}</span></div>
    <h1 class="blog-post-title">${escapeHtml(post.title)}</h1>
    <p class="blog-post-lead">${escapeHtml(post.description)}</p>
  </header>
  <div class="blog-prose">${html}</div>`
}

function blogIndexHtml(posts) {
  const css = findCssFile()
  const cards = posts.map(p => `
    <article class="blog-card" style="margin-bottom:24px">
      <h2><a href="/blog/${p.slug}">${escapeHtml(p.title)}</a></h2>
      <p>${escapeHtml(p.description)}</p>
      <p><a href="/blog/${p.slug}">Read article →</a></p>
    </article>`).join('')

  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Growth &amp; AI Discovery Insights — Aspen Malibu Marketing Blog</title>
  <meta name="description" content="Expert guides on generative engine optimization (GEO), AI search citations, and growth marketing from Aspen Malibu Marketing." />
  <link rel="canonical" href="${SITE}/blog" />
  <link rel="stylesheet" href="${css}" />
  <link href="https://fonts.googleapis.com/css2?family=Instrument+Serif:ital@0;1&family=Geist:wght@300;400;500;600&display=swap" rel="stylesheet" />
</head>
<body>
  <main class="blog-list-section" style="padding-top:48px">
    <div class="container">
      <h1 class="blog-hero-title">Growth &amp; AI discovery — field notes from the engine room.</h1>
      ${cards}
    </div>
  </main>
</body>
</html>`
}

function main() {
  if (!fs.existsSync(dist)) {
    console.error('dist/ not found — run vite build first')
    process.exit(1)
  }

  const posts = loadPosts()
  const blogDir = path.join(dist, 'blog')
  fs.mkdirSync(blogDir, { recursive: true })

  fs.writeFileSync(path.join(blogDir, 'index.html'), blogIndexHtml(posts))

  posts.forEach(post => {
    const slugDir = path.join(blogDir, post.slug)
    fs.mkdirSync(slugDir, { recursive: true })

    const canonical = `${SITE}/blog/${post.slug}`
    const jsonLd = {
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: post.title,
      description: post.description,
      datePublished: post.date,
      author: { '@type': 'Organization', name: post.author || 'Aspen Malibu Marketing', url: SITE },
      publisher: { '@type': 'Organization', name: 'Aspen Malibu Marketing', url: SITE },
      mainEntityOfPage: { '@type': 'WebPage', '@id': canonical },
      url: canonical,
    }

    const html = shell({
      title: `${post.title} — Aspen Malibu Marketing`,
      description: post.description,
      canonical,
      bodyHtml: postBodyHtml(post),
      jsonLd,
    })

    fs.writeFileSync(path.join(slugDir, 'index.html'), html)
    fs.writeFileSync(path.join(blogDir, `${post.slug}.md`), post.raw)
  })

  console.log(`Prerendered /blog index + ${posts.length} posts`)
}

main()
