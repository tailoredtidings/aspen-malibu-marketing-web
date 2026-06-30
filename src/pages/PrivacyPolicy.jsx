import React from 'react'
import { Nav, Footer } from '../sections/process-section'
import { SeoHead } from '../components/SeoHead'

export default function PrivacyPolicy() {
  return (
    <>
      <SeoHead
        title="Privacy Policy — Aspen Malibu Marketing"
        description="How AM Marketing collects, uses, and protects personal information. Effective June 27, 2026."
        path="/privacy"
      />
      <Nav />
      <main className="legal-page">
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
              Aspen Malibu Marketing LLC ("AM Marketing", "we", "us") is committed to protecting your privacy. 
              This Policy explains how we collect, use, disclose, and safeguard information in connection with our Services.
            </p>
          </div>
        </div>

        <div className="container legal-content">
          <div className="legal-prose">

            <h2 id="1">1. Introduction</h2>
            <p>Aspen Malibu Marketing LLC d/b/a AM Marketing ("AM Marketing", "we", "us", or "our") respects your privacy and is committed to protecting personal information in connection with our digital marketing, website development, automation platforms, AI-powered services, audit and optimization tools, and related offerings (collectively, the "Services").</p>
            <p>This Privacy Policy ("Policy") explains how we collect, use, disclose, and protect information when you visit our website(s), use our self-service tools or platforms, engage us for bespoke services under a Master Services Agreement ("MSA") and Statement of Work ("SOW"), or otherwise interact with us. It applies to information we collect from clients, prospective clients, end-users of client websites/campaigns, and visitors to our sites.</p>
            <p>By using our Services, signing up for an account, submitting information, or entering into an MSA/SOW, you consent to the practices described in this Policy. If you do not agree, please do not use the Services or provide personal information.</p>

            <h2 id="2">2. Information We Collect</h2>

            <h3>2.1 Information You Provide Directly</h3>
            <p>We collect information you voluntarily provide, including:</p>
            <ul>
              <li><strong>Contact and business information:</strong> name, email, phone, company name, address, job title, industry, revenue range (for tiering).</li>
              <li><strong>Service-related information:</strong> project details, brand assets, website content/copy/images, product/service descriptions, target audiences, ad account access credentials or permissions, customer lists or lead data, existing website credentials or audits.</li>
              <li><strong>Payment information:</strong> billing address, credit card details (processed securely via Stripe or similar; we do not store full card numbers).</li>
              <li><strong>Communications:</strong> emails, messages, support tickets, feedback, survey responses, meeting notes/transcripts.</li>
              <li><strong>Account credentials:</strong> usernames/passwords for platforms we manage on your behalf — stored encrypted and accessed only as needed.</li>
              <li><strong>Self-service signup data:</strong> for self-service tiers, tool access, or free resources.</li>
            </ul>

            <h3>2.2 Information Collected Automatically</h3>
            <p>When you visit our websites or use our platforms/tools, we and our service providers may automatically collect:</p>
            <ul>
              <li>Device and usage data: IP address, browser type/version, operating system, device type, referring URLs, pages viewed, time spent, clickstream data, error logs.</li>
              <li>Cookies and similar technologies: essential cookies, analytics cookies, preference cookies. We honor Do Not Track where technically feasible.</li>
              <li>Performance and diagnostic data: for troubleshooting and improving Services.</li>
            </ul>

            <h3>2.3 Information from Third Parties and Client End-Users</h3>
            <p>We may receive information about you from third parties. When providing Services to clients, we process personal data of client end-users (visitors to client websites, leads, customers) on behalf of the client as a Data Processor.</p>

            <h2 id="3">3. How We Use Your Information</h2>
            <p>We use the information to:</p>
            <ul>
              <li>Provide, operate, maintain, and improve the Services (website development, automation platforms, advertising management, AI-powered tools, audits, reporting, and strategy).</li>
              <li>Onboard clients, scope and deliver SOWs, manage accounts, and fulfill contractual obligations.</li>
              <li>Process payments, prevent fraud, and manage billing/subscriptions (including 3-month minimum commitments).</li>
              <li>Communicate about projects, changes, support, billing, and marketing (opt-out available for promotional).</li>
              <li>Personalize experiences, develop new features, and perform internal analytics.</li>
              <li>Ensure security, integrity, and compliance.</li>
              <li>Enforce our Terms, MSA, SOWs, and protect rights/property/safety.</li>
              <li>For AI-powered features: process prompts/content; usage logged for billing and quality. We do not use client data to train foundation models without explicit consent.</li>
            </ul>
            <p>We do not sell personal information. We do not share for cross-context behavioral advertising without proper disclosure/opt-out.</p>

            <h2 id="4">4. Legal Bases for Processing (GDPR/UK GDPR &amp; Similar)</h2>
            <p>Where applicable, we rely on: (a) performance of contract; (b) legitimate interests (improving Services, security, direct marketing with easy opt-out); (c) consent; (d) legal obligation.</p>

            <h2 id="5">5. How We Share and Disclose Information</h2>

            <h3>5.1 Service Providers and Technology Partners</h3>
            <p>We share information with trusted service providers who assist in delivering the Services under appropriate confidentiality and data protection contracts (including SCCs where required). Categories include CRM/automation platforms, hosting, AI processing, payment processing, analytics, and professional services.</p>

            <h3>5.2 Other Disclosures</h3>
            <ul>
              <li>Legal &amp; Safety: to comply with law, protect rights, enforce agreements, detect fraud.</li>
              <li>Business Transfers: in connection with merger, acquisition, or sale of assets.</li>
              <li>With Client Consent or Direction.</li>
              <li>Aggregated/Anonymized Data: for analytics, benchmarking, and research.</li>
            </ul>

            <h2 id="6">6. Data Controller &amp; Processor Roles</h2>
            <p><strong>For Personal Data Processed in Delivering Services to You:</strong> You (the Client) are the Data Controller. We act as your Data Processor. We process only on your documented instructions per the MSA/SOW and any DPA.</p>
            <p><strong>For Data We Collect Directly:</strong> We are the Data Controller.</p>
            <p>We do not intentionally collect sensitive personal information (health, precise geolocation, biometrics, children's data) unless necessary and agreed in writing for a specific SOW.</p>

            <h2 id="7">7. Your Privacy Rights</h2>
            <p>Depending on your location, you may have rights to access, delete, correct, port, opt-out/object, withdraw consent, and non-discrimination. Email <a href="mailto:privacy@aspenmalibumarketing.com">privacy@aspenmalibumarketing.com</a> with "Privacy Rights Request". We respond within legal timelines.</p>
            <p>If your data is processed on behalf of a client, please contact that client directly.</p>

            <h2 id="8">8. Security</h2>
            <p>We implement reasonable technical, organizational, and administrative measures (TLS encryption, access controls, least privilege, assessments, training, vendor due diligence). No method is 100% secure. Notify us immediately of suspected unauthorized access.</p>

            <h2 id="9">9. Data Retention</h2>
            <p>We retain information as long as necessary to provide the Services, comply with legal obligations, resolve disputes, and support legitimate business interests. We delete or anonymize data upon request or at end of retention (subject to MSA wind-down terms).</p>

            <h2 id="10">10. International Data Transfers</h2>
            <p>Information may be transferred to and processed in the US and other countries. Where required (e.g., GDPR), we use Standard Contractual Clauses or other appropriate safeguards.</p>

            <h2 id="11">11. Children's Privacy</h2>
            <p>Our Services are not directed to children under 13. We do not knowingly collect such data. For client campaigns involving minors, you (Client) are responsible for COPPA compliance.</p>

            <h2 id="12">12. Changes to This Policy</h2>
            <p>We may update this Policy from time to time. We will post the updated version with a new Effective Date. Material changes will be noticed via email or prominent site notice at least 30 days in advance where required. Continued use constitutes acceptance.</p>

            <h2 id="13">13. Contact Us</h2>
            <p>If you have questions or requests about this Policy:</p>
            <address>
              Aspen Malibu Marketing LLC d/b/a AM Marketing<br />
              Attn: Privacy Team<br />
              1011 44th Ave N, Unit 6<br />
              Nashville, TN 37209<br />
              Email: <a href="mailto:privacy@aspenmalibumarketing.com">privacy@aspenmalibumarketing.com</a><br />
              Business Phone: (248) 535-7383<br />
              Website: <a href="https://www.aspenmalibumarketing.com">aspenmalibumarketing.com</a>
            </address>
            <p>We will respond promptly. EEA/UK residents may also contact your local supervisory authority.</p>

            <div className="legal-footer-note">
              <hr />
              <p><small>Last Updated: June 30, 2026 | Version 1.0</small></p>
              <p><small>This Privacy Policy is incorporated by reference into our Master Services Agreement, Statements of Work, and Terms of Service (where applicable).</small></p>
            </div>

          </div>
        </div>
      </main>
      <Footer />
    </>
  )
}
