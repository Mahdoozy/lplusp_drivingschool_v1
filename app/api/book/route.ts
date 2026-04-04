import { Resend } from 'resend';
import { NextResponse } from 'next/server';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  const body = await req.json();
  const { name, phone, email, suburb, service, package: pkg, confidence, preferredDate, message } = body;

  try {
    // Email to instructors
    await resend.emails.send({
      from: 'bookings@lppdrivingschool.com.au',
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
        from: 'bookings@lppdrivingschool.com.au',
        to: email,
        subject: 'Booking received — L Plus P Driving School',
        html: `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body style="margin:0;padding:0;background-color:#f4f4f4;font-family:Arial,sans-serif;">
  <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f4f4f4;padding:40px 0;">
    <tr>
      <td align="center">
        <table width="600" cellpadding="0" cellspacing="0" style="background-color:#ffffff;border-radius:12px;overflow:hidden;max-width:600px;width:100%;">

          <!-- Header -->
          <tr>
            <td style="background-color:#0d1b2e;padding:32px 40px;text-align:center;">
              <div style="display:inline-block;">
                <span style="font-size:28px;font-weight:900;color:#ffffff;letter-spacing:-1px;">L</span>
                <span style="font-size:18px;font-weight:700;color:#f5c842;margin:0 2px;">+</span>
                <span style="font-size:28px;font-weight:900;color:#ffffff;letter-spacing:-1px;">P</span>
                <span style="display:block;font-size:11px;color:#8fa8c4;letter-spacing:2px;text-transform:uppercase;margin-top:4px;">Driving School</span>
              </div>
            </td>
          </tr>

          <!-- Gold bar -->
          <tr>
            <td style="background-color:#f5c842;height:4px;"></td>
          </tr>

          <!-- Body -->
          <tr>
            <td style="padding:40px 40px 20px 40px;">
              <p style="font-size:22px;font-weight:700;color:#0d1b2e;margin:0 0 8px 0;">You're booked in, ${name}!</p>
              <p style="font-size:15px;color:#555555;line-height:1.7;margin:0 0 28px 0;">
                Thanks for choosing L Plus P. We've received your booking request and one of our instructors will WhatsApp you within the hour to lock in your lesson time.
              </p>

              <!-- Booking summary box -->
              <table width="100%" cellpadding="0" cellspacing="0" style="background-color:#f8f9fb;border-radius:8px;border-left:4px solid #f5c842;margin-bottom:28px;">
                <tr>
                  <td style="padding:20px 24px;">
                    <p style="font-size:11px;text-transform:uppercase;letter-spacing:1.5px;color:#8fa8c4;margin:0 0 12px 0;">Your Booking Summary</p>
                    <table width="100%" cellpadding="0" cellspacing="0">
                      <tr>
                        <td style="font-size:13px;color:#888888;padding:4px 0;width:120px;">Service</td>
                        <td style="font-size:13px;color:#0d1b2e;font-weight:600;padding:4px 0;">${service}</td>
                      </tr>
                      <tr>
                        <td style="font-size:13px;color:#888888;padding:4px 0;">Suburb</td>
                        <td style="font-size:13px;color:#0d1b2e;font-weight:600;padding:4px 0;">${suburb}</td>
                      </tr>
                      <tr>
                        <td style="font-size:13px;color:#888888;padding:4px 0;">Preferred date</td>
                        <td style="font-size:13px;color:#0d1b2e;font-weight:600;padding:4px 0;">${preferredDate || 'Flexible'}</td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>

              <p style="font-size:15px;color:#555555;line-height:1.7;margin:0 0 28px 0;">
                In the meantime, if you have any questions or need to reach us urgently — just call or WhatsApp:
              </p>

              <!-- Contact buttons -->
              <table cellpadding="0" cellspacing="0" style="margin-bottom:32px;">
                <tr>
                  <td style="padding-right:12px;">
                    <a href="tel:0469370978" style="display:inline-block;background-color:#0d1b2e;color:#ffffff;font-size:14px;font-weight:600;padding:12px 24px;border-radius:8px;text-decoration:none;">
                      📞 Mick — 0469 370 978
                    </a>
                  </td>
                  <td>
                    <a href="tel:0451331140" style="display:inline-block;background-color:#0d1b2e;color:#ffffff;font-size:14px;font-weight:600;padding:12px 24px;border-radius:8px;text-decoration:none;">
                      📞 Sidra — 0451 331 140
                    </a>
                  </td>
                </tr>
              </table>

            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td style="background-color:#0d1b2e;padding:24px 40px;text-align:center;">
              <p style="font-size:13px;color:#8fa8c4;margin:0 0 4px 0;">L Plus P Driving School · North Ryde, Sydney NSW · Est. 1997</p>
              <p style="font-size:13px;color:#8fa8c4;margin:0;">
                <a href="https://lppdrivingschool.com.au" style="color:#f5c842;text-decoration:none;">lppdrivingschool.com.au</a>
              </p>
            </td>
          </tr>

        </table>
      </td>
    </tr>
  </table>
</body>
</html>
`,
      });
    }

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: 'Failed to send' }, { status: 500 });
  }
}
