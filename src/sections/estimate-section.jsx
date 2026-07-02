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
  { id: 'ads',      label: 'Managed Ads',                  setup: 0,     monthly: 0,    pctSpend: 0.15, products: ['bespoke'], meta: '15% of ad spend', note: 'Google, Meta, TikTok & YouTube — billed monthly against actual spend' },
  { id: 'aiuse',    label: 'Premium AI Usage',             setup: 0,     monthly: 0,    products: ['saas','bespoke'],        meta: 'Billed on usage', note: 'Voice, chat & content AI beyond included plan limits' },
  { id: 'rush',     label: 'Rush 7-day delivery',          setup: 0,     monthly: 0,    pctSetup: 0.30, products: ['site'], note: '+30% of one-time setup fee' },
];

const PRODUCTS = [
  { id: 'site',    label: 'Website Only',        sub: 'Build + managed hosting' },
  { id: 'saas',    label: 'Growth Accelerator',  sub: 'Self-service platform' },
  { id: 'bespoke', label: 'Bespoke Service',      sub: 'Fully-managed system' },
];

const fmt = n => n >= 1000 ? '$' + n.toLocaleString('en-US') : '$' + n;
const fmtMonthly = (tier, monthly) =>
  `${fmt(monthly)}${tier.label === 'Enterprise' ? '+' : ''}/mo`;

