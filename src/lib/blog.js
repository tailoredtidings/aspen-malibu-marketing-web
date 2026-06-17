import { allPosts, SITE } from './blog-posts.generated.js'

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
