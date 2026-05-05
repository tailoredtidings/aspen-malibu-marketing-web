/* global React */
const { useState } = React;

/* ===== PROCESS ===== */
const PROCESS_STEPS = [
  { n: 'STEP 01', t: <>Discovery &amp; <em>strategy</em></>, d: 'Forensic audit of your funnel, spend, and competitors. You leave kickoff with a real plan — not a deck.' },
  { n: 'STEP 02', t: <>Build the <em>foundation</em></>, d: 'A bespoke site and conversion funnel, wired into the CRM, automation, and AI layers from day one.' },
  { n: 'STEP 03', t: <>Deploy the <em>agents</em></>, d: 'Voice AI on the phones. Conversation AI on every channel. Content AI shipping. Reviews AI compounding.' },
  { n: 'STEP 04', t: <>Acquire &amp; <em>optimize</em></>, d: 'Paid acquisition where it pays. SEO where it compounds. Tuned weekly against cash collected.' },
  { n: 'STEP 05', t: <>The <em>compound</em></>, d: 'Live dashboard, monthly strategy calls, and a system that gets sharper every week. Forever.' },
];

function Process() {
  return (
    <section id="process" className="process-section">
      <div className="container">
        <div className="sec-head reveal" ref={window.useReveal()}>
          <span className="sec-tag">06 — Process</span>
          <h2 className="sec-title">From kickoff to <em>compounding</em><br/>in 14 days.</h2>
          <p className="sec-sub">A senior team and an AI agent stack designed to ship — not deliberate. Live in two weeks, profitable inside ninety days.</p>
        </div>
        <div className="process-rail reveal-stagger" ref={window.useReveal()}>
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
  ['5.8', '×', 'Avg ROAS', 'Across full-managed accounts.'],
  ['$42.7', 'M', 'Pipeline generated', 'New revenue from client systems.'],
  ['14', 'd', 'To launch', 'Standard. Rush available in 7.'],
  ['96', '%', 'Retention', 'Clients active year-over-year.'],
];

function Metrics() {
  return (
    <section id="results" className="metrics-section">
      <div className="container">
        <div className="sec-head reveal" ref={window.useReveal()}>
          <span className="sec-tag">07 — Receipts</span>
          <h2 className="sec-title">The numbers that <em>matter.</em></h2>
        </div>
        <div className="metrics-row reveal" ref={window.useReveal()}>
          {METRICS_DATA.map((m, i) => (
            <div key={i} className="m-cell">
              <div className="m-num">{m[0]}<span className="u">{m[1]}</span></div>
              <div className="m-label">{m[2]}</div>
              <div className="m-desc">{m[3]}</div>
            </div>
          ))}
        </div>
        <div className="case-card reveal" ref={window.useReveal()}>
          <div className="case-grid">
            <div>
              <span className="sec-tag" style={{ marginBottom: 20, display: 'inline-flex' }}>Featured · Bespoke Service</span>
              <p className="case-quote" style={{ marginTop: 14 }}>
                "We went from <em>'I should probably do something about marketing'</em> to a chair that books itself. The engine runs, and we just see the patients."
              </p>
              <div className="case-attrib">
                <div className="case-avatar"></div>
                <div><h5>Dr. Rishi Patel, DMD</h5><span>FOUNDER · LEGACY FAMILY DENTAL</span></div>
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
  { q: 'Do you handle paid ads?', a: 'Yes — Google and Meta primarily, paid social where it converts. Ad management is 15% of spend. No minimums; you pay for what we run.' },
  { q: 'What happens if I want to cancel?', a: '30 days written notice, 3-month minimum commitment. Your website and content are yours — we hand over the keys cleanly. No exit fees.' },
];

function FAQ() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" className="faq-section">
      <div className="container">
        <div className="faq-wrap">
          <div className="reveal" ref={window.useReveal()}>
            <span className="sec-tag">08 — Questions</span>
            <h2 className="sec-title" style={{ marginTop: 16, fontSize: 'clamp(36px, 4.5vw, 64px)' }}>
              Quick <em>answers,</em><br />candid ones.
            </h2>
          </div>
          <div className="faq-list reveal" ref={window.useReveal()}>
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
  return (
    <section id="cta" className="cta-section">
      {showModal && <window.SignupModal onClose={() => setShowModal(false)} />}
      <div className="cta-bg"></div>
      <div className="container">
        <div className="cta-inner reveal" ref={window.useReveal()}>
          <span className="cta-badge"><span className="live-dot"></span>LIMITED ONBOARDING · Q2 2026</span>
          <h2 className="cta-title">Build your <em>tide.</em></h2>
          <p className="cta-desc">One 30-minute call. We audit your funnel, scope the system, and tell you honestly if we're the right fit. No pitch deck, no pressure.</p>
          <div className="cta-actions">
            <a href="mailto:partners@aspenmalibumarketing.com" className="btn-primary">
              Book a discovery call
              <span className="arrow">
                <IconArrow />
              </span>
            </a>
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
  return (
    <footer className="footer">
      {showModal && <window.SignupModal onClose={() => setShowModal(false)} />}
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
            <a href="#cta">Book a call</a>
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

Object.assign(window, { Process, Metrics, FAQ, CTA, Footer });
