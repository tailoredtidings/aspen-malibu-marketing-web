/* global React */
const { useState, useEffect, useRef } = React;

// ===== Reusable: Reveal-on-scroll =====
function Reveal({ children, className = '', as = 'div', stagger = false, ...rest }) {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => entries.forEach(e => e.isIntersecting && el.classList.add('in')),
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);
  const Cmp = as;
  return (
    <Cmp ref={ref} className={`${stagger ? 'reveal-stagger' : 'reveal'} ${className}`} {...rest}>
      {children}
    </Cmp>
  );
}

// ===== Brand mark (logo + wordmark) =====
function BrandMark({ size = 28, showText = true, italic = true }) {
  return (
    <span style={{display:'inline-flex',alignItems:'center',gap:10}}>
      <img src="assets/am-logo.png" alt="Aspen Malibu" style={{width:size,height:size,objectFit:'contain'}} />
      {showText && (
        <span className="nav-logo-text">
          Aspen{italic ? <em> Malibu</em> : ' Malibu'}
        </span>
      )}
    </span>
  );
}

// ===== NAV =====
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', onScroll);
    return () => window.removeEventListener('scroll', onScroll);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="nav-logo" aria-label="Aspen Malibu Marketing">
        <img src="assets/am-logo.png" alt="" />
        <span className="nav-logo-text">Aspen<em> Malibu</em></span>
      </a>
      <div className="nav-links">
        <a className="nav-link" href="#services">Services</a>
        <a className="nav-link" href="#engine">Engine</a>
        <a className="nav-link" href="#results">Results</a>
        <a className="nav-link" href="#pricing">Pricing</a>
        <a className="nav-link" href="#faq">FAQ</a>
      </div>
      <a href="#cta" className="nav-cta">
        Start a project
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
      </a>
    </nav>
  );
}

// ===== HERO =====
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-bg-wave" aria-hidden="true">
        <svg viewBox="0 0 1600 900" preserveAspectRatio="none">
          <defs>
            <linearGradient id="waveG1" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#5BA8B5" stopOpacity="0.05"/>
              <stop offset="1" stopColor="#5BA8B5" stopOpacity="0.18"/>
            </linearGradient>
            <linearGradient id="waveG2" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#C8A961" stopOpacity="0.0"/>
              <stop offset="1" stopColor="#C8A961" stopOpacity="0.10"/>
            </linearGradient>
            <linearGradient id="peakG" x1="0" y1="0" x2="0" y2="1">
              <stop offset="0" stopColor="#E8F1F2" stopOpacity="0.10"/>
              <stop offset="1" stopColor="#E8F1F2" stopOpacity="0.0"/>
            </linearGradient>
          </defs>
          {/* distant peaks */}
          <path d="M0 540 L260 360 L420 480 L640 300 L820 460 L1040 340 L1240 480 L1440 360 L1600 480 L1600 900 L0 900 Z" fill="url(#peakG)"/>
          {/* waves */}
          <path className="wave-1" d="M0 620 Q200 580 400 620 T800 620 T1200 620 T1600 620 L1600 900 L0 900 Z" fill="url(#waveG1)">
            <animate attributeName="d" dur="14s" repeatCount="indefinite"
              values="M0 620 Q200 580 400 620 T800 620 T1200 620 T1600 620 L1600 900 L0 900 Z;
                      M0 620 Q200 660 400 620 T800 620 T1200 620 T1600 620 L1600 900 L0 900 Z;
                      M0 620 Q200 580 400 620 T800 620 T1200 620 T1600 620 L1600 900 L0 900 Z" />
          </path>
          <path className="wave-2" d="M0 720 Q300 680 600 720 T1200 720 T1800 720 L1800 900 L0 900 Z" fill="url(#waveG2)">
            <animate attributeName="d" dur="18s" repeatCount="indefinite"
              values="M0 720 Q300 680 600 720 T1200 720 T1800 720 L1800 900 L0 900 Z;
                      M0 720 Q300 760 600 720 T1200 720 T1800 720 L1800 900 L0 900 Z;
                      M0 720 Q300 680 600 720 T1200 720 T1800 720 L1800 900 L0 900 Z" />
          </path>
          {/* sun */}
          <circle cx="1280" cy="220" r="120" fill="#C8A961" opacity="0.06"/>
          <circle cx="1280" cy="220" r="60" fill="#C8A961" opacity="0.10"/>
        </svg>
      </div>
      <div className="hero-vignette" aria-hidden="true"></div>

      <div className="hero-inner container">
        <div className="hero-eyebrow">
          <span className="hero-eyebrow-dot"></span>
          <span>The Premium Growth Engine • Est. 2026</span>
        </div>

        <h1 className="hero-title">
          <span className="line"><span className="word">Marketing,</span></span>
          <span className="line"><span className="word">engineered <em>like</em></span></span>
          <span className="line"><span className="word">a <em>tide.</em></span></span>
        </h1>

        <div className="hero-meta">
          <p className="hero-desc">
            Aspen Malibu Marketing is a fully managed growth studio for ambitious local brands. We build the
            website, run the funnel, automate the follow-up, and deliver the leads — while you do what
            you do best.
          </p>
          <div className="hero-stats">
            <div className="hero-stat">
              <div className="num">3.4×</div>
              <div className="label">Avg. ROAS lift</div>
            </div>
            <div className="hero-stat">
              <div className="num">14d</div>
              <div className="label">Median launch</div>
            </div>
            <div className="hero-stat">
              <div className="num">99.9%</div>
              <div className="label">Site uptime</div>
            </div>
          </div>
          <div className="hero-cta-group">
            <a href="#cta" className="btn-primary">
              Book intro call
              <span className="arrow">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M7 17L17 7M17 7H8M17 7v9"/></svg>
              </span>
            </a>
            <a href="#engine" className="btn-ghost">See the engine</a>
          </div>
        </div>
      </div>

      <Ticker />
    </section>
  );
}

function Ticker() {
  const items = [
    { k: 'Lead-gen funnels', v: 'live in 14 days' },
    { k: 'Booked appointments', v: '+184% avg.' },
    { k: 'Wasted ad spend', v: 'flagged in 24h' },
    { k: 'Reviews captured', v: '5★ on autopilot' },
    { k: 'CRM follow-up', v: '24/7 across SMS, email, voice' },
    { k: 'AI voice agents', v: 'answer every call' },
    { k: 'Reporting', v: 'live, never monthly' },
    { k: 'Ad audits', v: 'forensic + actionable' },
  ];
  const all = [...items, ...items];
  return (
    <div className="hero-ticker">
      <div className="ticker-track">
        {all.map((it, i) => (
          <span className="ticker-item" key={i}>
            <span className="dot"></span>
            <span>{it.k}</span>
            <strong>{it.v}</strong>
          </span>
        ))}
      </div>
    </div>
  );
}

Object.assign(window, { Reveal, BrandMark, Nav, Hero, Ticker });
