import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Nav } from '../sections/hero-section'
import { Footer } from '../sections/process-section'
import { SeoHead } from '../components/SeoHead'
import { IconArrow } from '../components/icons'
import { LeadCapture } from '../components/lead-capture'
import { useReveal } from '../hooks/useReveal'
import { getAllPosts } from '../lib/blog'

function BlogIndex() {
  const posts = getAllPosts()
  const [showLead, setShowLead] = useState(false)
  const revealRef = useReveal()
  const gridRef = useReveal()
  const ctaRef = useReveal()

  return (
    <>
      <SeoHead
        title="Growth & AI Discovery Insights — Aspen Malibu Marketing Blog"
        description="Expert guides on generative engine optimization (GEO), AI search citations, growth marketing pricing, and revenue systems from Aspen Malibu Marketing."
        path="/blog"
      />
      <div className="grain"></div>
      <Nav />
      <main>
        <section className="blog-hero">
          <div className="container">
            <div className="reveal" ref={revealRef}>
              <span className="sec-tag">Insights</span>
              <h1 className="blog-hero-title">
                Growth & <em>AI discovery</em> — field notes from the engine room.
              </h1>
              <p className="blog-hero-desc">
                Practical guides on GEO, AI citations, automation, and revenue systems. Written by the team that builds them — and uses them on our own site.
              </p>
            </div>
          </div>
        </section>

        <section className="blog-list-section">
          <div className="container">
            <div className="blog-grid reveal-stagger" ref={gridRef}>
              {posts.map(post => (
                <article key={post.slug} className="blog-card">
                  <div className="blog-card-meta">
                    <time dateTime={post.date}>{formatDate(post.date)}</time>
                    <span>{post.readingTime}</span>
                  </div>
                  <h2 className="blog-card-title">
                    <Link to={`/blog/${post.slug}`}>{post.title}</Link>
                  </h2>
                  <p className="blog-card-desc">{post.description}</p>
                  {post.tags.length > 0 && (
                    <div className="blog-card-tags">
                      {post.tags.slice(0, 3).map(tag => (
                        <span key={tag} className="blog-tag">{tag}</span>
                      ))}
                    </div>
                  )}
                  <Link to={`/blog/${post.slug}`} className="blog-card-link">
                    Read article
                    <IconArrow size={12} stroke={1.5} />
                  </Link>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section className="blog-cta-band">
          <div className="container">
            <div className="blog-cta-inner reveal" ref={ctaRef}>
              <h2>Ready to put this into <em>action?</em></h2>
              <p>Get a free 3-minute audit video — we analyze your funnel, ads, and AI discoverability. No pitch.</p>
              <button type="button" className="btn-primary" onClick={() => setShowLead(true)}>
                Get my free audit
                <span className="arrow"><IconArrow /></span>
              </button>
            </div>
          </div>
        </section>
      </main>
      <Footer />
      {showLead && <LeadCapture onClose={() => setShowLead(false)} source="blog_index" />}
    </>
  )
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export { BlogIndex }
