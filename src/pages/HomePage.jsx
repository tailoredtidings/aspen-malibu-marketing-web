import React from 'react'
import { useReveal } from '../hooks/useReveal'
import { IconArrow } from '../components/icons'
import { LeadCapture } from '../components/lead-capture'

/* ===== FLOATING CTA ===== */
function FloatingCta() {
  const [visible, setVisible] = React.useState(false)
  const [showLead, setShowLead] = React.useState(false)

  React.useEffect(() => {
    const onScroll = () => setVisible(window.scrollY > window.innerHeight * 0.6)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <>
      {showLead && <LeadCapture onClose={() => setShowLead(false)} source="floating_cta" />}
      <button
        className="floating-cta"
        style={{
          padding: '14px 24px', background: 'var(--ink)', color: 'var(--paper)',
          borderRadius: 100, fontSize: 14, fontWeight: 500, letterSpacing: '-0.005em',
          display: 'flex', alignItems: 'center', gap: 8,
          boxShadow: 'var(--shadow-lg)', border: 'none', cursor: 'pointer',
          transition: 'all .4s cubic-bezier(.22,1,.36,1)',
          transform: visible ? 'translateY(0) scale(1)' : 'translateY(80px) scale(0.9)',
          opacity: visible ? 1 : 0, pointerEvents: visible ? 'auto' : 'none',
        }}
        onClick={() => setShowLead(true)}
      >
        Book Free Audit
        <IconArrow size={12} stroke={1.5} />
      </button>
    </>
  )
}

import { Nav, Hero, LogoStrip, Manifesto } from '../sections/hero-section'
import { AIEngine, Capabilities } from '../sections/ai-section'
import { Services, Testimonials, Campaigns } from '../sections/services-section'
import { Tiers } from '../sections/tiers-section'
import { Estimate } from '../sections/estimate-section'
import { Process, Metrics, FAQ, CTA, Footer } from '../sections/process-section'
import { SeoHead } from '../components/SeoHead'

export default function HomePage() {
  return (
    <>
      <SeoHead />
      <div className="grain"></div>
      <FloatingCta />
      <Nav />
      <main>
        <Hero />
        <LogoStrip />
        <Manifesto />
        <AIEngine />
        <Capabilities />
        <Services />
        <Tiers />
        <Estimate />
        <Process />
        <Testimonials />
        <Metrics />
        <Campaigns />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
