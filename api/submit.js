export default async function handler(req, res) {
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' })
  }

  const data = req.body
  const subject = data.subject || 'New Enquiry — The Web House'

  const text = Object.entries(data)
    .filter(([key]) => key !== 'subject')
    .map(([key, val]) => {
      const label = key.replace(/([A-Z])/g, ' $1').replace(/_/g, ' ').trim()
      return `${label.charAt(0).toUpperCase() + label.slice(1)}: ${val || '—'}`
    })
    .join('\n')

  try {
    const r = await fetch('https://api.resend.com/emails', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        from: 'The Web House <onboarding@resend.dev>',
        to: ['info@thewebhouse.africa'],
        subject,
        text,
      }),
    })

    if (r.ok) return res.status(200).json({ success: true })

    const err = await r.json()
    console.error('Resend error:', err)
    return res.status(500).json({ error: 'Email delivery failed' })
  } catch (err) {
    console.error('Submit error:', err)
    return res.status(500).json({ error: 'Internal error' })
  }
}
