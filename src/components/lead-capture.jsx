import React, { useState, useEffect, useRef, useCallback } from 'react'
import { IconClose, IconArrow } from './icons'

function trackEvent(name, params = {}) {
  if (window.gtag) window.gtag('event', name, params)
  if (window.gtag_GHL) window.gtag_GHL('event', name, params)
}

export function LeadCapture({ onClose, source = 'general' }) {
  const [step, setStep] = useState(1)
  const [form, setForm] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    business: '',
    website: '',
    challenge: '',
  })

  useEffect(() => {
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    trackEvent('lead_capture_open', { source })
    return () => { document.body.style.overflow = prev }
  }, [source])

  const modalRef = useRef(null)
  useEffect(() => {
    const modal = modalRef.current
    if (!modal) return
    const focusable = modal.querySelectorAll(
      'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
    )
    const first = focusable[0]
    const last = focusable[focusable.length - 1]
    first?.focus()

    const onKey = (e) => {
      if (e.key === 'Escape') { onClose(); return }
      if (e.key !== 'Tab') return
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault()
        last?.focus()
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault()
        first?.focus()
      }
    }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [onClose, step])

  const update = useCallback((k, v) => setForm(f => ({ ...f, [k]: v })), [])

  const canSubmit = form.firstName && form.lastName && form.email && form.phone && form.business

  const submit = () => {
    if (!canSubmit) return
    trackEvent('lead_capture_submit', { source, business: form.business })
    // GHL form submit
    if (window.submitGHLForm) {
      window.submitGHLForm({
        firstName: form.firstName,
        lastName: form.lastName,
        email: form.email,
        phone: form.phone,
        business: form.business,
        website: form.website,
        challenge: form.challenge,
        source,
      })
    }
    setStep(2)
  }

  return (
    <div className="modal-backdrop" onClick={e => e.target === e.currentTarget && onClose()}>
      <div className="modal-card" ref={modalRef} role="dialog" aria-modal="true" aria-labelledby="lead-title">
        <button className="modal-close" onClick={onClose} aria-label="Close lead form">
          <IconClose />
        </button>

        {step === 1 && (
          <div className="modal-body">
            <span className="modal-eyebrow">Free Growth Audit · No Obligation</span>
            <h2 id="lead-title" className="modal-title">Let's find your <em>leaks.</em></h2>
            <p className="modal-desc">Tell us about your business. We'll audit your funnel, ads, and website — then send you a 3-minute video showing exactly where you're losing revenue and how to fix it.</p>

            <div className="modal-form">
              <div className="modal-field-row">
                <div className="modal-field">
                  <label htmlFor="lc-fname">First name *</label>
                  <input id="lc-fname" type="text" placeholder="John" value={form.firstName} onChange={e => update('firstName', e.target.value)} />
                </div>
                <div className="modal-field">
                  <label htmlFor="lc-lname">Last name *</label>
                  <input id="lc-lname" type="text" placeholder="Doe" value={form.lastName} onChange={e => update('lastName', e.target.value)} />
                </div>
              </div>
              <div className="modal-field">
                <label htmlFor="lc-email">Business email *</label>
                <input id="lc-email" type="email" placeholder="you@yourbusiness.com" value={form.email} onChange={e => update('email', e.target.value)} />
              </div>
              <div className="modal-field">
                <label htmlFor="lc-phone">Phone *</label>
                <input id="lc-phone" type="tel" placeholder="+1 (555) 000-0000" value={form.phone} onChange={e => update('phone', e.target.value)} />
              </div>
              <div className="modal-field">
                <label htmlFor="lc-biz">Business name *</label>
                <input id="lc-biz" type="text" placeholder="Acme Co." value={form.business} onChange={e => update('business', e.target.value)} />
              </div>
              <div className="modal-field">
                <label htmlFor="lc-site">Website (optional)</label>
                <input id="lc-site" type="text" placeholder="https://yourbusiness.com" value={form.website} onChange={e => update('website', e.target.value)} />
              </div>
              <div className="modal-field">
                <label htmlFor="lc-challenge">Biggest growth challenge right now?</label>
                <textarea id="lc-challenge" rows="3" placeholder="Not enough leads? High cost per acquisition? Can't scale ads?" value={form.challenge} onChange={e => update('challenge', e.target.value)} style={{resize:'vertical',fontFamily:'inherit',lineHeight:1.5}} />
              </div>
            </div>

            <button
              className={`modal-cta ${canSubmit ? 'ready' : ''}`}
              onClick={submit}
              disabled={!canSubmit}
            >
              {canSubmit ? 'Send my free audit request' : 'Fill required fields to continue'}
              <IconArrow />
            </button>
            <p className="modal-note">We reply within 24 hours. No spam. No sales pressure. Just an honest audit.</p>
          </div>
        )}

        {step === 2 && (
          <div className="modal-body" style={{ textAlign: 'center', gap: 24 }}>
            <div style={{ width: 64, height: 64, borderRadius: '50%', background: 'var(--gold-bg)', border: '1px solid rgba(184,145,42,0.2)', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto' }}>
              <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="var(--gold)" strokeWidth="2"><path d="M20 6L9 17l-5-5"/></svg>
            </div>
            <div>
              <span className="modal-eyebrow">Request Received</span>
              <h2 className="modal-title" style={{ marginTop: 8 }}>We'll be in <em>touch.</em></h2>
            </div>
            <p className="modal-desc" style={{ margin: '0 auto', maxWidth: 400 }}>
              A senior strategist will review your business and send your personalized audit within 24 hours. If you're a fit, we'll book a 30-min call to walk through it together.
            </p>
            <div style={{ display: 'flex', gap: 12, justifyContent: 'center', flexWrap: 'wrap' }}>
              <a href="mailto:partners@aspenmalibumarketing.com" className="modal-cta ready" style={{ width: 'auto', padding: '14px 22px' }}>
                Email us directly
                <IconArrow />
              </a>
              <button className="btn-outline" onClick={onClose} style={{ padding: '14px 22px' }}>
                Close
              </button>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
