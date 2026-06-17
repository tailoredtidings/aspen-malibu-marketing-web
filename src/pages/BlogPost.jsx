import React, { useState } from 'react'
import { Link, Navigate, useParams } from 'react-router-dom'
import ReactMarkdown from 'react-markdown'
import remarkGfm from 'remark-gfm'
import { Nav } from '../sections/hero-section'
import { Footer } from '../sections/process-section'
import { SeoHead, parseFaqFromMarkdown } from '../components/SeoHead'
import { IconArrow, IconBack } from '../components/icons'
import { LeadCapture } from '../components/lead-capture'
import { useReveal } from '../hooks/useReveal'
import { getPostBySlug, getAllPosts } from '../lib/blog'

function BlogPost() {
  const { slug } = useParams()
  const post = getPostBySlug(slug)
  const [showLead, setShowLead] = useState(false)
  const headerRef = useReveal()
  const proseRef = useReveal()
  const ctaRef = useReveal()

  if (!post) return <Navigate to="/blog" replace />

  const faq = parseFaqFromMarkdown(post.content)
  const related = getAllPosts().filter(p => p.slug !== slug).slice(0, 3)

  return (
    <>
      <SeoHead
        title={`${post.title} — Aspen Malibu Marketing`}
        description={post.description}
        path={`/blog/${post.slug}`}
        type="article"
        article={post}
        faq={faq.length ? faq : undefined}
      />
      <div className="grain"></div>
      <Nav />
      <main>
        <article className="blog-post">
          <div className="container blog-post-container">
            <Link to="/blog" className="blog-back">
              <IconBack />
              All insights
            </Link>

            <header className="blog-post-header reveal" ref={headerRef}>
              <div className="blog-post-meta">
                <time dateTime={post.date}>{formatDate(post.date)}</time>
                <span>{post.readingTime}</span>
                <span>{post.author}</span>
              </div>
              <h1 className="blog-post-title">{post.title}</h1>
              <p className="blog-post-lead">{post.description}</p>
              {post.tags.length > 0 && (
                <div className="blog-card-tags">
                  {post.tags.map(tag => (
                    <span key={tag} className="blog-tag">{tag}</span>
                  ))}
                </div>
              )}
            </header>

            <div className="blog-prose reveal" ref={proseRef}>
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  a: ({ href, children, ...props }) => {
                    const isInternal = href?.startsWith('/') || href?.startsWith('#')
                    if (isInternal && href?.startsWith('/blog/')) {
                      return <Link to={href} {...props}>{children}</Link>
                    }
                    if (isInternal) {
                      return <a href={href} {...props}>{children}</a>
                    }
                    return <a href={href} target="_blank" rel="noopener noreferrer" {...props}>{children}</a>
                  },
                }}
              >
                {post.content}
              </ReactMarkdown>
            </div>

            <aside className="blog-post-cta reveal" ref={ctaRef}>
              <div className="blog-post-cta-card">
                <span className="sec-tag">Next step</span>
                <h3>See what this looks like for <em>your</em> business.</h3>
                <p>Run our live estimator or book a free audit — real numbers from our rate card, confirmed on a 30-min call.</p>
                <div className="blog-post-cta-actions">
                  <button type="button" className="btn-primary" onClick={() => setShowLead(true)}>
                    Get my free audit
                    <span className="arrow"><IconArrow /></span>
                  </button>
                  <a href="/#estimate" className="btn-outline">Run an estimate</a>
                </div>
              </div>
            </aside>

            {related.length > 0 && (
              <section className="blog-related">
                <h2 className="blog-related-title">Continue reading</h2>
                <div className="blog-related-grid">
                  {related.map(r => (
                    <Link key={r.slug} to={`/blog/${r.slug}`} className="blog-related-card">
                      <time dateTime={r.date}>{formatDate(r.date)}</time>
                      <h3>{r.title}</h3>
                      <p>{r.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </article>
      </main>
      <Footer />
      {showLead && <LeadCapture onClose={() => setShowLead(false)} source={`blog_${post.slug}`} />}
    </>
  )
}

function formatDate(iso) {
  return new Date(iso).toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })
}

export { BlogPost }
