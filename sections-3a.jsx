/* global React */
const { useState, useEffect } = React;

/* ===== SELF-SERVICE SIGNUP MODAL ===== */
function SignupModal({ onClose }) {
  const [step, setStep] = useState(1);
  const [rev, setRev] = useState(null);

  const tiers = [
    { label: 'Small Business', sub: 'Under $1M revenue', setup: 6995, monthly: 997 },
    { label: 'Growth Business', sub: '$1M – $5M revenue', setup: 8995, monthly: 1997 },
    { label: 'Scale Business', sub: '$5M – $15M revenue', setup: 10995, monthly: 3497 },
    { label: 'Enterprise', sub: '$15M+ revenue', setup: 14995, monthly: 6997 },
  ];
  const fmt = n => '$' + n.toLocaleString('en-US');

  useEffect(() => {
    const prev = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    return () => { document.body.style.overflow = prev; };
  }, []);

  // Focus trapping and escape-to-close
  const modalRef = React.useRef(null);
  useEffect(() => {
    const modal = modalRef.current;
    if (!modal) return;
    const focusable = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    );
    const first = focusable[0];
    const last = focusable[focusable.length - 1];
    first?.focus();

    const onKey = (e) => {
      if (e.key === 'Escape') { onClose(); return; }
      if (e.key !== 'Tab') return;
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last?.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first?.focus();
      }
    };
    document.addEventListener('keydown', onKey);
    return () => document.removeEventListener('keydown', onKey);
  }, [onClose, step]);

  return (
    <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-card" ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="signup-title">
        <button className="modal-close" onClick={onClose} aria-label="Close signup modal">
          <IconClose />
        </button>

        {step === 1 && (
          <div className="modal-body">
            <span className="modal-eyebrow">Growth Accelerator · Self-Service</span>
            <h2 id="signup-title" className="modal-title">Start your <em>engine</em> today.</h2>
            <p className="modal-desc">The full marketing platform — CRM, AI agents, automation, reputation — managed by you, powered by us. No website required. Pick your tier to get started.</p>
            <div className="modal-tiers">
              {tiers.map((t, i) => (
                <button key={i} className={`modal-tier ${rev === i ? 'on' : ''}`} onClick={() => setRev(i)}>
                  <div className="modal-tier-left">
                    <span className="modal-tier-name">{t.label}</span>
                    <span className="modal-tier-sub">{t.sub}</span>
                  </div>
                  <div className="modal-tier-right">
                    <span className="modal-tier-mo">{fmt(t.monthly)}<span>/mo</span></span>
                    <span className="modal-tier-setup">+ {fmt(t.setup)} setup</span>
                  </div>
                </button>
              ))}
            </div>
            <button
              className={`modal-cta ${rev !== null ? 'ready' : ''}`}
              onClick={() => rev !== null && setStep(2)}
              disabled={rev === null}
            >
              {rev !== null ? `Continue with ${tiers[rev].label}` : 'Select a tier to continue'}
              <IconArrow />
            </button>
            <p className="modal-note">3-month minimum · 30-day cancellation notice · 50% upfront</p>
          </div>
        )}

        {step === 2 && rev !== null && (
          <div className="modal-body">
            <button className="modal-back" onClick={() => setStep(1)}>
              <IconBack />
              Back
            </button>
            <span className="modal-eyebrow">Growth Accelerator · {tiers[rev].label}</span>
            <h2 id="signup-title" className="modal-title">Let's get you <em>set up.</em></h2>
            <div className="modal-summary">
              <div className="modal-sum-row">
                <span>One-time setup</span>
                <strong>{fmt(tiers[rev].setup)}</strong>
              </div>
              <div className="modal-sum-row">
                <span>Monthly retainer</span>
                <strong>{fmt(tiers[rev].monthly)}/mo</strong>
              </div>
              <div className="modal-sum-row modal-sum-total">
                <span>First payment (50% deposit)</span>
                <strong>{fmt(Math.round(tiers[rev].setup * 0.5))}</strong>
              </div>
            </div>
            <div className="modal-form">
              <div className="modal-field-row">
                <div className="modal-field">
                  <label htmlFor="su-fname">First name</label>
                  <input id="su-fname" type="text" placeholder="Kaila" />
                </div>
                <div className="modal-field">
                  <label htmlFor="su-lname">Last name</label>
                  <input id="su-lname" type="text" placeholder="Sclabassi" />
                </div>
              </div>
              <div className="modal-field">
                <label htmlFor="su-email">Business email</label>
                <input id="su-email" type="email" placeholder="you@yourbusiness.com" />
              </div>
              <div className="modal-field">
                <label htmlFor="su-biz">Business name</label>
                <input id="su-biz" type="text" placeholder="Acme Co." />
              </div>
              <div className="modal-field">
                <label htmlFor="su-phone">Phone</label>
                <input id="su-phone" type="tel" placeholder="+1 (555) 000-0000" />
              </div>
            </div>
            <a href="mailto:partners@aspenmalibumarketing.com" className="modal-cta ready" style={{textAlign:'center',justifyContent:'center'}}>
              Submit & we'll send your agreement
              <IconArrow />
            </a>
            <p className="modal-note">We'll send your service agreement + payment link within 2 business hours.</p>
          </div>
        )}
      </div>
    </div>
  );
}

