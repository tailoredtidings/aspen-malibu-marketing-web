/* global React */

const SERVICES = [
  {
    num: '01',
    title: <>Search Engine <em>Optimization</em></>,
    desc: 'Show up where buyers are already searching. We turn organic traffic into a predictable revenue channel — not just rankings, but qualified leads that close.',
    features: ['Local SEO that drives appointments','Content that ranks AND converts','Technical fixes for crawl budget','Backlinks from real authority sites','Monthly rank & revenue reporting'],
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.5"/><path d="M16 16l5 5" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    num: '02',
    title: <>Paid Ads <em>Management</em></>,
    desc: 'We buy customers, not clicks. Every dollar is tracked to revenue — not impressions. If an ad does not pay for itself in 30 days, we kill it and build a better one.',
    features: ['Google & Meta ads optimized for ROAS','TikTok & YouTube for scale','Retargeting that recovers lost buyers','Creative testing every 72 hours','Forensic spend analysis included'],
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 2v20M2 12h20" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    num: '03',
    title: <>Conversion <em>Funnels</em></>,
    desc: 'Traffic is worthless if it bounces. We architect pages, forms, and follow-up sequences that turn strangers into appointments — automatically, 24/7.',
    features: ['High-converting landing pages','Lead magnets your audience actually wants','Email & SMS nurture that books calls','A/B testing for constant lift','Form optimization to reduce friction'],
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M3 6h18M3 12h12M3 18h6" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
  {
    num: '04',
    title: <>AI <em>Automation</em></>,
    desc: 'Your best employee never sleeps, never calls in sick, and costs less than minimum wage. AI agents handle voice, chat, content, and reviews — so your team closes deals.',
    features: ['Voice AI that books while you sleep','Chatbots that qualify before you call back','Content AI that writes on-brand at scale','Reviews AI that builds 5-star reputation','Workflows that eliminate manual follow-up'],
    icon: <svg width="22" height="22" viewBox="0 0 24 24" fill="none"><path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" stroke="currentColor" strokeWidth="1.5"/><path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/></svg>,
  },
];

/* ===== SERVICES ===== */
function Services() {
  return (
    <section className="services-section" id="services">
      <div className="container">
        <div className="sec-head center reveal" ref={window.useReveal()}>
          <span className="sec-tag">03.5 — Services</span>
          <h2 className="sec-title">Four ways we <em>make you money.</em></h2>
          <p className="sec-sub">Every service is measured by one metric: revenue generated. Not impressions. Not likes. Real customers, real bookings, real profit.</p>
        </div>
        <div className="services-grid reveal-stagger" ref={window.useReveal()}>
          {SERVICES.map((s, i) => (
            <div key={i} className="service-card">
              <div className="service-card-top">
                <span className="service-num">{s.num}</span>
                <div className="service-icon">{s.icon}</div>
              </div>
              <h4 className="service-title">{s.title}</h4>
              <p className="service-desc">{s.desc}</p>
              <ul className="service-features">
                {s.features.map((f, j) => (
                  <li key={j}>
                    <svg viewBox="0 0 16 16" fill="none" width="14" height="14"><path d="M2 8.5L6 12L14 4" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    {f}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const TESTIMONIALS = [
  {
    quote: "We went from 'I should probably do something about marketing' to a chair that books itself. The engine runs, and we just see the patients.",
    name: 'Dr. Rishi Patel, DMD',
    role: 'FOUNDER · LEGACY FAMILY DENTAL',
    metric: '312%',
    metricLabel: 'booking increase',
  },
  {
    quote: "They didn't just run ads — they rebuilt our entire funnel. Our cost per lead dropped 60% in the first 60 days. I've never seen execution this sharp.",
    name: 'Sarah Chen',
    role: 'CMO · SUMMIT AESTHETICS',
    metric: '60%',
    metricLabel: 'lower CPL',
  },
  {
    quote: "The AI voice agent alone pays for the entire retainer. We're answering every call at 2am, booking while we sleep. It feels like cheating.",
    name: 'Marcus Reid',
    role: 'OWNER · COASTAL WEALTH GROUP',
    metric: '100%',
    metricLabel: 'calls answered',
  },
];

/* ===== TESTIMONIALS ===== */
function Testimonials() {
  return (
    <section className="testimonials-section" id="reviews">
      <div className="container">
        <div className="sec-head center reveal" ref={window.useReveal()}>
          <span className="sec-tag">06.5 — Reviews</span>
          <h2 className="sec-title">Clients who <em>stayed.</em></h2>
          <p className="sec-sub">96% retention year-over-year. Here's what a few of them say about working with the engine.</p>
        </div>
        <div className="testimonials-grid reveal-stagger" ref={window.useReveal()}>
          {TESTIMONIALS.map((t, i) => (
            <div key={i} className="testimonial-card">
              <div className="testimonial-metric">
                <span className="testimonial-metric-val">{t.metric}</span>
                <span className="testimonial-metric-lbl">{t.metricLabel}</span>
              </div>
              <p className="testimonial-quote">"{t.quote}"</p>
              <div className="testimonial-attrib">
                <div className="testimonial-avatar"></div>
                <div>
                  <div className="testimonial-name">{t.name}</div>
                  <div className="testimonial-role">{t.role}</div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

const CAMPAIGNS = [
  {
    client: 'Legacy Family Dental',
    industry: 'DENTAL · HEALTH',
    title: 'From invisible to fully booked.',
    desc: 'Complete rebrand + local SEO domination + paid search + voice AI. New patient bookings increased 312% in 90 days.',
    tags: ['Local SEO','Google Ads','Voice AI'],
    stats: [
      { label: 'New bookings', value: '+312%' },
      { label: 'Cost per lead', value: '-47%' },
      { label: 'Months to ROI', value: '2.1' },
    ],
  },
  {
    client: 'Summit Aesthetics',
    industry: 'MED SPA · LIFESTYLE',
    title: 'Luxury positioning that converts.',
    desc: 'High-end funnel, Meta & TikTok creative strategy, AI chatbot qualification. Lead volume up 240% with quality held constant.',
    tags: ['Meta Ads','TikTok','Funnel Design'],
    stats: [
      { label: 'Lead volume', value: '+240%' },
      { label: 'ROAS', value: '6.2×' },
      { label: 'Consultations', value: '+178%' },
    ],
  },
  {
    client: 'Coastal Wealth Group',
    industry: 'FINANCE · WEALTH',
    title: 'Trust at scale.',
    desc: 'Content authority system + LinkedIn & Google lead gen + automated nurture. $4.2M in pipeline generated from cold traffic.',
    tags: ['Content SEO','Google Ads','Automation'],
    stats: [
      { label: 'Pipeline', value: '$4.2M' },
      { label: 'Cost per booked call', value: '$89' },
      { label: 'Close rate', value: '34%' },
    ],
  },
  {
    client: 'Northstar Realty',
    industry: 'REAL ESTATE',
    title: 'Listings that sell themselves.',
    desc: 'Geo-targeted Facebook campaigns, automated follow-up, review generation. 47 qualified buyer inquiries in the first 30 days.',
    tags: ['Meta Ads','Retargeting','Reviews AI'],
    stats: [
      { label: 'Buyer inquiries', value: '+340%' },
      { label: 'Avg. days on market', value: '-28%' },
      { label: 'Reviews generated', value: '+92' },
    ],
  },
];

/* ===== CAMPAIGNS ===== */
function Campaigns() {
  return (
    <section className="campaigns-section" id="campaigns">
      <div className="container">
        <div className="sec-head reveal" ref={window.useReveal()}>
          <span className="sec-tag">07.5 — Campaigns</span>
          <h2 className="sec-title">Results that <em>speak.</em></h2>
          <p className="sec-sub">Real clients. Real numbers. Every campaign is built on research, creative precision, and daily optimization — not guesswork.</p>
        </div>
        <div className="campaigns-grid reveal-stagger" ref={window.useReveal()}>
          {CAMPAIGNS.map((c, i) => (
            <div key={i} className="campaign-card">
              <div className="campaign-card-top">
                <span className="campaign-industry">{c.industry}</span>
                <h4 className="campaign-title">{c.title}</h4>
                <p className="campaign-desc">{c.desc}</p>
                <div className="campaign-tags">
                  {c.tags.map((t, j) => <span key={j} className="campaign-tag">{t}</span>)}
                </div>
              </div>
              <div className="campaign-stats">
                {c.stats.map((s, j) => (
                  <div key={j} className="campaign-stat">
                    <span className="campaign-stat-val">{s.value}</span>
                    <span className="campaign-stat-lbl">{s.label}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

Object.assign(window, { Services, Testimonials, Campaigns });
