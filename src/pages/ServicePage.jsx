import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { Nav } from '../sections/hero-section'
import { Footer } from '../sections/process-section'
import { SeoHead } from '../components/SeoHead'
import { IconArrow } from '../components/icons'
import { LeadCapture } from '../components/lead-capture'
import { useReveal } from '../hooks/useReveal'
import { getServiceBySlug } from '../lib/services'
import { getAllPosts } from '../lib/blog'

function ServicePage({ slug: slugProp }) {
  const slug = slugProp
  const service = getServiceBySlug(slug)
  const [showLead, setShowLead] = useState(false)
  const headerRef = useReveal()
  const bodyRef = useReveal()

  if (!service) return null

  const related = (service.relatedPosts || [])
    .map(s => getAllPosts().find(p => p.slug === s))
    .filter(Boolean)

  const faqSchema = service.faq?.length ? service.faq.map(({ q, a }) => ({ q, a })) : undefined

  return (
    <>
      <SeoHead
        title={`${service.title} — Aspen Malibu Marketing`}
        description={service.description}
        path={`/services/${service.slug}`}
        faq={faqSchema}
      />
      <div className="grain"></div>
      <Nav />
      <main>
        <section className="blog-hero">
          <div className="container">
            <div className="reveal" ref={headerRef}>
              <span className="sec-tag">Services</span>
              <h1 className="blog-hero-title">{service.headline}</h1>
              <p className="blog-hero-desc">{service.description}</p>
              <div className="blog-post-cta-actions" style={{ marginTop: 28 }}>
                <button type="button" className="btn-primary" onClick={() => setShowLead(true)}>
                  Get my free audit
                  <span className="arrow"><IconArrow /></span>
                </button>
                <a href="/#estimate" className="btn-outline">Run an estimate</a>
              </div>
            </div>
          </div>
        </section>

        <section className="service-page-body">
          <div className="container blog-post-container">
            <div className="service-features reveal" ref={bodyRef}>
              <h2 className="blog-related-title">What you get</h2>
              <ul className="service-page-list">
                {service.features.map(f => (
                  <li key={f}>{f}</li>
                ))}
              </ul>
            </div>

            <div className="blog-prose reveal in">
              {service.body.split('\n\n').map((para, i) => {
                if (para.startsWith('**') && para.includes(':**')) {
                  const [bold, rest] = para.split(':**')
                  return <p key={i}><strong>{bold.replace(/\*\*/g, '')}:</strong>{rest}</p>
                }
                return <p key={i}>{para.replace(/\*\*(.*?)\*\*/g, '$1')}</p>
              })}
            </div>

            {service.faq?.length > 0 && (
              <section className="blog-related">
                <h2 className="blog-related-title">Common questions</h2>
                <div className="blog-related-grid">
                  {service.faq.map(({ q, a }) => (
                    <div key={q} className="blog-related-card">
                      <h3>{q}</h3>
                      <p>{a}</p>
                    </div>
                  ))}
                </div>
              </section>
            )}

            {related.length > 0 && (
              <section className="blog-related">
                <h2 className="blog-related-title">Related insights</h2>
                <div className="blog-related-grid">
                  {related.map(p => (
                    <Link key={p.slug} to={`/blog/${p.slug}`} className="blog-related-card">
                      <h3>{p.title}</h3>
                      <p>{p.description}</p>
                    </Link>
                  ))}
                </div>
              </section>
            )}
          </div>
        </section>
      </main>
      <Footer />
      {showLead && <LeadCapture onClose={() => setShowLead(false)} source={`service_${service.slug}`} />}
    </>
  )
}

export { ServicePage }