/* ===== TIERS ===== */
const TIERS_DATA = [
  {
    num: '01 / WEBSITE',
    name: <>Professional <em>Site</em></>,
    tagline: 'A site built to convert visitors into revenue — not just look pretty. Managed, maintained, and optimized by us.',
    best: 'For operators who need a fast, beautiful site that actually books appointments and sells.',
    features: [
      'Custom Framer site, built to convert',
      'Managed hosting · SSL · 99.9% uptime',
      'Daily backups · security monitoring',
      'Up to 3h/month of content tweaks',
      'Deep CRM integration (managed)',
      'Scales into any higher engagement',
    ],
    cta: 'Estimate my site',
    ctaLink: '#estimate',
    selfServe: false,
  },
  {
    num: '02 / SELF-SERVICE',
    name: <>Growth <em>Accelerator</em></>,
    tagline: 'The full revenue platform — AI agents, automation, and funnels that run while you focus on delivery.',
    best: 'For founders who want the controls and the compounding — without the overhead of a full agency.',
    features: [
      'CRM, pipeline & appointment booking',
      'Email · SMS · social automation 24/7',
      'Conversation AI, Voice AI, Content AI, Reviews AI',
      'Workflow automation builder',
      'Real-time revenue dashboard & reporting',
      'Website optional add-on (we build & manage)',
    ],
    cta: 'Sign up now',
    ctaLink: null,
    selfServe: true,
    startingAt: '$997/mo',
  },
  {
    num: '03 / BESPOKE',
    name: <>Bespoke <em>Service</em></>,
    tagline: 'A fully-managed profit engine. We handle strategy, execution, and optimization — you handle the customers we bring you.',
    best: 'For operators who want a senior team running the entire revenue system. You stay in your zone of genius.',
    features: [
      'Custom Framer website included',
      'Senior team: strategy & daily execution',
      'Fully managed SEO, content & lead gen',
      'Managed social media & Google Business',
      'Ad management available (15% of spend)',
      'Monthly strategy calls & revenue reporting',
    ],
    cta: 'Estimate my scope',
    ctaLink: '#estimate',
    selfServe: false,
    featured: true,
  },
];

function Tiers() {
  const [showModal, setShowModal] = useState(false);

  return (
    <section id="pricing" className="tiers-section">
      {showModal && <SignupModal onClose={() => setShowModal(false)} />}
      <div className="container">
        <div className="sec-head reveal" ref={window.useReveal()}>
          <span className="sec-tag">04 — Engagements</span>
          <h2 className="sec-title">Three ways to <em>work together.</em></h2>
          <p className="sec-sub">Website services and marketing suite are priced separately — mix and match. Tier 02 is the only one you can start today without a call.</p>
        </div>
        <div className="tier-grid reveal-stagger" ref={window.useReveal()}>
          {TIERS_DATA.map((t, i) => (
            <article key={i} className={`tier-card ${t.featured ? 'featured' : ''}`}>
              {t.featured && <span className="tier-flag">Most popular</span>}
              <span className="tier-num">{t.num}</span>
              <h3 className="tier-name">{t.name}</h3>
              {t.startingAt && (
                <div className="tier-starting">
                  <span className="tier-starting-label">Starting at</span>
                  <span className="tier-starting-val">{t.startingAt}</span>
                </div>
              )}
              <p className="tier-tagline">{t.tagline}</p>
              <div className="tier-best">
                <span className="tier-best-lbl">Best for</span>
                <p>{t.best}</p>
              </div>
              <ul className="tier-features">
                {t.features.map((f, j) => (
                  <li key={j}>
                    <IconTick />
                    {f}
                  </li>
                ))}
              </ul>
              {t.selfServe ? (
                <button className="tier-cta-btn self-serve" onClick={() => setShowModal(true)}>
                  {t.cta}
                  <span className="tier-cta-arrow">
                    <IconArrowSmall />
                  </span>
                </button>
              ) : (
                <a href={t.ctaLink} className="tier-cta-btn">
                  {t.cta}
                  <span className="tier-cta-arrow">
                    <IconArrowSmall />
                  </span>
                </a>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { SignupModal, Tiers });
