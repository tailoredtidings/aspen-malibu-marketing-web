import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { useReveal } from '../hooks/useReveal'
import { IconArrow, IconArrowSmall, IconClose, IconCheck, IconBack, IconPlus, IconTick } from '../components/icons'
import { LeadCapture } from '../components/lead-capture'

/* ===== PROCESS ===== */
const PROCESS_STEPS = [
  { n: 'STEP 01', t: <>Find the <em>leaks</em></>, d: 'Forensic audit of your funnel, ad accounts, and website. We find exactly where you are losing revenue — including hidden ad waste most agencies miss. You get a video breakdown — not a deck.' },
  { n: 'STEP 02', t: <>Build the <em>machine</em></>, d: 'A high-converting site and funnel, wired into CRM, automation, and AI — so every visitor has a path to becoming a customer.' },
  { n: 'STEP 03', t: <>Turn on the <em>engine</em></>, d: 'Voice AI answers every call. Chat AI qualifies every lead. Content AI ships daily. Reviews AI compounds your reputation. 24/7.' },
  { n: 'STEP 04', t: <>Buy <em>customers</em></>, d: 'Paid ads optimized for profit, not vanity. SEO that compounds monthly. Every dollar is tracked to revenue — and tuned weekly.' },
  { n: 'STEP 05', t: <>Scale the <em>profit</em></>, d: 'Live revenue dashboard, monthly strategy calls, and a system that gets more efficient every week. Forever.' },
];

