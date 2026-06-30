import React from 'react'
import { Nav, Footer } from '../sections/process-section'
import { SeoHead } from '../components/SeoHead'

export default function PrivacyPolicy() {
  return (
    <>
      <SeoHead
        title="Privacy Policy — Aspen Malibu Marketing"
        description="How AM Marketing collects, uses, and protects personal information in connection with our growth systems and services. Effective June 27, 2026."
        path="/privacy"
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
          .legal-prose address { font-style: normal; margin: 16px 0; line-height: 1.6; }
          .legal-footer-note { margin-top: 80px; padding-top: 32px; border-top: 1px solid var(--line); font-size: 13px; color: var(--ink-3); }
          .legal-footer-note hr { display: none; }
          @media (max-width: 640px) { .legal-prose { font-size: 15.5px; } .legal-hero { padding: 80px 0 60px; } }
        `}</style>

        <div className="legal-hero">
          <div className="container">
            <span className="sec-tag">Legal</span>
            <h1 className="legal-title">Privacy Policy</h1>
            <div className="legal-meta">
              <span>Effective Date: June 27, 2026</span>
              <span className="dot">•</span>
              <span>Version 1.0</span>
            </div>
            <p className="legal-intro">
              Aspen Malibu Marketing LLC ("AM Marketing", "we", "us") respects your privacy and is committed to protecting personal information in connection with our Services.
            </p>
          </div>
        </div>

        <div className="container legal-content">
          <div className="legal-prose">

            <h2 id="introduction">1. Introduction</h2>
            <p>Aspen Malibu Marketing LLC d/b/a AM Marketing ("AM Marketing", "we", "us", or "our") respects your privacy and is committed to protecting personal information in connection with our digital marketing, website development, automation platforms, AI-powered services, audit and optimization tools, and related offerings (collectively, the "Services").</p>
            <p>This Privacy Policy ("Policy") explains how we collect, use, disclose, and protect information when you visit our website(s), use our self-service tools or platforms, engage us for bespoke services under a Master Services Agreement ("MSA") and Statement of Work ("SOW"), or otherwise interact with us. It applies to information we collect from clients, prospective clients, end-users of client websites/campaigns, and visitors to our sites.</p>
            <p>By using our Services, signing up for an account, submitting information, or entering into an MSA/SOW, you consent to the practices described in this Policy. If you do not agree, please do not use the Services or provide personal information.</p>

            <h2 id="collect">2. Information We Collect</h2>

            <h3>2.1 Information You Provide Directly</h3>
            <p>We collect information you voluntarily provide, including:</p>
            <ul>
              <li><strong>Contact and business information:</strong> name, email, phone, company name, address, job title, industry, revenue range (for tiering).</li>
              <li><strong>Service-related information:</strong> project details, brand assets, website content/copy/images, product/service descriptions, target audiences, ad account access credentials or permissions (for managed advertising services), customer lists or lead data for import into our automation platforms or other systems, existing website credentials or audits.</li>
              <li><strong>Payment information:</strong> billing address, credit card details (processed securely via Stripe or similar; we do not store full card numbers).</li>
              <li><strong>Communications:</strong> emails, messages, support tickets, feedback, survey responses, meeting notes/transcripts.</li>
              <li><strong>Account credentials:</strong> usernames/passwords for platforms we manage on your behalf — stored encrypted and accessed only as needed for service delivery.</li>
              <li><strong>Self-service signup data:</strong> for self-service tiers, tool access, or free resources.</li>
            </ul>

            <h3>2.2 Information Collected Automatically</h3>
            <p>When you visit our websites or use our platforms/tools, we and our service providers may automatically collect device and usage data (IP, browser, pages viewed, etc.), cookies and similar technologies (we honor Do Not Track where feasible), and performance/diagnostic data.</p>

            <h3>2.3 Information from Third Parties and Client End-Users</h3>
            <p>We may receive information from third parties. When delivering Services, we process personal data of client end-users on behalf of the client (as Processor).</p>

            <h2 id="use">3. How We Use Your Information</h2>
            <p>We use the information to provide and improve the Services, onboard and fulfill contracts, process payments, communicate, personalize, ensure security and compliance, enforce agreements, and support AI features (with logged usage and no training of foundation models without consent). We do not sell personal information.</p>

            <h2 id="legal">4. Legal Bases for Processing</h2>
            <p>Where applicable (GDPR/UK GDPR), we rely on contract performance, legitimate interests, consent, or legal obligation.</p>

            <h2 id="share">5. How We Share and Disclose Information</h2>
            <p>We share with trusted service providers under contract (CRM, hosting, AI, payments, analytics, etc.). Other disclosures: legal/safety requirements, business transfers, client direction, and aggregated/anonymized data.</p>

            <h2 id="roles">6. Data Controller &amp; Processor Roles</h2>
            <p><strong>For client data in service delivery:</strong> You are Controller; we are Processor (per MSA/SOW + DPA).</p>
            <p><strong>For data we collect directly:</strong> We are Controller.</p>
            <p>We avoid sensitive data unless explicitly required and agreed for a specific engagement.</p>

            <h2 id="rights">7. Your Privacy Rights</h2>
            <p>You may have rights to access, delete, correct, port, opt-out, and more (depending on jurisdiction). Email <a href="mailto:privacy@aspenmalibumarketing.com">privacy@aspenmalibumarketing.com</a> with "Privacy Rights Request". We respond per legal timelines. Client end-user data requests should go to the client.</p>

            <h2 id="security">8. Security</h2>
            <p>We use reasonable measures (encryption in transit, access controls, assessments, training). No system is 100% secure. Report suspected issues immediately.</p>

            <h2 id="retention">9. Data Retention</h2>
            <p>We retain data as long as needed for the Services, legal obligations, disputes, and legitimate interests, then delete or anonymize (subject to contract wind-down).</p>

            <h2 id="transfers">10. International Data Transfers</h2>
            <p>Data may be processed in the US and other countries. We use appropriate safeguards (e.g. SCCs) where required.</p>

            <h2 id="children">11. Children's Privacy</h2>
            <p>Services are not directed to children under 13. Clients are responsible for compliance on campaigns involving minors.</p>

            <h2 id="changes">12. Changes to This Policy</h2>
            <p>We may update the Policy. Material changes will be noticed in advance (email or site notice). Continued use after the Effective Date means acceptance.</p>

            <h2 id="contact">13. Contact Us</h2>
            <address>
              Aspen Malibu Marketing LLC d/b/a AM Marketing<br/>
              Attn: Privacy Team<br/>
              1011 44th Ave N, Unit 6<br/>
              Nashville, TN 37209<br/>
              Email: <a href="mailto:privacy@aspenmalibumarketing.com">privacy@aspenmalibumarketing.com</a><br/>
              Business Phone: (248) 535-7383<br/>
              <a href="https://www.aspenmalibumarketing.com">aspenmalibumarketing.com</a>
            </address>

            <div className="legal-footer-note">
              <p><small>Last Updated: June 30, 2026 • Version 1.0</small></p>
              <p><small>This Privacy Policy is incorporated by reference into our Master Services Agreement, Statements of Work, and Terms of Service (where applicable). In the event of conflict, the MSA/SOW or ToS shall control for the specific engagement, supplemented by this Policy and any DPA.</small></p>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