/* ===== ESTIMATE ===== */
function Estimate() {
  const [showLead, setShowLead] = useState(false);
  const [product, setProduct] = useState('site');
  const [withSite, setWithSite] = useState(false);
  const [siteComplexity, setSiteComplexity] = useState(1);
  const [revTier, setRevTier] = useState(1);
  const [addons, setAddons] = useState({});

  const visibleAddons = ADDONS.filter(a => a.products.includes(product));
  const managedAdsAddon = visibleAddons.find(a => a.id === 'ads');
  const otherAddons = visibleAddons.filter(a => a.id !== 'ads');

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
      if (withSite) {
        const st = SITE_TIERS[siteComplexity];
        setup += st.setup; monthly += st.monthly;
      }
    }

    let aoSetup = 0, aoMonthly = 0, pctSetup = 0;
    visibleAddons.forEach(ao => {
      if (addons[ao.id]) {
        if (ao.pctSetup) pctSetup += ao.pctSetup;
        else { aoSetup += ao.setup; aoMonthly += ao.monthly; }
      }
    });

    const rushFee = Math.round((setup + aoSetup) * pctSetup);
    const isEnterpriseSite = (product === 'site' && siteComplexity === 4) || (withSite && siteComplexity === 4);
    const isEnterpriseBespoke = product === 'bespoke' && revTier === 3;
    const isEnterpriseRevenue =
      (product === 'saas' || product === 'bespoke') && revTier === 3;
    const isEnterpriseMonthly = isEnterpriseSite || isEnterpriseRevenue;
    return {
      setup: setup + aoSetup + rushFee,
      monthly: monthly + aoMonthly,
      isEnterpriseSite,
      isEnterpriseBespoke,
      isEnterpriseRevenue,
      isEnterpriseMonthly,
    };
  }, [product, siteComplexity, revTier, withSite, addons, visibleAddons]);

  const tog = useCallback(id => setAddons(p => ({ ...p, [id]: !p[id] })), []);

  return (
    <>
      {showLead && <LeadCapture onClose={() => setShowLead(false)} source="estimate" />}
      <section id="estimate" className="est-section" aria-labelledby="estimate-title">
      <div className="container">
        <div className="sec-head reveal" ref={useReveal()}>
          <span className="sec-tag">05 — Investment Estimator</span>
          <h2 className="sec-title" id="estimate-title">Build your <em>estimate.</em></h2>
          <p className="sec-sub">Exact pricing from our official rate card — calibrated to your scope. Final confirmation on a free 30-min discovery call.</p>
        </div>

        <div className="est-shell reveal" ref={useReveal()}>
          <div className="est-panel" role="form" aria-label="Pricing estimator">

            {/* A — Product */}
            <div className="est-group">
              <div className="est-group-head"><span className="est-group-num">A</span><span className="est-group-lbl">What are you estimating?</span></div>
              <div className="est-segs s3" role="radiogroup" aria-label="Product type">
                {PRODUCTS.map((p, i) => (
                  <button key={i} type="button" role="radio" aria-checked={product === p.id} aria-label={p.label} className={`est-seg ${product === p.id ? 'on' : ''}`} onClick={() => { setProduct(p.id); setWithSite(false); setAddons({}); }}>
                    <span className="est-seg-lbl">{p.label}</span>
                    <span className="est-seg-sub">{p.sub}</span>
                  </button>
                ))}
              </div>
            </div>

            {/* B — Optional managed website (Growth Accelerator or Bespoke) */}
            {(product === 'saas' || product === 'bespoke') && (
              <div className="est-group">
                <div className="est-group-head"><span className="est-group-num">B</span><span className="est-group-lbl">Add a managed website?</span></div>
                <button type="button" aria-pressed={withSite} className={`est-toggle ${withSite ? 'on' : ''}`} onClick={() => setWithSite(p => !p)}>
                  <span className="est-toggle-check">
                    <IconCheck />
                  </span>
                  <span className="est-toggle-txt"><strong>Include a website build + managed hosting</strong> — priced by complexity below.</span>
                </button>
              </div>
            )}

            {/* C — Website complexity (site or saas/bespoke + site) */}
            {(product === 'site' || ((product === 'saas' || product === 'bespoke') && withSite)) && (
              <div className="est-group">
                <div className="est-group-head"><span className="est-group-num">{product === 'site' ? 'B' : 'C'}</span><span className="est-group-lbl">Website scope</span></div>
                <div className="est-segs s5" role="radiogroup" aria-label="Website complexity">
                  {SITE_TIERS.map((s, i) => (
                    <button key={i} type="button" role="radio" aria-checked={siteComplexity === i} aria-label={s.label} className={`est-seg ${siteComplexity === i ? 'on' : ''}`} onClick={() => setSiteComplexity(i)}>
                      <span className="est-seg-lbl">{s.label}</span>
                      <span className="est-seg-sub">{s.sub}</span>
                      <span className="est-seg-price">{fmt(s.setup)}{s.label === 'Enterprise' ? '+' : ''}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Revenue tier (saas or bespoke) */}
            {(product === 'saas' || product === 'bespoke') && (
              <div className="est-group">
                <div className="est-group-head"><span className="est-group-num">{withSite ? 'D' : 'C'}</span><span className="est-group-lbl">Business revenue tier</span></div>
                <div className="est-segs s4" role="radiogroup" aria-label="Business revenue tier">
                  {(product === 'saas' ? SAAS_TIERS : BESPOKE_TIERS).map((s, i) => (
                    <button key={i} type="button" role="radio" aria-checked={revTier === i} aria-label={s.label} className={`est-seg ${revTier === i ? 'on' : ''}`} onClick={() => setRevTier(i)}>
                      <span className="est-seg-lbl">{s.label}</span>
                      <span className="est-seg-sub">{s.sub}</span>
                      <span className="est-seg-price">{fmtMonthly(s, s.monthly)}</span>
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Add-ons */}
            {visibleAddons.length > 0 && (
              <div className="est-group">
                <div className="est-group-head"><span className="est-group-num">
                  {product === 'site' ? 'C' : (withSite ? 'E' : 'D')}
                </span><span className="est-group-lbl">Add-ons</span></div>

                {product === 'bespoke' && managedAdsAddon && (
                  <div className="est-addons-primary">
                    <button
                      type="button"
                      aria-pressed={!!addons[managedAdsAddon.id]}
                      className={`est-ao est-ao--primary ${addons[managedAdsAddon.id] ? 'on' : ''}`}
                      onClick={() => tog(managedAdsAddon.id)}
                    >
                      <span className="est-ao-primary-badge">Recommended</span>
                      <div className="est-ao-main">
                        <span className="est-ao-chk">
                          <IconCheck />
                        </span>
                        <div className="est-ao-primary-body">
                          <span className="est-ao-name">{managedAdsAddon.label}</span>
                          <span className="est-ao-meta">{managedAdsAddon.meta}</span>
                        </div>
                      </div>
                      <span className="est-ao-note">{managedAdsAddon.note}</span>
                    </button>
                  </div>
                )}

                {otherAddons.length > 0 && (
                  <div className="est-addons" role="group" aria-label={product === 'bespoke' ? 'Additional add-ons' : 'Optional add-ons'}>
                    {otherAddons.map(ao => (
                      <button key={ao.id} type="button" aria-pressed={!!addons[ao.id]} className={`est-ao ${addons[ao.id] ? 'on' : ''}`} onClick={() => tog(ao.id)}>
                        <span className="est-ao-chk">
                          <IconCheck />
                        </span>
                        <span className="est-ao-txt">
                          <span className="est-ao-name">{ao.label}</span>
                          {!ao.pctSetup && (
                            <span className="est-ao-meta">
                              {ao.meta ? ao.meta : (
                                <>
                                  {ao.setup > 0 && `+${fmt(ao.setup)} setup`}
                                  {ao.setup > 0 && ao.monthly > 0 && ' · '}
                                  {ao.monthly > 0 && `+${fmt(ao.monthly)}/mo`}
                                  {ao.pctSpend && `+${Math.round(ao.pctSpend * 100)}% of ad spend`}
                                </>
                              )}
                            </span>
                          )}
                          <span className="est-ao-note">{ao.note}</span>
                        </span>
                      </button>
                    ))}
                  </div>
                )}
              </div>
            )}
          </div>

          {/* Summary */}
          <aside className="est-summary" aria-live="polite" aria-label="Live pricing estimate">
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
                  <div className="est-sum-fig">{fmt(totals.setup)}{totals.isEnterpriseSite || totals.isEnterpriseBespoke ? '+' : ''}</div>
                </div>
              )}
              <div className="est-sum-row">
                <div className="est-sum-meta">
                  <span className="est-sum-meta-lbl">Monthly retainer</span>
                  <span className="est-sum-meta-range">3-month minimum</span>
                </div>
                <div className="est-sum-fig">
                  {fmt(totals.monthly)}
                  {totals.isEnterpriseMonthly ? '+' : ''}
                  <span className="per">/mo</span>
                </div>
              </div>

              <button type="button" className="est-sum-cta" onClick={() => setShowLead(true)}>
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

export { Estimate }
