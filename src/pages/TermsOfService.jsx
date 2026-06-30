import React from 'react'
import { Nav, Footer } from '../sections/process-section'
import { SeoHead } from '../components/SeoHead'

export default function TermsOfService() {
  return (
    <>
      <SeoHead
        title="Terms of Service — Aspen Malibu Marketing (Self-Service)"
        description="Self-Service Terms of Service for AM Marketing's automation platform, tools, and resources. Effective June 27, 2026."
        path="/terms"
      />
      <Nav />
      <main className="legal-page">
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
              These Terms govern your access to and use of AM Marketing's self-service offerings, including automation platform access, audit tools, and related resources.
            </p>
          </div>
        </div>

        <div className="container legal-content">
          <div className="legal-prose">

            <h2 id="1">1. Acceptance of Terms</h2>
            <p>These Self-Service Terms of Service ("ToS" or "Terms") govern your access to and use of AM Marketing's self-service offerings, including but not limited to self-service tiers (automation platform access or equivalent), audit and optimization tool access, tool portals, free/paid resources, templates, and any related websites, dashboards, or APIs (collectively, the "Self-Service Services" or "Platform").</p>
            <p>By creating an account, clicking "I Agree", "Sign Up", or similar, accessing or using any part of the Platform, or submitting payment, you ("User", "you", or "your") agree to be bound by these Terms, our Privacy Policy, and any applicable order form, pricing page, or SOW (if you later upgrade to bespoke services). If you do not agree, do not use the Platform.</p>
            <p>These Terms are a legally binding agreement between you and Aspen Malibu Marketing LLC d/b/a AM Marketing ("AM Marketing", "we", "us", or "our"). If you are using on behalf of an entity, you represent you have authority to bind that entity.</p>

            <h2 id="2">2. Eligibility &amp; Accounts</h2>
            <p>You must be at least 18 years old and capable of forming a binding contract. Accounts are for business/professional use. You are responsible for all activity under your account, maintaining password security, and notifying us immediately of unauthorized use. We may suspend or terminate accounts for violation of these Terms, suspected fraud, or at our discretion (with refund of prepaid unused periods where required by law). One account per User/entity unless otherwise approved.</p>

            <h2 id="3">3. Description of Self-Service Services</h2>
            <p>The Platform provides self-managed access to digital marketing tools and platforms, including:</p>
            <ul>
              <li><strong>Self-service tiers:</strong> automation platform access or equivalent, with varying features based on your selected tier (Small Business under $1M revenue, Growth $1-5M, Scale $5-15M, Enterprise $15M+). Includes CRM, funnels, email/SMS, workflows, reporting per published feature list.</li>
              <li><strong>Audit and optimization tools:</strong> one-time or monthly access for analysis, optimization recommendations, and reporting via our tools or integrated portal.</li>
              <li><strong>Other tools/resources:</strong> Launch Accelerator assets (if purchased), templates, training materials, or AI-assisted self-serve features as described at signup or in your dashboard.</li>
              <li><strong>Support:</strong> Self-service knowledge base, email/ticket support (response within 2 business days typical), community/forum if available. No dedicated account manager or strategy calls (those are available under Bespoke Managed SOWs).</li>
            </ul>
            <p>Features, limits, and pricing are as published on our pricing page or at signup and may change with notice. We reserve the right to modify, suspend, or discontinue any feature with reasonable notice (or immediately for security/legal reasons).</p>

            <h2 id="4">4. Fees, Billing &amp; 3-Month Minimum Commitment</h2>
            <p><strong>Pricing:</strong> One-time setup fees and recurring monthly subscriptions are as quoted at signup or in your order confirmation, aligned with our published tiers (e.g., Straight SaaS Growth: $8,995 one-time + $1,997/month). Add-ons (e.g., Premium AI usage at cost + 100%, extra audits) billed separately.</p>
            <p><strong>Payment:</strong> One-time fees: 50% due at signup/ordering, 50% due upon delivery/activation (or as specified). Monthly recurring: billed in advance on the 1st of each month (or prorated for partial first month). We accept credit card, ACH, or other approved methods via Stripe or invoice. You authorize us to charge your provided payment method.</p>
            <p><strong>3-Month Minimum Commitment:</strong> All monthly subscription plans require a minimum initial commitment of three (3) full calendar months from the activation/start date. You may cancel at any time after the minimum term with thirty (30) days' prior written notice (email to support@aspenmalibumarketing.com or via account portal). Early termination before the minimum term obligates you to pay the remaining monthly fees for the unexpired portion of the minimum term. No refunds for setup fees or partially used months after the minimum term. Annual prepay discounts (8–10%) may be available and are non-refundable except as required by law.</p>
            <p><strong>Late Payments:</strong> Invoices not paid when due accrue late fees of 5% of the outstanding balance after 7 days past due, and an additional 10% after 14 days past due (or the maximum permitted by law). We may suspend access for non-payment after reasonable notice. You are responsible for all collection costs and reasonable attorneys' fees.</p>
            <p><strong>Taxes:</strong> You are responsible for all applicable taxes, duties, or similar charges (excluding taxes on our net income).</p>

            <h2 id="5">5. Intellectual Property Rights</h2>
            <p><strong>Our IP:</strong> We (and our licensors) retain all right, title, and interest in and to the Platform, including software, code, designs, templates (automation and website platforms, AI prompts/models), methodologies, audit and optimization tools and reports (except your specific data), trademarks, and any improvements or derivatives. Subject to these Terms and payment of applicable fees, we grant you a limited, non-exclusive, non-transferable, non-sublicensable, revocable license to access and use the Platform solely for your internal business purposes during the subscription term.</p>
            <p><strong>Your Content &amp; Data:</strong> You retain ownership of your content, data, leads, customer information, ad creatives, and materials you upload or provide ("Your Content"). You grant us a worldwide, non-exclusive, royalty-free license to use, host, store, reproduce, modify (e.g., format for platform), and display Your Content solely as necessary to provide the Services and improve the Platform (e.g., aggregated/anonymized analytics). You represent you have all rights necessary to grant this license and that Your Content does not infringe third-party rights or violate law.</p>
            <p><strong>Feedback:</strong> Any feedback, suggestions, or ideas you provide become our property without compensation or attribution obligation.</p>
            <p><strong>Portfolio:</strong> We may use anonymized or aggregated results, or (with your prior written consent or opt-in) case studies featuring your brand for marketing/portfolio purposes.</p>

            <h2 id="6">6. User Conduct &amp; Prohibited Uses</h2>
            <p>You agree not to (and not to permit others to):</p>
            <ul>
              <li>Use the Platform for any illegal purpose or in violation of any law (including spam laws, FTC/advertising regulations, data privacy laws, export controls).</li>
              <li>Upload, transmit, or store content that is infringing, defamatory, obscene, harassing, fraudulent, or otherwise harmful.</li>
              <li>Reverse engineer, decompile, disassemble, or attempt to derive source code from the Platform (except to the limited extent permitted by law).</li>
              <li>Bypass security, access controls, or rate limits; probe, scan, or test vulnerability.</li>
              <li>Interfere with or disrupt the Platform, servers, or networks (e.g., DDoS, excessive load).</li>
              <li>Use automated means (bots, scrapers) to access the Platform without our written authorization.</li>
              <li>Resell, sublicense, rent, lease, or provide access to the Platform to third parties (white-label or agency use requires a separate Bespoke Managed agreement).</li>
              <li>Impersonate any person/entity or misrepresent affiliation.</li>
              <li>Use the Platform to send unsolicited commercial email/SMS or violate third-party platform terms.</li>
              <li>Share account credentials or allow multiple users on a single login unless permitted by your tier.</li>
            </ul>
            <p>We may monitor usage for compliance and security. Violations may result in immediate suspension/termination without refund and potential legal action.</p>

            <h2 id="7">7. Disclaimers &amp; No Warranty</h2>
            <p>THE PLATFORM AND SERVICES ARE PROVIDED "AS IS" AND "AS AVAILABLE" WITHOUT WARRANTIES OF ANY KIND, EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, OR THAT THE PLATFORM WILL BE UNINTERRUPTED, ERROR-FREE, SECURE, OR MEET YOUR EXPECTATIONS/RESULTS. WE DO NOT WARRANT THAT AI OUTPUTS, AUDIT RECOMMENDATIONS, OR AUTOMATIONS WILL BE ACCURATE, COMPLETE, OR ACHIEVE ANY PARTICULAR ROI, CONVERSION RATE, OR BUSINESS OUTCOME. YOU ACKNOWLEDGE MARKETING RESULTS DEPEND ON MANY FACTORS BEYOND OUR CONTROL (YOUR OFFER, CREATIVE, MARKET, COMPETITION, ETC.).</p>
            <p>Some jurisdictions do not allow exclusion of certain warranties; in those cases, the above limitations apply to the maximum extent permitted.</p>

            <h2 id="8">8. Limitation of Liability</h2>
            <p>TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL AM MARKETING OR ITS OFFICERS, DIRECTORS, EMPLOYEES, AGENTS, OR AFFILIATES BE LIABLE FOR ANY INDIRECT, INCIDENTAL, SPECIAL, CONSEQUENTIAL, PUNITIVE, OR EXEMPLARY DAMAGES (INCLUDING LOST PROFITS, REVENUE, DATA, GOODWILL, OR BUSINESS INTERRUPTION), WHETHER BASED ON CONTRACT, TORT (INCLUDING NEGLIGENCE), STRICT LIABILITY, OR ANY OTHER THEORY, EVEN IF ADVISED OF THE POSSIBILITY.</p>
            <p>OUR TOTAL AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THESE TERMS OR THE PLATFORM SHALL NOT EXCEED THE TOTAL FEES PAID BY YOU TO US FOR THE SELF-SERVICE SERVICES IN THE TWELVE (12) MONTHS PRECEDING THE CLAIM. THE FOREGOING CAP AND EXCLUSIONS SHALL NOT APPLY TO OUR GROSS NEGLIGENCE, WILLFUL MISCONDUCT, FRAUD, OR IP INFRINGEMENT CLAIMS TO THE EXTENT NOT EXCLUDABLE BY LAW.</p>

            <h2 id="9">9. Indemnification</h2>
            <p>You agree to indemnify, defend, and hold harmless AM Marketing and its affiliates, officers, directors, employees, and agents from and against any claims, damages, losses, liabilities, costs, and expenses (including reasonable attorneys' fees) arising out of or related to: (a) your use of the Platform or violation of these Terms; (b) Your Content or data; (c) your violation of any third-party right (IP, privacy, publicity) or applicable law; (d) your ad campaigns, offers, or claims made to end-users; (e) any dispute with your customers or end-users.</p>

            <h2 id="10">10. Term &amp; Termination</h2>
            <p><strong>Term:</strong> These Terms begin upon your acceptance or first use and continue until terminated by either party.</p>
            <p><strong>Termination by You:</strong> You may cancel your subscription after completing the 3-month minimum commitment by providing 30 days' prior written notice via account settings, email to support, or portal. You remain responsible for all fees through the end of the notice period and any unpaid minimum term amounts. Upon cancellation, access continues through the paid period; data export may be available for a limited time (typically 30 days) per our standard export formats.</p>
            <p><strong>Termination/Suspension by Us:</strong> We may terminate or suspend your access immediately (with or without notice) for breach of these Terms, non-payment, suspected illegal/fraudulent activity, or to protect the Platform/others. We may also terminate for convenience with 30 days' notice. Upon termination, your license ends, and we may delete your data after any applicable retention/export window (subject to MSA wind-down if you have active bespoke SOWs).</p>
            <p><strong>Survival:</strong> Sections on IP, disclaimers, liability, indemnity, governing law, and any accrued payment obligations survive termination.</p>

            <h2 id="11">11. Governing Law, Venue &amp; Dispute Resolution</h2>
            <p>These Terms and any dispute arising out of or relating to them or the Platform shall be governed by and construed in accordance with the laws of the State of Florida, without regard to its conflict of laws principles. The United Nations Convention on Contracts for the International Sale of Goods does not apply.</p>
            <p>Any legal action or proceeding shall be brought exclusively in the state or federal courts located in Miami-Dade County, Florida, and you consent to personal jurisdiction and venue there. Notwithstanding the foregoing, either party may seek injunctive or other equitable relief in any court of competent jurisdiction to protect IP or confidential information.</p>
            <p><strong>Arbitration (Optional for Consumer Claims):</strong> For disputes under $10,000 not involving IP or injunctive relief, either party may elect binding arbitration administered by AAA under its Commercial Arbitration Rules in Miami, FL before a single arbitrator. Judgment on the award may be entered in any court. Each party bears its own costs. No class actions or consolidated proceedings. This does not prevent either party from seeking small claims court relief where available.</p>

            <h2 id="12">12. Miscellaneous</h2>
            <ul>
              <li><strong>Entire Agreement:</strong> These Terms, Privacy Policy, any order confirmation, and (if applicable) MSA/SOW constitute the entire agreement and supersede all prior negotiations, representations, or agreements relating to the subject matter.</li>
              <li><strong>Amendments:</strong> We may update these Terms with notice (posted on site or emailed). Material changes effective 30 days after notice (or upon renewal). Your continued use after effective date binds you to updated Terms.</li>
              <li><strong>Severability:</strong> If any provision is held invalid or unenforceable, the remainder remains in effect; invalid provision modified to minimum extent necessary to make valid.</li>
              <li><strong>Waiver:</strong> No waiver of any breach constitutes waiver of any other or subsequent breach. Failure to enforce is not a waiver.</li>
              <li><strong>Assignment:</strong> You may not assign or transfer these Terms or rights without our prior written consent. We may assign to an affiliate or successor. These Terms bind and benefit permitted successors.</li>
              <li><strong>Notices:</strong> To you: email on file or in-app. To us: support@aspenmalibumarketing.com or the address in Privacy Policy. Effective upon receipt or 1 business day after send.</li>
              <li><strong>Force Majeure:</strong> Neither party liable for delays/failures due to causes beyond reasonable control.</li>
              <li><strong>Export:</strong> You represent you are not on any denied party list and will comply with US export laws.</li>
              <li><strong>Relationship:</strong> Independent contractors. No partnership, joint venture, agency, or employment created.</li>
              <li><strong>No Third-Party Beneficiaries:</strong> Except as expressly provided, nothing creates rights for third parties.</li>
              <li><strong>Electronic Communications:</strong> You consent to receive communications electronically (email, in-app, SMS if opted in). Electronic signatures/notices have full legal effect.</li>
            </ul>

            <h2 id="13">13. Contact</h2>
            <p>Questions about these Terms? Contact us at <a href="mailto:support@aspenmalibumarketing.com">support@aspenmalibumarketing.com</a> or the address in our Privacy Policy. For legal notices: <a href="mailto:legal@aspenmalibumarketing.com">legal@aspenmalibumarketing.com</a>.</p>

            <div className="legal-footer-note">
              <hr />
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
