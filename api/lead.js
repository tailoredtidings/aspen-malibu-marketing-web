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

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const form = req.body
  if (!form?.firstName || !form?.lastName || !form?.email || !form?.phone || !form?.business) {
    return res.status(400).json({ error: 'Missing required fields' })
  }

  const result = await sendViaResend(form)
  if (!result.ok) {
    return res.status(result.reason === 'not_configured' ? 503 : 502).json({ error: result.reason })
  }

  return res.status(200).json({ ok: true })
}
