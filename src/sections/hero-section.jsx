import React, { useState, useEffect, useRef } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { useReveal } from '../hooks/useReveal'
import { IconArrow } from '../components/icons'
import { LeadCapture } from '../components/lead-capture'

const NAV_LINKS = [
  { href: '/#ai', label: 'AI Engine' },
  { href: '/#services', label: 'Services' },
  { href: '/#pricing', label: 'Pricing' },
  { href: '/#estimate', label: 'Estimate' },
  { href: '/#reviews', label: 'Reviews' },
  { href: '/#results', label: 'Results' },
  { href: '/blog', label: 'Insights', route: true },
]

/* ===== NAV ===== */
function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [showLead, setShowLead] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const h = () => setScrolled(window.scrollY > 30);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : '';
    return () => { document.body.style.overflow = ''; };
  }, [menuOpen]);

  useEffect(() => {
    const onKey = (e) => { if (e.key === 'Escape') setMenuOpen(false); };
    const onResize = () => { if (window.innerWidth > 900) setMenuOpen(false); };
    window.addEventListener('keydown', onKey);
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('resize', onResize);
    };
  }, []);

  const closeMenu = () => setMenuOpen(false);
  const openLead = () => { closeMenu(); setShowLead(true); };
  const location = useLocation();
  const isBlog = location.pathname.startsWith('/blog');

  const navLinkClass = (href) => {
    if (href === '/blog' && isBlog) return 'nav-link active';
    return 'nav-link';
  };

  return (
    <>
      {showLead && <LeadCapture onClose={() => setShowLead(false)} source="nav" />}
      <nav className={`nav ${scrolled ? 'scrolled' : ''} ${menuOpen ? 'menu-open' : ''}`}>
        <Link to="/" className="nav-logo" onClick={closeMenu}>
          <img src="/assets/am-logo.png" alt="Aspen Malibu Marketing" />
          <span className="nav-logo-text">Aspen<em>Malibu</em></span>
        </Link>
        <div className="nav-links">
          {NAV_LINKS.map(({ href, label, route }) =>
            route ? (
              <Link key={href} to={href} className={navLinkClass(href)}>{label}</Link>
            ) : (
              <a key={href} href={href} className="nav-link">{label}</a>
            )
          )}
        </div>
        <button
          type="button"
          className={`nav-menu-btn ${menuOpen ? 'open' : ''}`}
          aria-expanded={menuOpen}
          aria-controls="nav-mobile-menu"
          aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          onClick={() => setMenuOpen((o) => !o)}
        >
          <span className="nav-menu-bar" />
          <span className="nav-menu-bar" />
        </button>
        <a
          href="https://app.aspenmalibumarketing.com"
          target="_blank"
          rel="noopener noreferrer"
          className="nav-login"
          onClick={() => window.gtag?.('event', 'nav_client_login_click')}
        >
          <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
            <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
            <path d="M7 11V7a5 5 0 0110 0v4"/>
          </svg>
          <span className="nav-login-label">Client Login</span>
        </a>
        <button type="button" className="nav-cta" onClick={() => setShowLead(true)}>
          Book a call
          <IconArrow size={13} stroke={1.5} />
        </button>
      </nav>

      <div
        id="nav-mobile-menu"
        className={`nav-mobile ${menuOpen ? 'open' : ''}`}
        aria-hidden={!menuOpen}
      >
        <button type="button" className="nav-mobile-backdrop" aria-label="Close menu" onClick={closeMenu} />
        <div className="nav-mobile-panel" role="dialog" aria-modal="true" aria-label="Site navigation">
          <div className="nav-mobile-links">
            {NAV_LINKS.map(({ href, label, route }) =>
              route ? (
                <Link key={href} to={href} className="nav-mobile-link" onClick={closeMenu}>{label}</Link>
              ) : (
                <a key={href} href={href} className="nav-mobile-link" onClick={closeMenu}>{label}</a>
              )
            )}
          </div>
          <div className="nav-mobile-actions">
            <a
              href="https://app.aspenmalibumarketing.com"
              target="_blank"
              rel="noopener noreferrer"
              className="nav-mobile-login"
              onClick={() => { window.gtag?.('event', 'nav_client_login_click'); closeMenu(); }}
            >
              Client Login
            </a>
            <button type="button" className="nav-mobile-cta" onClick={openLead}>
              Book a call
              <IconArrow size={13} stroke={1.5} />
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

/* ===== HERO BACKGROUND ===== */
function HeroCanvas() {
  const canvasRef = React.useRef(null)
  React.useEffect(() => {
    const canvas = canvasRef.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    let animId
    const resize = () => {
      canvas.width = canvas.offsetWidth * Math.min(window.devicePixelRatio, 2)
      canvas.height = canvas.offsetHeight * Math.min(window.devicePixelRatio, 2)
    }
    resize()
    window.addEventListener('resize', resize)
    const blobs = [
      { x: 0.3, y: 0.3, r: 0.4, dx: 0.0003, dy: 0.0002, hue: 42, sat: 60, light: 55 },
      { x: 0.7, y: 0.6, r: 0.35, dx: -0.0002, dy: 0.0003, hue: 185, sat: 50, light: 45 },
      { x: 0.5, y: 0.8, r: 0.3, dx: 0.00025, dy: -0.00015, hue: 35, sat: 70, light: 60 },
    ]
    const draw = () => {
      const w = canvas.width, h = canvas.height
      blobs.forEach(b => { b.x += b.dx; b.y += b.dy; if (b.x < -0.2 || b.x > 1.2) b.dx *= -1; if (b.y < -0.2 || b.y > 1.2) b.dy *= -1 })
      ctx.fillStyle = '#FBF8F2'
      ctx.fillRect(0, 0, w, h)
      blobs.forEach(b => {
        const g = ctx.createRadialGradient(b.x * w, b.y * h, 0, b.x * w, b.y * h, b.r * Math.max(w, h))
        g.addColorStop(0, `hsla(${b.hue}, ${b.sat}%, ${b.light}%, 0.18)`)
        g.addColorStop(0.5, `hsla(${b.hue}, ${b.sat}%, ${b.light}%, 0.06)`)
        g.addColorStop(1, `hsla(${b.hue}, ${b.sat}%, ${b.light}%, 0)`)
        ctx.fillStyle = g
        ctx.fillRect(0, 0, w, h)
      })
      animId = requestAnimationFrame(draw)
    }
    draw()
    return () => { cancelAnimationFrame(animId); window.removeEventListener('resize', resize) }
  }, [])
  return <canvas ref={canvasRef} style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', zIndex: 0, opacity: 0.9 }} />
}

/* ===== HERO ===== */
function Hero() {
  const [showLead, setShowLead] = useState(false)

  return (
    <section className="hero" id="top">
      {showLead && <LeadCapture onClose={() => setShowLead(false)} source="hero" />}
      <HeroCanvas />

      <div className="container hero-content">
        <span className="hero-eyebrow">
          <span className="hero-eyebrow-pill">
            <span className="live-dot"></span>
            AI-Powered · 2026
          </span>
          Premium Growth Systems
        </span>

        <h1 className="hero-title">
          <span className="line"><span className="word">More leads.</span></span>
          <span className="line"><span className="word">Less work. <em>More profit.</em></span></span>
        </h1>

        <p className="hero-desc">
          We build and run the complete revenue engine — AI agents that book your calendar, ads that print customers, and funnels that convert while you sleep. You focus on delivery; we focus on growth.
        </p>

        <div className="hero-actions">
          <button type="button" className="btn-primary" onClick={() => setShowLead(true)}>
            Get my free audit
            <span className="arrow">
              <IconArrow />
            </span>
          </button>
          <a href="#ai" className="btn-outline">See how it works</a>
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
  {n:'Meridian Health Partners',b:'MHP'},{n:'Coastal Wealth Group',b:'CWG'},
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
  ['Systems over tactics','Every campaign, every page, every automation feeds the next. Nothing exists in isolation. The result is compounding revenue — not one-off wins.'],
  ['AI + senior taste','AI agents handle the volume; a small senior team handles the strategy. You get the throughput of a big shop with the taste of a boutique.'],
  ['Built to profit','We onboard a small number of clients per quarter, by design. Premium time, premium outcomes — and a system that pays for itself inside 90 days.'],
];

/* ===== MANIFESTO ===== */
function Manifesto() {
  return (
    <section className="manifesto" id="about">
      <div className="container">
        <div className="manifesto-grid reveal" ref={useReveal()}>
          <div>
            <span className="sec-tag" style={{marginBottom: 20}}>01 — Why This Works</span>
          </div>
          <h2 className="manifesto-title">
            We do not do <em>marketing.</em> We build <em>profit machines</em> — deliberately, with a quiet obsession for what <span className="teal">compounds.</span>
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



function HeroSection() {
  return (
    <>
      <Nav />
      <Hero />
      <LogoStrip />
      <Manifesto />
    </>
  )
}

export default HeroSection

export { Nav, Hero, LogoStrip, Manifesto }
