// app/api/contact/route.ts
import { NextRequest, NextResponse } from 'next/server'
import nodemailer from 'nodemailer'

export async function POST(req: NextRequest) {
  try {
    const { name, email, message } = await req.json()

    // 1) Configure your Gmail SMTP transporter
    const transporter = nodemailer.createTransport({
      host: process.env.SMTP_HOST,       // smtp.gmail.com
      port: Number(process.env.SMTP_PORT), // 465
      secure: true,                      // use SSL
      auth: {
        user: process.env.SMTP_USER,     // your@gmail.com
        pass: process.env.SMTP_PASS,     // 16-char App Password
      },
    })

    // 2) Send the email
    await transporter.sendMail({
      from: `"${name}" <${email}>`,
      to: process.env.SMTP_USER,         // your address
      subject: 'Contact Form Submission',
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      html: `<p><strong>Name:</strong> ${name}</p>
             <p><strong>Email:</strong> ${email}</p>
             <p>${message.replace(/\n/g, '<br/>')}</p>`,
    })

    return NextResponse.json({ success: true })
  } catch (err) {
    console.error('❌ mail error:', err)
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 })
  }
}
