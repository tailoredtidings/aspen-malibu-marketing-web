import React, { useState, useEffect, useRef, useMemo, useCallback } from 'react'
import { useReveal } from '../hooks/useReveal'
import { IconArrow, IconArrowSmall, IconClose, IconCheck, IconBack, IconPlus, IconTick } from '../components/icons'
import { LeadCapture } from '../components/lead-capture'

// ── PRICING DATA (exact from pricing doc) ──
const SITE_TIERS = [
  { label: 'Landing Page', sub: 'Single page', setup: 7995, monthly: 995 },
  { label: 'Standard',     sub: '6–12 pages',  setup: 14995, monthly: 1495 },
  { label: 'Advanced',     sub: '15+ pages',   setup: 19995, monthly: 2195 },
  { label: 'Complex',      sub: 'E-commerce',  setup: 27995, monthly: 3495 },
  { label: 'Enterprise',   sub: 'Web app',     setup: 39995, monthly: 4995 },
];

const SAAS_TIERS = [
  { label: 'Small Business', sub: 'Under $1M',    setup: 6995,  monthly: 997  },
  { label: 'Growth Business', sub: '$1M – $5M',   setup: 8995,  monthly: 1997 },
  { label: 'Scale Business', sub: '$5M – $15M',   setup: 10995, monthly: 3497 },
  { label: 'Enterprise',     sub: '$15M+',        setup: 14995, monthly: 6997 },
];

const BESPOKE_TIERS = [
  { label: 'Small Business', sub: 'Under $1M',    setup: 11995, monthly: 2995  },
  { label: 'Growth Business', sub: '$1M – $5M',   setup: 18995, monthly: 5495  },
  { label: 'Scale Business', sub: '$5M – $15M',   setup: 27995, monthly: 9495  },
  { label: 'Enterprise',     sub: '$15M+',        setup: 49995, monthly: 20995 },
];

const ADDONS = [
  { id: 'disc',     label: 'Discovery + Strategy Session', setup: 2495,  monthly: 0,    products: ['site','saas','bespoke'], note: 'Comprehensive audit + strategy doc' },
  { id: 'launch',   label: 'Launch Accelerator',           setup: 4995,  monthly: 0,    products: ['site','saas','bespoke'], note: '30-day launch sprint + creative assets' },
  { id: 'audit',    label: 'Forensic Ad Audit',            setup: 3995,  monthly: 0,    products: ['saas','bespoke'],        note: 'AI-powered account analysis — find every dollar of waste' },
  { id: 'searchmo', label: 'Monthly Ad Intelligence',      setup: 0,     monthly: 2995, products: ['saas','bespoke'],        note: 'Ongoing monitoring + monthly optimization sprints' },
  { id: 'aiuse',    label: 'Premium AI Usage',             setup: 0,     monthly: 0,    products: ['saas','bespoke'],        note: 'Cost + 100% markup — billed on usage' },
  { id: 'rush',     label: 'Rush 7-day delivery',          setup: 2495,  monthly: 0,    products: ['site'],                  note: '+25% of one-time fee minimum' },
];

const PRODUCTS = [
  { id: 'site',    label: 'Website Only',        sub: 'Build + managed hosting' },
  { id: 'saas',    label: 'Growth Accelerator',  sub: 'Self-service platform' },
  { id: 'bespoke', label: 'Bespoke Service',      sub: 'Full-managed system' },
];

const fmt = n => n >= 1000 ? '$' + n.toLocaleString('en-US') : '$' + n;

