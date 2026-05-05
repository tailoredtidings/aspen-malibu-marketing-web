/* global React */
const { useState, useEffect, useRef } = React;

function useReveal() {
  const ref = useRef(null);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      entries => entries.forEach(e => { if (e.isIntersecting) { e.target.classList.add('in'); io.unobserve(e.target); } }),
      { threshold: 0.12, rootMargin: '0px 0px -60px 0px' }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return ref;
}

/* ===== NAV ===== */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);
  return (
    <nav className={`nav ${scrolled ? 'scrolled' : ''}`}>
      <a href="#top" className="nav-logo">
        <img src="assets/am-logo.png" alt="Aspen Malibu" />
        <span className="nav-logo-text">Aspen<em>Malibu</em></span>
      </a>
      <div className="nav-links">
        <a href="#ai" className="nav-link">AI Engine</a>
        <a href="#services" className="nav-link">Services</a>
        <a href="#pricing" className="nav-link">Pricing</a>
        <a href="#estimate" className="nav-link">Estimate</a>
        <a href="#reviews" className="nav-link">Reviews</a>
        <a href="#results" className="nav-link">Results</a>
      </div>
      <a href="#cta" className="nav-cta">
        Book a call
        <IconArrow size={13} stroke={1.5} />
      </a>
    </nav>
  );
}

