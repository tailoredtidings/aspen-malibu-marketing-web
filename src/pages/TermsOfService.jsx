import React from 'react'
import { Nav } from '../sections/hero-section'
import { Footer } from '../sections/process-section'
import { SeoHead } from '../components/SeoHead'

export default function TermsOfService() {
  return (
    <>
      <SeoHead
        title="Terms of Service — Aspen Malibu Marketing (Self-Service)"
        description="Self-Service Terms of Service governing use of AM Marketing's automation platform, audit tools, and self-service resources. Effective June 27, 2026."
        path="/terms"
      />
      <Nav />
      <main>
        <style>{
          `.legal-hero { padding: 120px 0 80px; background: var(--paper-2); border-bottom: 1px solid var(--line); }
          .legal-title { font-family: 'Instrument Serif', serif; font-size: clamp(42px, 5.2vw, 72px); font-weight: 400; line-height: 1.05; letter-spacing: -0.035em; }
          .legal-meta { display: flex; gap: 12px; align-items: center; margin: 16px 0 32px; font-size: 13px; color: var(--ink-3); font-family: 'Geist Mono', monospace; letter-spacing: 0.04em; }
          .legal-meta .dot { opacity: 0.4; }
          .legal-intro { font-size: 17px; max-width: 620px; color: var(--ink-3); }
          .legal-content { padding: 80px 0 120px; }
          .legal-prose { max-width: 720px; margin: 0 auto; font-size: 16.5px; line-height: 1.72; }
          .legal-prose h2 { font-family: 'Instrument Serif', serif; font-size: 28px; margin: 48px 0 16px; letter-spacing: -0.02em; color: var(--ink); }
          .legal-prose h3 { font-size: 18px; margin: 32px 0 12px; font-weight: 600; color: var(--ink); }
          .legal-prose p { margin-bottom: 18px; color: var(--ink-2); }
          .legal-prose ul { margin: 16px 0 24px 20px; }
          .legal-prose li { margin-bottom: 8px; }
          .legal-prose strong { color: var(--ink); font-weight: 600; }
          .legal-footer-note { margin-top: 80px; padding-top: 32px; border-top: 1px solid var(--line); font-size: 13px; color: var(--ink-3); }
          .legal-footer-note hr { display: none; }
          @media (max-width: 640px) { .legal-prose { font-size: 15.5px; } .legal-hero { padding: 80px 0 60px; } }
        `}</style>

        <div className="legal-hero">
          <div className="container">
            <span className="sec-tag">Legal</span>
            <h1 className="legal-title">Self-Service Terms of Service</h1>
            <div className="legal-meta">
              <span>Effective Date: June 27, 2026</span>
              <span className="dot">•</span>
              <span>Version 1.0 (Hybrid SaaS)</span>
            </div>
            <p className="legal-intro">
              These Terms govern your access to and use of AM Marketing's self-service offerings, including automation platform access, audit and optimization tools, and related resources.
            </p>
          </div>
        </div>

        <div className="container legal-content">
          <div className="legal-prose">

            <h2 id="acceptance">1. Acceptance of Terms</h2>
            <p>These Self-Service Terms of Service ("ToS" or "Terms") govern your access to and use of AM Marketing's self-service offerings, including but not limited to self-service tiers (automation platform access or equivalent), audit and optimization tool access, tool portals, free/paid resources, templates, and any related websites, dashboards, or APIs (collectively, the "Self-Service Services" or "Platform").</p>
            <p>By creating an account, clicking "I Agree", "Sign Up", or similar, accessing or using any part of the Platform, or submitting payment, you ("User", "you", or "your") agree to be bound by these Terms, our Privacy Policy, and any applicable order form, pricing page, or SOW. If you do not agree, do not use the Platform.</p>
            <p>These Terms are a legally binding agreement between you and Aspen Malibu Marketing LLC d/b/a AM Marketing ("AM Marketing", "we", "us", or "our").</p>

            <h2 id="eligibility">2. Eligibility &amp; Accounts</h2>
            <p>You must be at least 18 years old and capable of forming a binding contract. Accounts are for business/professional use. You are responsible for all activity under your account and for maintaining security of your credentials.</p>

            <h2 id="services">3. Description of Self-Service Services</h2>
            <p>The Platform provides self-managed access to digital marketing tools including self-service automation tiers (CRM, funnels, email/SMS, workflows, reporting), audit and optimization tools, and related resources and support (self-service knowledge base and standard ticket support; dedicated strategy is available under Bespoke engagements).</p>

            <h2 id="fees">4. Fees, Billing &amp; 3-Month Minimum Commitment</h2>
            <p>One-time setup and recurring monthly fees are as published at signup. Monthly plans require a 3-month minimum commitment. You may cancel after the minimum with 30 days' notice. Early termination before the minimum obligates payment of remaining minimum term fees. No refunds for setup or used periods after the minimum (except as required by law).</p>

            <h2 id="ip">5. Intellectual Property Rights</h2>
            <p>We retain all rights in the Platform. You receive a limited license for internal business use during the term. You own Your Content; you grant us the license necessary to deliver and improve the Services.</p>

            <h2 id="conduct">6. User Conduct &amp; Prohibited Uses</h2>
            <p>Do not use the Platform for illegal purposes, to upload harmful content, reverse engineer the software, bypass security, resell access (white-label requires separate agreement), or violate platform terms of our upstream providers.</p>

            <h2 id="disclaimer">7. Disclaimers &amp; No Warranty</h2>
            <p>THE PLATFORM IS PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND. WE DO NOT WARRANT SPECIFIC RESULTS FROM AI, AUDITS, OR AUTOMATIONS. Marketing outcomes depend on many factors outside our control.</p>

            <h2 id="liability">8. Limitation of Liability</h2>
            <p>To the maximum extent permitted by law, our total liability shall not exceed fees paid by you for the Self-Service Services in the preceding 12 months. Certain damages (indirect, consequential, etc.) are excluded except in cases of gross negligence, willful misconduct, fraud, or IP claims where not excludable.</p>

            <h2 id="indemnity">9. Indemnification</h2>
            <p>You agree to indemnify AM Marketing against claims arising from your use of the Platform, Your Content, violation of law or third-party rights, or your advertising/claims to end users.</p>

            <h2 id="term">10. Term &amp; Termination</h2>
            <p>Terms begin on first use. You may cancel after the minimum term with 30 days notice. We may suspend or terminate for breach, non-payment, or to protect the service. Data export windows apply post-cancellation.</p>

            <h2 id="law">11. Governing Law, Venue &amp; Dispute Resolution</h2>
            <p>Governed by the laws of the State of Florida. Exclusive venue in Miami-Dade County courts. Limited optional arbitration for small consumer claims; no class actions.</p>

            <h2 id="misc">12. Miscellaneous</h2>
            <p>These Terms + Privacy Policy + any order form/ SOW form the entire agreement. We may update with notice (material changes 30 days). Severability, no waiver, assignment restrictions, force majeure, independent contractor status, and electronic communications acceptance apply.</p>

            <h2 id="contact-terms">13. Contact</h2>
            <p>Questions? Email <a href="mailto:support@aspenmalibumarketing.com">support@aspenmalibumarketing.com</a>. Legal notices: <a href="mailto:legal@aspenmalibumarketing.com">legal@aspenmalibumarketing.com</a>.</p>

            <div className="legal-footer-note">
              <p><small>These Self-Service Terms of Service are effective as of the date you first access or use the Platform.</small></p>
              <p><small>For bespoke managed services, website builds, ad management, or custom work, a separate Master Services Agreement and Statement of Work apply and control.</small></p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