function Process() {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <div className="sec-head reveal" ref={useReveal()}>
          <span className="sec-tag">06 — Process</span>
          <h2 className="sec-title">From audit to <em>profit</em><br/>in 14 days.</h2>
          <p className="sec-sub">A proven system designed to generate revenue fast — not just look good. Live in two weeks, cash-flow positive inside ninety days.</p>
        </div>
        <div className="process-rail reveal-stagger" ref={useReveal()}>
          {PROCESS_STEPS.map((s, i) => (
            <div key={i} className="process-step">
              <span className="step-num">{s.n}</span>
              <h4>{s.t}</h4>
              <p>{s.d}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== METRICS ===== */
const METRICS_DATA = [
  ['5.8', '×', 'Avg ROAS', 'Every dollar returns $5.80 in revenue.'],
  ['$42.7', 'M', 'Revenue generated', 'Real pipeline from client systems.'],
  ['14', 'd', 'To first lead', 'Standard. Rush available in 7.'],
  ['96', '%', 'Retention', 'Clients stay because it pays for itself.'],
];

function Metrics() {
  return (
    <section id="results" className="metrics-section">
      <div className="container">
        <div className="sec-head reveal" ref={useReveal()}>
          <span className="sec-tag">07 — Receipts</span>
          <h2 className="sec-title">Your money, <em>multiplied.</em></h2>
          <p className="sec-sub">We do not report impressions. We report revenue. Here is what happens when the engine runs.</p>
        </div>
        <div className="metrics-row reveal" ref={useReveal()}>
          {METRICS_DATA.map((m, i) => (
            <div key={i} className="m-cell">
              <div className="m-num">{m[0]}<span className="u">{m[1]}</span></div>
              <div className="m-label">{m[2]}</div>
              <div className="m-desc">{m[3]}</div>
            </div>
          ))}
        </div>
        <div className="case-card reveal" ref={useReveal()}>
          <div className="case-grid">
            <div>
              <span className="sec-tag" style={{ marginBottom: 20, display: 'inline-flex' }}>Featured · Bespoke Service</span>
              <p className="case-quote" style={{ marginTop: 14 }}>
                "We went from <em>'I should probably do something about marketing'</em> to a chair that books itself. The engine runs, and we just see the patients."
              </p>
              <div className="case-attrib">
                <div className="case-avatar"></div>
                <div><h5>Dr. James Chen, MD</h5><span>FOUNDER · MERIDIAN HEALTH PARTNERS</span></div>
              </div>
            </div>
            <div className="case-mock">
              <div className="case-mock-head"><span>Q-OVER-Q</span><span className="live"><span className="dot"></span>LIVE</span></div>
              <div className="case-mock-row"><span className="lbl">New patient bookings</span><span className="v up">↑ 312%</span></div>
              <div className="case-mock-row"><span className="lbl">Cost per acquisition</span><span className="v dn">↓ 47%</span></div>
              <div className="case-mock-row"><span className="lbl">Reviews added</span><span className="v up">+ 184</span></div>
              <div className="case-mock-row"><span className="lbl">Calls answered 24/7</span><span className="v up">100%</span></div>
              <div className="case-mock-row"><span className="lbl">Months to ROI</span><span className="v">2.1</span></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== FAQ ===== */
const FAQS = [
  { q: 'How is this different from a traditional agency?', a: 'Traditional agencies sell hours. We sell a system. A small senior team, leveraged by a custom AI agent stack, delivers senior-level taste with the throughput of a much bigger shop. The economics work for both of us.' },
  { q: 'Can I really sign up for Growth Accelerator without a call?', a: 'Yes — Tier 02 (Growth Accelerator) is the only self-service path. You select your revenue tier, submit your info, and we send the agreement and payment link within 2 business hours. You can always upgrade to Bespoke Service later.' },
  { q: 'Why no fixed prices shown on the tier cards?', a: "Because Bespoke Service and Website builds are scoped to your business. The estimator uses our official rate card — you get the real number instantly, and we confirm it on a free 30-min call." },
  { q: 'How fast can we go live?', a: 'Standard is 14 days from kickoff. Rush (7 days) is available as an add-on. Full ad campaigns and the AI agent stack roll out in the first 30 days.' },
  { q: "What's in the platform?", a: 'CRM, pipeline, booking, email & SMS marketing, social scheduling, workflow automation, reputation management, real-time reporting, plus four AI layers — Conversation, Voice, Content, and Reviews. Everything talks to everything else.' },
  { q: 'Do you handle paid ads?', a: 'Yes — Google and Meta primarily, paid social where it converts. Ad management is 15% of spend. No minimums; you pay for what we run. Every Bespoke engagement includes a forensic ad account audit that finds hidden waste most agencies miss.' },
  { q: 'What is the forensic ad audit?', a: 'A deep, AI-powered analysis of your Google, Meta, and TikTok ad accounts. We connect read-only access and within minutes identify exactly where your budget is leaking — wasted keywords, poor targeting, overlap, and missed opportunities. It is available as a paid add-on for Growth Accelerator and included in every Bespoke engagement.' },
  { q: 'What happens if I want to cancel?', a: '30 days written notice, 3-month minimum commitment. Your website and content are yours — we hand over the keys cleanly. No exit fees.' },
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="faq-wrap">
          <div className="reveal" ref={useReveal()}>
            <span className="sec-tag">08 — Questions</span>
            <h2 className="sec-title" style={{ marginTop: 16, fontSize: 'clamp(36px, 4.5vw, 64px)' }}>
              Quick <em>answers,</em><br />candid ones.
            </h2>
          </div>
          <div className="faq-list reveal" ref={useReveal()}>
            {FAQS.map((f, i) => (
              <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => setOpen(open === i ? -1 : i)} aria-expanded={open === i} aria-controls={`faq-a-${i}`}>
                  {f.q}
                  <span className="faq-icon">
                    <IconPlus />
                  </span>
                </button>
                <div className="faq-a" id={`faq-a-${i}`}>{f.a}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== CTA ===== */
function CTA() {
  const [showModal, setShowModal] = useState(false);
  const [showLead, setShowLead] = useState(false);
  return (
    <section id="cta" className="cta-section">
      {showModal && <SignupModal onClose={() => setShowModal(false)} />}
      {showLead && <LeadCapture onClose={() => setShowLead(false)} source="cta" />}
      <div className="cta-bg"></div>
      <div className="container">
        <div className="cta-inner reveal" ref={useReveal()}>
          <span className="cta-badge"><span className="live-dot"></span>LIMITED ONBOARDING · Q2 2026</span>
          <h2 className="cta-title">Find the revenue you're <em>leaking.</em></h2>
          <p className="cta-desc">Request a free 3-minute audit video. We'll analyze your funnel, ads, and website — then show you exactly where you're losing customers and how to fix it. No pitch. No pressure. Just answers.</p>
          <div className="cta-actions">
            <button className="btn-primary" onClick={() => setShowLead(true)}>
              Get my free audit
              <span className="arrow">
                <IconArrow />
              </span>
            </button>
            <button className="btn-outline" onClick={() => setShowModal(true)}>
              Sign up for Growth Accelerator
            </button>
          </div>
          <div className="trust-row">
            <div className="trust-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
              3-month minimum. Cancel anytime.
            </div>
            <div className="trust-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              96% client retention
            </div>
            <div className="trust-item">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><path d="M12 6v6l4 2"/></svg>
              14 days to live
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ===== FOOTER ===== */
function Footer() {
  const [showModal, setShowModal] = useState(false);
  const [showLead, setShowLead] = useState(false);
  return (
    <footer className="footer">
      {showModal && <SignupModal onClose={() => setShowModal(false)} />}
      {showLead && <LeadCapture onClose={() => setShowLead(false)} source="footer" />}
      <div className="container">
        <div className="footer-grid">
          <div className="footer-brand">
            <div className="footer-logo">
              <img src="assets/am-logo.png" alt="Aspen Malibu" loading="lazy" />
              <span className="footer-logo-text">Aspen<em>Malibu</em></span>
            </div>
            <p className="footer-tag">Premium growth systems for ambitious operators. We build, run, and compound the marketing machine.</p>
            <div className="footer-email">partners@aspenmalibumarketing.com</div>
          </div>
          <div className="footer-col">
            <h4>Engagements</h4>
            <a href="#pricing">Professional Site</a>
            <a href="#pricing">Growth Accelerator</a>
            <a href="#pricing">Bespoke Service</a>
            <a href="#estimate">Run an estimate</a>
          </div>
          <div className="footer-col">
            <h4>The Studio</h4>
            <a href="#ai">AI Engine</a>
            <a href="#capabilities">Capabilities</a>
            <a href="#process">Process</a>
            <a href="#results">Results</a>
          </div>
          <div className="footer-col">
            <h4>Connect</h4>
            <button onClick={() => setShowLead(true)} style={{display:'block',fontSize:14,color:'rgba(250,250,248,0.72)',padding:'5px 0',transition:'color .2s',background:'none',border:'none',cursor:'pointer',textAlign:'left',fontFamily:'inherit'}}>
              Book a free audit
            </button>
            <button onClick={() => setShowModal(true)} style={{display:'block',fontSize:14,color:'rgba(250,250,248,0.72)',padding:'5px 0',transition:'color .2s',background:'none',border:'none',cursor:'pointer',textAlign:'left',fontFamily:'inherit'}}>
              Sign up — Growth Accelerator
            </button>
            <a href="mailto:partners@aspenmalibumarketing.com">Email</a>
            <a href="#" aria-disabled="true">LinkedIn</a>
          </div>
        </div>
        <div className="footer-trust">
          <div className="footer-trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>
            No long-term lock-in
          </div>
          <div className="footer-trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
            5-star rated operations
          </div>
          <div className="footer-trust-item">
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/><polyline points="14 2 14 8 20 8"/></svg>
            Your data & assets stay yours
          </div>
        </div>
        <div className="footer-wordmark">Aspen<em>Malibu</em></div>
        <div className="footer-bottom">
          <span>© 2026 ASPEN MALIBU MARKETING</span>
          <span>BUILT IN ASPEN ✻ MALIBU</span>
          <span>SYSTEM ONLINE</span>
        </div>
      </div>
    </footer>
  );
}



export { Process, Metrics, FAQ, CTA, Footer }