/* ===== HERO ===== */
function Hero() {
  return (
    <section className="hero" id="top">
      <div className="hero-shapes" aria-hidden="true">
        <div className="s1"></div>
        <div className="s2"></div>
        <div className="grid"></div>
      </div>

      <div className="container hero-content">
        <span className="hero-eyebrow">
          <span className="hero-eyebrow-pill">
            <span className="live-dot"></span>
            AI-Powered · 2026
          </span>
          Premium Growth Systems
        </span>

        <h1 className="hero-title">
          <span className="line"><span className="word">The growth engine</span></span>
          <span className="line"><span className="word">that <em>runs itself.</em></span></span>
        </h1>

        <p className="hero-desc">
          A complete marketing system — website, funnels, automation, ads, and AI agents that book your calendar, answer your phones, and write your content. We build it, run it, compound it.
        </p>

        <div className="hero-actions">
          <a href="#cta" className="btn-primary">
            Start your engine
            <span className="arrow">
              <IconArrow />
            </span>
          </a>
          <a href="#ai" className="btn-outline">See the AI stack</a>
        </div>

        <div className="hero-cards">
          <div className="hcard hc1">
            <div className="hcard-head"><span className="live"></span>VOICE AI · LIVE</div>
            <div className="hcard-row"><span className="lbl">Calls answered</span><span className="v up">142 / 142</span></div>
            <div className="hcard-row"><span className="lbl">Avg response</span><span className="v">0.4 s</span></div>
            <div className="hcard-row"><span className="lbl">Appointments booked</span><span className="v up">38</span></div>
          </div>
          <div className="hcard hc2">
            <div className="hcard-head"><span className="live"></span>PIPELINE · TODAY</div>
            <div className="hcard-row"><span className="lbl">New leads</span><span className="v up">+ 24</span></div>
            <div className="hcard-row"><span className="lbl">Qualified by AI</span><span className="v up">19</span></div>
            <div className="hcard-row"><span className="lbl">In closing</span><span className="v">7</span></div>
            <div className="hcard-row"><span className="lbl">Revenue today</span><span className="v up">$48,200</span></div>
          </div>
          <div className="hcard hc3">
            <div className="hcard-head"><span className="live"></span>ROAS · 30 DAYS</div>
            <svg viewBox="0 0 260 72" style={{width:'100%',height:64,margin:'8px 0'}} aria-hidden="true">
              <defs>
                <linearGradient id="hg" x1="0" x2="0" y1="0" y2="1">
                  <stop offset="0%" stopColor="#B8912A" stopOpacity="0.2"/>
                  <stop offset="100%" stopColor="#B8912A" stopOpacity="0"/>
                </linearGradient>
              </defs>
              <path d="M0 58 L28 52 L56 46 L84 40 L112 33 L140 26 L168 20 L196 14 L224 9 L260 4 L260 72 L0 72 Z" fill="url(#hg)"/>
              <path d="M0 58 L28 52 L56 46 L84 40 L112 33 L140 26 L168 20 L196 14 L224 9 L260 4" stroke="#B8912A" strokeWidth="1.5" fill="none"/>
              <circle cx="260" cy="4" r="3" fill="#B8912A"/>
            </svg>
            <div className="hcard-row"><span className="lbl">vs prior period</span><span className="v up">+ 312%</span></div>
          </div>
        </div>
      </div>

      <div className="ticker-bar">
        <div className="ticker-track">
          {[['AVG ROAS','5.8×'],['AI AGENTS','128 DEPLOYED'],['PIPELINE','$42.7M GENERATED'],['RETENTION','96% YEAR-ON-YEAR'],['LOCATION','ASPEN ✻ MALIBU'],['LAUNCH','14 DAYS TO LIVE'],['CALLS','100% ANSWERED 24/7'],['STATUS','ENGINE ONLINE'],
            ['AVG ROAS','5.8×'],['AI AGENTS','128 DEPLOYED'],['PIPELINE','$42.7M GENERATED'],['RETENTION','96% YEAR-ON-YEAR'],['LOCATION','ASPEN ✻ MALIBU'],['LAUNCH','14 DAYS TO LIVE'],['CALLS','100% ANSWERED 24/7'],['STATUS','ENGINE ONLINE']].map((t,i) => (
            <span key={i} className="ticker-item">
              <span className="dot"></span>{t[0]} <strong>{t[1]}</strong>
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const LOGO_ITEMS = [
  {n:'Legacy Family Dental',b:'LFD'},{n:'Coastal Wealth Group',b:'CWG'},
  {n:'Summit Aesthetics',b:'SA'},{n:'Northstar Realty',b:'NR'},
  {n:'Heliotrope Studio',b:'HS'},{n:'Ridgeline Roofing',b:'RR'},
  {n:'Tidewater Law',b:'TL'},{n:'Marigold Med Spa',b:'MMS'},
];

/* ===== LOGO STRIP ===== */
function LogoStrip() {
  return (
    <section className="logo-strip" style={{padding: '56px 0'}}>
      <div className="logo-strip-label">Trusted by ambitious operators across health, wealth, real estate &amp; lifestyle.</div>
      <div className="logo-marquee">
        <div className="logo-marquee-track">
          {[...LOGO_ITEMS,...LOGO_ITEMS].map((it,i) => (
            <span key={i} className="logo-marquee-item">
              <span className="badge">{it.b}</span>{it.n}
            </span>
          ))}
        </div>
      </div>
    </section>
  );
}

const MANIFESTO_PILLARS = [
  ['Philosophy','Every campaign, every page, every automation feeds the next. Nothing exists in isolation. The system is the strategy.'],
  ['Edge','We run a tech company that happens to do marketing. AI agents handle the volume; a small senior team handles the taste.'],
  ['Practice','We onboard a small number of clients per quarter, by design. Premium time, premium outcomes — no volume shops.'],
];

/* ===== MANIFESTO ===== */
function Manifesto() {
  return (
    <section className="manifesto" id="about">
      <div className="container">
        <div className="manifesto-grid reveal" ref={useReveal()}>
          <div>
            <span className="sec-tag" style={{marginBottom: 20}}>01 — The Studio</span>
          </div>
          <h2 className="manifesto-title">
            We build <em>growth machines</em> the way good architects build houses — deliberately, with a quiet obsession for what <span className="teal">compounds.</span>
          </h2>
        </div>
        <div className="manifesto-pillars reveal-stagger" ref={useReveal()}>
          {MANIFESTO_PILLARS.map(([h,p],i) => (
            <div key={i} className="manifesto-pillar">
              <h4>{h}</h4>
              <p>{p}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { useReveal, Nav, Hero, LogoStrip, Manifesto });
