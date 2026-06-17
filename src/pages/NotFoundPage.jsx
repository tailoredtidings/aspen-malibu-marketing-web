import React from 'react'
import { Link } from 'react-router-dom'
import { Nav } from '../sections/hero-section'
import { Footer } from '../sections/process-section'
import { SeoHead } from '../components/SeoHead'
import { IconArrow } from '../components/icons'
import { getAllPosts } from '../lib/blog'
import { SERVICE_PAGES } from '../lib/services'

function NotFoundPage() {
  const posts = getAllPosts().slice(0, 4)

  return (
    <>
      <SeoHead
        title="Page Not Found — Aspen Malibu Marketing"
        description="This page could not be found. Explore our growth systems, services, and GEO insights."
        path="/404"
      />
      <div className="grain"></div>
      <Nav />
      <main>
        <section className="blog-hero">
          <div className="container">
            <span className="sec-tag">404</span>
            <h1 className="blog-hero-title">This page doesn't <em>exist.</em></h1>
            <p className="blog-hero-desc">But your next revenue leak might. Here is where to go instead.</p>
            <div className="blog-post-cta-actions" style={{ marginTop: 28 }}>
              <Link to="/" className="btn-primary">
                Back to home
                <span className="arrow"><IconArrow /></span>
              </Link>
              <a href="/#estimate" className="btn-outline">Run an estimate</a>
            </div>
          </div>
        </section>

        <section className="blog-list-section">
          <div className="container">
            <h2 className="blog-related-title">Services</h2>
            <div className="blog-related-grid" style={{ marginBottom: 48 }}>
              {SERVICE_PAGES.map(s => (
                <Link key={s.slug} to={`/services/${s.slug}`} className="blog-related-card">
                  <h3>{s.title}</h3>
                  <p>{s.description}</p>
                </Link>
              ))}
            </div>
            <h2 className="blog-related-title">Popular insights</h2>
            <div className="blog-related-grid">
              {posts.map(p => (
                <Link key={p.slug} to={`/blog/${p.slug}`} className="blog-related-card">
                  <h3>{p.title}</h3>
                  <p>{p.description}</p>
                </Link>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  )
}

export { NotFoundPage }
