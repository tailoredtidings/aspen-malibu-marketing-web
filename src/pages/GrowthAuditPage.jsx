import React from 'react'
import { Link } from 'react-router-dom'
import { LeadCapture } from '../components/lead-capture'
import { SeoHead } from '../components/SeoHead'

/**
 * Hidden email-funnel landing page for the Free Growth Audit form.
 * Direct link only — not linked from nav, sitemap, or site chrome.
 * Path: /free-growth-audit
 */
export default function GrowthAuditPage() {
  return (
    <>
      <SeoHead
        title="Free Growth Audit — Aspen Malibu Marketing"
        description="Request a free growth audit. We'll review your funnel, ads, and website — then send a short video showing where you're losing revenue and how to fix it."
        path="/free-growth-audit"
        noindex
      />
      <div className="grain" aria-hidden="true" />
      <div className="funnel-page">
        <header className="funnel-header">
          <Link to="/" className="funnel-logo" aria-label="Aspen Malibu Marketing home">
            <img src="/assets/am-logo.png" alt="" width="36" height="36" />
            <span className="nav-logo-text">Aspen<em>Malibu</em></span>
          </Link>
        </header>

        <main className="funnel-main">
          <LeadCapture embedded source="email_funnel" />
        </main>

        <footer className="funnel-footer">
          <p>
            Aspen Malibu Marketing ·{' '}
            <a href="mailto:partners@aspenmalibumarketing.com">partners@aspenmalibumarketing.com</a>
            {' · '}
            <a href="tel:+17542582106">(754) 258-2106</a>
          </p>
        </footer>
      </div>
    </>
  )
}
