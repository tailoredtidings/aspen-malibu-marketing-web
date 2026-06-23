const PARTNERS_EMAIL = 'partners@aspenmalibumarketing.com'

function esc(value) {
  return String(value ?? '')
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
}

function buildEmailHtml(form) {
  const rows = [
    ['Source', form.source || 'unknown'],
    ['Name', `${form.firstName} ${form.lastName}`.trim()],
    ['Email', form.email],
    ['Phone', form.phone],
    ['Business', form.business],
    ['Website', form.website || '—'],
    ['Challenge', form.challenge || '—'],
  ]

  const body = rows
    .map(([label, value]) => `<tr><td style="padding:8px 12px;font-weight:600;">${esc(label)}</td><td style="padding:8px 12px;">${esc(value)}</td></tr>`)
    .join('')

  return `
    <h2 style="margin:0 0 16px;">New Free Audit Request</h2>
    <table style="border-collapse:collapse;width:100%;max-width:560px;">${body}</table>
  `
}

async function sendViaResend(form) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) return { ok: false, reason: 'not_configured' }

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${apiKey}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.LEAD_FROM_EMAIL || 'Aspen Malibu Website <onboarding@resend.dev>',
      to: [PARTNERS_EMAIL],
      reply_to: form.email,
      subject: `Free Audit Request — ${form.business}`,
      html: buildEmailHtml(form),
    }),
  })

  if (!response.ok) {
    const error = await response.text()
    console.error('Resend error:', error)
    return { ok: false, reason: 'send_failed' }
  }

  return { ok: true }
}

async function createGhlContact(form) {
  const pit = process.env.GHL_PIT
  if (!pit) {
    return { ok: false, reason: 'ghl_not_configured' }
  }

  const phone = (form.phone || '').replace(/\s+/g, '')

  const payload = {
    firstName: form.firstName,
    lastName: form.lastName,
    email: form.email,
    phone,
    name: `${form.firstName} ${form.lastName}`.trim(),
    companyName: form.business,
    website: form.website || undefined,
    source: form.source || 'Growth Audit',
    tags: ['growth-audit'],
    notes: form.challenge ? `Biggest growth challenge: ${form.challenge}` : undefined,
  }

  // remove undefined values
  Object.keys(payload).forEach(k => {
    if (payload[k] === undefined) delete payload[k]
  })

  try {
    const res = await fetch('https://services.leadconnectorhq.com/contacts/', {
      method: 'POST',
      headers: {
        'Authorization': `Bearer ${pit}`,
        'Content-Type': 'application/json',
        'Version': '2021-07-28',
      },
      body: JSON.stringify(payload),
    })

    if (!res.ok) {
      const text = await res.text()
      console.error('GHL contact create failed', res.status, text)
      return { ok: false, reason: 'ghl_api_error' }
    }

    return { ok: true }
  } catch (err) {
    console.error('GHL contact fetch error', err)
    return { ok: false, reason: 'ghl_fetch_failed' }
  }
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const form = req.body
  if (!form?.firstName || !form?.lastName || !form?.email || !form?.phone || !form?.business) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  // Send to both email (for immediate notification) and GHL (primary CRM)
  const [ghlResult, emailResult] = await Promise.all([
    createGhlContact(form),
    sendViaResend(form),
  ])

  if (!ghlResult.ok) {
    console.warn('GHL submission failed:', ghlResult.reason)
  }
  if (!emailResult.ok) {
    console.warn('Email submission failed:', emailResult.reason)
  }

  if (!ghlResult.ok && !emailResult.ok) {
    return res.status(502).json({ error: 'delivery_failed' })
  }

  return res.status(200).json({ ok: true })
}
