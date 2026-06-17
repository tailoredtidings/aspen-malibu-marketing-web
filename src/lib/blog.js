import matter from 'gray-matter'

const posts = import.meta.glob('../../content/blog/*.md', { query: '?raw', import: 'default', eager: true })

const SITE = 'https://aspenmalibumarketing.com'

function parsePost(path, raw) {
  const { data, content } = matter(raw)
  const slug = data.slug || path.replace(/^.*\//, '').replace(/\.md$/, '')
  return {
    slug,
    title: data.title,
    description: data.description,
    date: data.date,
    author: data.author || 'Aspen Malibu Marketing',
    tags: data.tags || [],
    readingTime: data.readingTime || '5 min',
    content,
    url: `${SITE}/blog/${slug}`,
  }
}

const allPosts = Object.entries(posts)
  .map(([path, raw]) => parsePost(path, raw))
  .sort((a, b) => new Date(b.date) - new Date(a.date))

export function getAllPosts() {
  return allPosts
}

export function getPostBySlug(slug) {
  return allPosts.find(p => p.slug === slug) || null
}

export function getAllSlugs() {
  return allPosts.map(p => p.slug)
}

export { SITE }
