/* global React */

const AI_AGENTS = [
  { tag:'24/7', name:<>Conversation <em>AI</em></>, desc:'Smart chatbots that qualify leads, answer questions, and book appointments across SMS, email, web chat, and social — in your voice.', icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M21 11.5c0 4.5-4 8-9 8-1.6 0-3-.3-4.4-.9L3 20l1.4-4.6C3.5 14 3 12.8 3 11.5 3 7 7 3.5 12 3.5s9 3.5 9 8z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg> },
  { tag:'LIVE', name:<>Voice <em>AI</em></>, desc:'Phone agents that answer every call naturally, book appointments, take messages, and handle routine inquiries — zero hold times.', icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M5 4h3l2 5-2.5 1.5a11 11 0 005 5L14 13l5 2v3a2 2 0 01-2 2A14 14 0 013 6a2 2 0 012-2z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg> },
  { tag:'SCALE', name:<>Content <em>AI</em></>, desc:'Emails, social posts, blog articles, landing pages, and ad copy — drafted on-brand and at scale, without a copywriter.', icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M4 4h12l4 4v12H4z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/><path d="M16 4v4h4M8 12h8M8 16h6" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg> },
  { tag:'5-STAR', name:<>Reviews <em>AI</em></>, desc:'Automatically requests reviews from happy customers, monitors every platform, and responds with personalized replies.', icon:<svg width="20" height="20" viewBox="0 0 24 24" fill="none"><path d="M12 3l2.5 6 6.5.5-5 4.5 1.5 6.5L12 17l-5.5 3.5L8 14l-5-4.5 6.5-.5L12 3z" stroke="currentColor" strokeWidth="1.6" strokeLinejoin="round"/></svg> },
];

