import { useMemo } from 'react'

export function extractToc(content) {
  const items = []
  const lines = content.split('\n')
  lines.forEach(line => {
    const h2 = line.match(/^## (.+)/)
    const h3 = line.match(/^### (.+)/)
    if (h2) {
      const text = h2[1].trim()
      items.push({ level: 2, text, id: slugify(text) })
    } else if (h3) {
      const text = h3[1].trim()
      items.push({ level: 3, text, id: slugify(text) })
    }
  })
  return items
}

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, '-').replace(/^-|-$/g, '')
}

export function BlogToc({ content }) {
  const items = useMemo(() => extractToc(content), [content])
  if (items.length < 3) return null

  return (
    <nav className="blog-toc" aria-label="Table of contents">
      <span className="blog-toc-label">In this guide</span>
      <ol>
        {items.map(item => (
          <li key={item.id} className={item.level === 3 ? 'blog-toc-h3' : ''}>
            <a href={`#${item.id}`}>{item.text}</a>
          </li>
        ))}
      </ol>
    </nav>
  )
}

export function tocHeadingComponents() {
  return {
    h2: ({ children, ...props }) => {
      const text = String(children)
      return <h2 id={slugify(text)} {...props}>{children}</h2>
    },
    h3: ({ children, ...props }) => {
      const text = String(children)
      return <h3 id={slugify(text)} {...props}>{children}</h3>
    },
  }
}
