import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, phone, email, suburb, service, package: pkg, confidence, preferredDate, message } = body;

  try {
    // Email to instructors
    await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: 'lppdrivingschool44@gmail.com',
      replyTo: email || undefined,
      subject: `New Booking — ${name} — ${service}`,
      html: `
        <h2 style="color:#0a0f1e;font-family:sans-serif;">New Booking Request — L Plus P Driving School</h2>
        <table style="font-family:sans-serif;font-size:15px;border-collapse:collapse;width:100%;max-width:500px;">
          <tr><td style="padding:8px 0;color:#7a8aaa;width:140px;">Name</td><td style="padding:8px 0;font-weight:600;">${name}</td></tr>
          <tr><td style="padding:8px 0;color:#7a8aaa;">Phone</td><td style="padding:8px 0;font-weight:600;">${phone}</td></tr>
          <tr><td style="padding:8px 0;color:#7a8aaa;">Email</td><td style="padding:8px 0;">${email || 'Not provided'}</td></tr>
          <tr><td style="padding:8px 0;color:#7a8aaa;">Suburb</td><td style="padding:8px 0;">${suburb}</td></tr>
          <tr><td style="padding:8px 0;color:#7a8aaa;">Service</td><td style="padding:8px 0;">${service}</td></tr>
          <tr><td style="padding:8px 0;color:#7a8aaa;">Package</td><td style="padding:8px 0;">${pkg || 'Not selected'}</td></tr>
          <tr><td style="padding:8px 0;color:#7a8aaa;">Confidence</td><td style="padding:8px 0;">${confidence}/5</td></tr>
          <tr><td style="padding:8px 0;color:#7a8aaa;">Preferred Date</td><td style="padding:8px 0;">${preferredDate || 'Not specified'}</td></tr>
          <tr><td style="padding:8px 0;color:#7a8aaa;">Message</td><td style="padding:8px 0;">${message || 'None'}</td></tr>
        </table>
      `,
    });

    // Confirmation email to student (only if they provided an email)
    if (email) {
      await resend.emails.send({
        from: 'onboarding@resend.dev',
        to: email,
        subject: 'Booking received — L Plus P Driving School',
        html: `
          <div style="font-family:sans-serif;max-width:480px;color:#0a0f1e;">
            <h2 style="color:#0a0f1e;">Hi ${name},</h2>
            <p style="color:#3a4a6a;line-height:1.6;">
              We've received your booking request and will WhatsApp you within the hour to confirm your lesson.
            </p>
            <p style="color:#3a4a6a;line-height:1.6;">
              If you need to reach us urgently, call Mick on <strong>0469 370 978</strong> or Sidra on <strong>0451 331 140</strong>.
            </p>
            <p style="color:#3a4a6a;margin-top:24px;">— Mick &amp; Sidra<br/>L Plus P Driving School</p>
          </div>
        `,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