/* ===== AI ENGINE ===== */
function AIEngine() {
  return (
    <section className="ai-section" id="ai">
      <div className="container">
        <div className="sec-head center reveal" ref={window.useReveal()}>
          <span className="sec-tag">02 — AI Engine</span>
          <h2 className="sec-title">An agent stack that works<br/><em>while you sleep.</em></h2>
          <p className="sec-sub">Four senior AI agents in permanent deployment — your front line, your back office, and your content team rolled into one system.</p>
        </div>
        <div className="ai-orb-area reveal" ref={window.useReveal()}>
          <div className="ai-ring"></div>
          <div className="ai-ring r2"></div>
          <div className="ai-core">
            <div className="ai-core-inner">
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none">
                <path d="M12 3C7 3 3 7 3 12s4 9 9 9 9-4 9-9-4-9-9-9z" stroke="currentColor" strokeWidth="1.5"/>
                <path d="M12 8v4l3 3" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round"/>
              </svg>
              <span className="ai-core-label">ENGINE</span>
            </div>
          </div>
          {[{cls:'n1',lbl:'CONV'},{cls:'n2',lbl:'VOICE'},{cls:'n3',lbl:'CONTENT'},{cls:'n4',lbl:'REVIEWS'}].map((n,i) => (
            <div key={i} className={`ai-node-outer ${n.cls}`}>
              <div className="ai-node">
                <div className="ai-node-icon">{AI_AGENTS[i].icon}</div>
                <span className="ai-node-label">{n.lbl}</span>
              </div>
            </div>
          ))}
        </div>
        <div className="ai-cards-grid reveal-stagger" ref={window.useReveal()}>
          {AI_AGENTS.map((a,i) => (
            <div key={i} className="ai-card">
              <span className="ai-card-badge">{a.tag}</span>
              <div className="ai-card-icon">{a.icon}</div>
              <h4>{a.name}</h4>
              <p>{a.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

/* ===== CAPABILITIES ===== */
function Capabilities() {
  return (
    <section className="cap-section" id="capabilities">
      <div className="container">
        <div className="sec-head reveal" ref={window.useReveal()}>
          <span className="sec-tag">03 — Capabilities</span>
          <h2 className="sec-title">Every channel.<br/><em>One system.</em></h2>
          <p className="sec-sub">A full operating system for marketing — CRM, automation, ads, SEO, reputation, content — engineered to compound, not just run.</p>
        </div>
        <div className="bento reveal-stagger" ref={window.useReveal()}>

          {/* CRM / Pipeline — 6 col */}
          <div className="bc bc-6">
            <div>
              <div className="bc-eye">● CRM &amp; Pipeline</div>
              <h3>See every lead, every <em>opportunity.</em></h3>
              <p>One view of every prospect, conversation, and deal — scored, qualified, and routed automatically.</p>
            </div>
            <div className="bc-viz">
              <div className="b-pipeline">
                {[{h:'New',leads:['M. Chen','A. Reyes','+ 6'],a:false},{h:'Qualified',leads:['D. Patel','L. Jordan'],a:false},{h:'Booked',leads:['S. Yang','R. Olsen','+ 3'],a:true},{h:'Closed',leads:['B. Adler'],a:false}].map((col,i) => (
                  <div key={i} className={`col ${col.a?'active':''}`}>
                    <div className="col-h">{col.h}</div>
                    {col.leads.map((l,j) => <div key={j} className="lead">{l}</div>)}
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Voice AI — 3 col dark */}
          <div className="bc bc-3 bc-dark">
            <div>
              <div className="bc-eye">● Voice AI</div>
              <h3>Phones answered, <em>always.</em></h3>
            </div>
            <div className="bc-viz">
              <div className="b-wave">{Array.from({length:12}).map((_,i)=><span key={i}></span>)}</div>
            </div>
          </div>

          {/* Reputation — 3 col gold */}
          <div className="bc bc-3 bc-gold">
            <div>
              <div className="bc-eye">● Reputation</div>
              <h3>5-stars on <em>autopilot.</em></h3>
            </div>
            <div className="bc-viz">
              <div className="b-stars">★ ★ ★ ★ ★</div>
            </div>
          </div>

          {/* Email / SMS */}
          <div className="bc bc-4">
            <div>
              <div className="bc-eye">● Email · SMS</div>
              <h3>Follow-up that<br/><em>never forgets.</em></h3>
            </div>
            <div className="bc-viz" style={{flexDirection:'column',gap:6,alignItems:'stretch'}}>
              <div style={{background:'var(--paper-2)',border:'1px solid var(--line)',borderRadius:10,padding:'10px 12px',fontSize:12}}>
                <div style={{color:'var(--ink)',fontWeight:500,marginBottom:3}}>Re: Your consult — Thu 2:30pm</div>
                <div style={{color:'var(--ink-3)',fontSize:11,marginBottom:6,fontFamily:'Geist Mono, monospace'}}>Automated · just now</div>
                <div style={{color:'var(--ink-2)',lineHeight:1.4}}>Hi Sarah — We're holding your spot. Reply YES to confirm…</div>
              </div>
            </div>
          </div>

          {/* SEO */}
          <div className="bc bc-2">
            <div>
              <div className="bc-eye">● SEO</div>
              <h3><em>Found</em> where it counts.</h3>
            </div>
            <div className="bc-viz">
              <div className="b-seo">
                <svg width="13" height="13" viewBox="0 0 24 24" fill="none"><circle cx="11" cy="11" r="7" stroke="currentColor" strokeWidth="1.6"/><path d="M16 16l5 5" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round"/></svg>
                best dentist near me<span className="b-seo-cursor"></span>
              </div>
            </div>
          </div>

          {/* Calendar */}
          <div className="bc bc-3">
            <div>
              <div className="bc-eye">● Booking</div>
              <h3>Calendar <em>filled itself.</em></h3>
            </div>
            <div className="bc-viz">
              <div className="b-cal">
                {[0,0,0,1,0,1,0, 0,2,0,1,0,1,0, 1,0,0,2,0,1,0, 0,1,0,0,2,0,1].map((s,i) => (
                  <div key={i} className={`day ${s===2?'booked':s===1?'gold':''}`}>{(i%7)+1}</div>
                ))}
              </div>
            </div>
          </div>

          {/* Conversation AI Chat */}
          <div className="bc bc-3">
            <div>
              <div className="bc-eye">● Conversation AI</div>
              <h3>Every visitor, <em>greeted.</em></h3>
            </div>
            <div className="bc-viz">
              <div className="b-chat">
                <div className="bub user">Do you take new patients?</div>
                <div className="bub ai">Yes! We have Thursday 2:30 or Friday 10am. Want me to book you? ✦</div>
                <div className="typing"><span></span><span></span><span></span></div>
              </div>
            </div>
          </div>

          {/* Ad Management dark */}
          <div className="bc bc-3 bc-dark">
            <div>
              <div className="bc-eye">● Ad Management</div>
              <h3>Spend that <em>compounds.</em></h3>
            </div>
            <div className="bc-viz">
              <div className="b-ad">
                <div className="b-ad-cell"><div className="b-ad-lbl">ROAS</div><div className="b-ad-val up">5.8×</div></div>
                <div className="b-ad-cell"><div className="b-ad-lbl">CPA</div><div className="b-ad-val">$24</div></div>
                <div className="b-ad-cell"><div className="b-ad-lbl">Spend</div><div className="b-ad-val">$18.4K</div></div>
                <div className="b-ad-cell"><div className="b-ad-lbl">Revenue</div><div className="b-ad-val up">$107K</div></div>
              </div>
            </div>
          </div>

          {/* Workflows */}
          <div className="bc bc-6">
            <div>
              <div className="bc-eye">● Workflows &amp; Automation</div>
              <h3>Set once. <em>Run forever.</em></h3>
              <p>Visual automation that triggers SMS, email, AI agents, and tasks — chaining every touchpoint from first click to lifetime value.</p>
            </div>
            <div className="bc-viz" style={{justifyContent:'center'}}>
              <svg viewBox="0 0 400 60" style={{width:'100%',maxWidth:480,height:60}}>
                <defs>
                  <linearGradient id="flowG" x1="0" x2="1"><stop offset="0%" stopColor="var(--teal)"/><stop offset="100%" stopColor="var(--gold)"/></linearGradient>
                </defs>
                <line x1="20" y1="30" x2="380" y2="30" stroke="url(#flowG)" strokeWidth="1.5" strokeDasharray="4 5"/>
                {[20,105,190,275,360].map((x,i) => (
                  <g key={i}>
                    <circle cx={x} cy="30" r="18" fill="var(--paper)" stroke="url(#flowG)" strokeWidth="1.5"/>
                    <text x={x} y="35" textAnchor="middle" fill="var(--gold)" fontSize="11" fontFamily="Geist Mono">{['T','AI','✉','☎','$'][i]}</text>
                  </g>
                ))}
              </svg>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

Object.assign(window, { AIEngine, Capabilities });