/* ===== ESTIMATE ===== */
function Estimate() {
  const [showLead, setShowLead] = useState(false);
  const [product, setProduct] = useState('site');
  const [withSite, setWithSite] = useState(false);
  const [siteComplexity, setSiteComplexity] = useState(1);
  const [revTier, setRevTier] = useState(1);
  const [addons, setAddons] = useState({});

  const visibleAddons = ADDONS.filter(a => a.products.includes(product));

  const totals = useMemo(() => {
    let setup = 0, monthly = 0;

    if (product === 'site') {
      const s = SITE_TIERS[siteComplexity];
      setup = s.setup; monthly = s.monthly;
    } else if (product === 'saas') {
      const s = SAAS_TIERS[revTier];
      setup = s.setup; monthly = s.monthly;
      if (withSite) {
        const st = SITE_TIERS[siteComplexity];
        setup += st.setup; monthly += st.monthly;
      }
    } else {
      const s = BESPOKE_TIERS[revTier];
      setup = s.setup; monthly = s.monthly;
    }

    let aoSetup = 0, aoMonthly = 0;
    visibleAddons.forEach(ao => {
      if (addons[ao.id]) { aoSetup += ao.setup; aoMonthly += ao.monthly; }
    });

    return { setup: setup + aoSetup, monthly: monthly + aoMonthly };
  }, [product, siteComplexity, revTier, withSite, addons, visibleAddons]);

  const tog = useCallback(id => setAddons(p => ({ ...p, [id]: !p[id] })), []);

  return (
    <>
      {showLead && <LeadCapture onClose={() => setShowLead(false)} source="estimate" />}
      <section id="estimate" className="est-section">
      <div className="container">
        <div className="sec-head reveal" ref={useReveal()}>
          <span className="sec-tag">05 — Investment Estimator</span>
          <h2 className="sec-title">Build your <em>quote.</em></h2>
          <p className="sec-sub">Exact pricing from our official rate card — calibrated to your scope. Final confirmation on a free 30-min discovery call.</p>
        </div>

        <div className="est-shell reveal" ref={useReveal()}>
          <div className="est-panel">

            {/* A — Product */}
            <div className="est-group">
              <div className="est-group-head"><span className="est-group-num">A</span><span className="est-group-lbl">What are you estimating?</span></div>
              <div className="est-segs s3">
                {PRODUCTS.map((p, i) => (
                  <button key={i} className={`est-seg ${product === p.id ? 'on' : ''}`} onClick={() => { setProduct(p.id); setAddons({}); }}>
                    <span className="est-seg-lbl">{p.label}</span>
                    <span className="est-seg-sub">{p.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* B — Website complexity (site or saas+site) */}
            {(product === 'site' || (product === 'saas' && withSite)) && (
              <div className="est-group">
                <div className="est-group-head"><span className="est-group-num">B</span><span className="est-group-lbl">Website scope</span></div>
                <div className="est-segs s3" style={{gridTemplateColumns:'repeat(5,1fr)'}}>
                  {SITE_TIERS.map((s, i) => (
                    <button key={i} className={`est-seg ${siteComplexity === i ? 'on' : ''}`} onClick={() => setSiteComplexity(i)}>
                      <span className="est-seg-lbl">{s.label}</span>
                      <span className="est-seg-sub">{s.sub}</span>
                      <span className="est-seg-price">{fmt(s.setup)}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Saas website toggle */}
            {product === 'saas' && (
              <div className="est-group">
                <div className="est-group-head"><span className="est-group-num" style={{background:'var(--teal-bg)',color:'var(--teal)'}}>+</span><span className="est-group-lbl">Add a managed website?</span></div>
                <button className={`est-toggle ${withSite ? 'on' : ''}`} onClick={() => setWithSite(p => !p)}>
                  <span className="est-toggle-check">
                    <IconCheck />
                  </span>
                  <span className="est-toggle-txt"><strong>Include a Framer website build + managed hosting</strong> — priced by complexity above.</span>
                </button>
              </div>
            )}

            {/* C — Revenue tier (saas or bespoke) */}
            {(product === 'saas' || product === 'bespoke') && (
              <div className="est-group">
                <div className="est-group-head"><span className="est-group-num">C</span><span className="est-group-lbl">Business revenue tier</span></div>
                <div className="est-segs s4">
                  {(product === 'saas' ? SAAS_TIERS : BESPOKE_TIERS).map((s, i) => (
                    <button key={i} className={`est-seg ${revTier === i ? 'on' : ''}`} onClick={() => setRevTier(i)}>
                      <span className="est-seg-lbl">{s.label}</span>
                      <span className="est-seg-sub">{s.sub}</span>
                      <span className="est-seg-price">{fmt(s.monthly)}/mo</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* D — Add-ons */}
            {visibleAddons.length > 0 && (
              <div className="est-group">
                <div className="est-group-head"><span className="est-group-num">D</span><span className="est-group-lbl">Add-ons</span></div>
                <div className="est-addons">
                  {visibleAddons.map(ao => (
                    <button key={ao.id} className={`est-ao ${addons[ao.id] ? 'on' : ''}`} onClick={() => tog(ao.id)}>
                      <span className="est-ao-chk">
                        <IconCheck />
                      </span>
                      <span className="est-ao-txt">
                        <span className="est-ao-name">{ao.label}</span>
                        <span className="est-ao-meta">
                          {ao.setup > 0 && `+${fmt(ao.setup)} setup`}
                          {ao.setup > 0 && ao.monthly > 0 && ' · '}
                          {ao.monthly > 0 && `+${fmt(ao.monthly)}/mo`}
                          {ao.setup === 0 && ao.monthly === 0 && 'Usage-based'}
                        </span>
                        <span className="est-ao-note">{ao.note}</span>
                      </span>
                    </button>
                  ))}
                </div>
                {(product === 'saas' || product === 'bespoke') && (
                  <p style={{fontSize:12,color:'var(--ink-3)',marginTop:8,fontFamily:'Geist Mono, monospace',letterSpacing:'0.03em'}}>
                    Ad management: 15% of spend — billed monthly against actual spend. Not shown above.
                  </p>
                )}
              </div>
            )}
          </div>

          {/* Summary */}
          <aside className="est-summary">
            <div className="est-sum-card">
              <div className="est-sum-live"><span className="dot"></span>LIVE ESTIMATE</div>
              <div className="est-sum-eng-name">
                {PRODUCTS.find(p => p.id === product)?.label.split(' ').map((w, i, arr) =>
                  i === arr.length - 1 ? <em key={i}>{w}</em> : <span key={i}>{w} </span>
                )}
              </div>

              {totals.setup > 0 && (
                <div className="est-sum-row">
                  <div className="est-sum-meta">
                    <span className="est-sum-meta-lbl">One-time setup</span>
                    <span className="est-sum-meta-range">50% due upfront</span>
                  </div>
                  <div className="est-sum-fig">{fmt(totals.setup)}</div>
                </div>
              )}
              <div className="est-sum-row">
                <div className="est-sum-meta">
                  <span className="est-sum-meta-lbl">Monthly retainer</span>
                  <span className="est-sum-meta-range">3-month minimum</span>
                </div>
                <div className="est-sum-fig">{fmt(totals.monthly)}<span className="per">/mo</span></div>
              </div>

              <button className="est-sum-cta" onClick={() => setShowLead(true)}>
                Lock in this scope
                <IconArrow />
              </button>
              <p className="est-sum-note">Prices reflect our official rate card. Final scope confirmed on a free 30-min call. Minimum 3-month commitment.</p>
            </div>
          </aside>
        </div>
      </div>
    </section>
    </>
  );
}

Section

export { Estimate }
