import React from 'react'
import { Link, useParams } from 'react-router-dom'
import { Nav } from '../sections/hero-section'
import { Footer } from '../sections/process-section'
import { SeoHead } from '../components/SeoHead'
import { useReveal } from '../hooks/useReveal'
import { getAllPosts } from '../lib/blog'
import { slugifyTag } from '../lib/services'

function BlogTagPage() {
  const { tag } = useParams()
  const allPosts = getAllPosts()
  const posts = allPosts.filter(p =>
    (p.tags || []).some(t => slugifyTag(t) === tag)
  )
  const label = posts[0]?.tags?.find(t => slugifyTag(t) === tag) || tag
  const headerRef = useReveal()

  return (
    <>
      <SeoHead
        title={`${label} — Insights | Aspen Malibu Marketing`}
        description={`Articles about ${label} from Aspen Malibu Marketing — growth systems, GEO, and AI discovery.`}
        path={`/blog/tag/${tag}`}
      />
      <div className="grain"></div>
      <Nav />
      <main>
        <section className="blog-hero">
          <div className="container">
            <div className="reveal" ref={headerRef}>
              <Link to="/blog" className="blog-back">← All insights</Link>
              <span className="sec-tag">Topic</span>
              <h1 className="blog-hero-title">{label}</h1>
              <p className="blog-hero-desc">{posts.length} article{posts.length !== 1 ? 's' : ''} on {label.toLowerCase()}.</p>
            </div>
          </div>
        </section>
        <section className="blog-list-section">
          <div className="container">
            <div className="blog-grid">
              {posts.map(post => (
                <article key={post.slug} className="blog-card">
                  <h2 className="blog-card-title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="blog-card-desc">{post.description}</p>
                  <Link to={`/blog/${post.slug}`} className="blog-card-link">Read article →</Link>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export { BlogTagPage }
