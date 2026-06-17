import { useEffect } from 'react'

const SITE = 'https://aspenmalibumarketing.com'
const DEFAULT_IMAGE = `${SITE}/assets/am-logo.png`

function setMeta(name, content, attr = 'name') {
  if (!content) return
  let el = document.querySelector(`meta[${attr}="${name}"]`)
  if (!el) {
    el = document.createElement('meta')
    el.setAttribute(attr, name)
    document.head.appendChild(el)
  }
  el.setAttribute('content', content)
}

function setLink(rel, href) {
  if (!href) return
  let el = document.querySelector(`link[rel="${rel}"]`)
  if (!el) {
    el = document.createElement('link')
    el.setAttribute('rel', rel)
    document.head.appendChild(el)
  }
  el.setAttribute('href', href)
}

function setJsonLd(id, data) {
  let el = document.getElementById(id)
  if (!el) {
    el = document.createElement('script')
    el.type = 'application/ld+json'
    el.id = id
    document.head.appendChild(el)
  }
  el.textContent = JSON.stringify(data)
}

export function SeoHead({
  title = 'Aspen Malibu Marketing — Premium Growth Systems',
  description = 'Aspen Malibu Marketing builds and runs the complete growth engine — website, automation, AI agents, and ads — for ambitious operators.',
  path = '/',
  image = DEFAULT_IMAGE,
  type = 'website',
  article,
  faq,
  breadcrumbs,
}) {
  useEffect(() => {
    const url = `${SITE}${path}`
    document.title = title
    setMeta('description', description)
    setLink('canonical', url)
    setMeta('og:title', title, 'property')
    setMeta('og:description', description, 'property')
    setMeta('og:url', url, 'property')
    setMeta('og:type', type, 'property')
    setMeta('og:image', image, 'property')
    setMeta('og:site_name', 'Aspen Malibu Marketing', 'property')
    setMeta('twitter:card', 'summary_large_image')
    setMeta('twitter:title', title)
    setMeta('twitter:description', description)
    setMeta('twitter:image', image)

    if (article) {
      setJsonLd('seo-article', {
        '@context': 'https://schema.org',
        '@type': 'BlogPosting',
        headline: article.title,
        description: article.description,
        datePublished: article.date,
        dateModified: article.updated || article.date,
        author: {
          '@type': 'Organization',
          name: article.author,
          url: SITE,
        },
        publisher: {
          '@type': 'Organization',
          name: 'Aspen Malibu Marketing',
          url: SITE,
          logo: { '@type': 'ImageObject', url: DEFAULT_IMAGE },
        },
        mainEntityOfPage: { '@type': 'WebPage', '@id': url },
        url,
      })
    } else {
      document.getElementById('seo-article')?.remove()
    }

    if (breadcrumbs?.length) {
      setJsonLd('seo-breadcrumbs', {
        '@context': 'https://schema.org',
        '@type': 'BreadcrumbList',
        itemListElement: breadcrumbs.map((item, i) => ({
          '@type': 'ListItem',
          position: i + 1,
          name: item.name,
          item: item.url.startsWith('http') ? item.url : `${SITE}${item.url}`,
        })),
      })
    } else {
      document.getElementById('seo-breadcrumbs')?.remove()
    }

    if (faq?.length) {
      setJsonLd('seo-faq', {
        '@context': 'https://schema.org',
        '@type': 'FAQPage',
        mainEntity: faq.map(({ q, a }) => ({
          '@type': 'Question',
          name: q,
          acceptedAnswer: { '@type': 'Answer', text: a },
        })),
      })
    } else {
      const existing = document.getElementById('seo-faq')
      existing?.remove()
    }
  }, [title, description, path, image, type, article, faq, breadcrumbs])

  return null
}

export function parseFaqFromMarkdown(content) {
  const faqSection = content.split(/^## FAQ/mi)[1]
  if (!faqSection) return []
  const items = []
  const blocks = faqSection.split(/^### /m).slice(1)
  blocks.forEach(block => {
    const lines = block.trim().split('\n')
    const q = lines[0]?.trim()
    const a = lines.slice(1).join('\n').trim()
    if (q && a) items.push({ q, a })
  })
  return items
}
