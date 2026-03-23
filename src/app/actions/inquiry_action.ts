'use server';

import { neon } from '@neondatabase/serverless';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_TOKEN);

export async function submitInquiry(formData: FormData) {
  const data = {
    fullName: (formData.get('fullName') as string) || '',
    companyName: (formData.get('companyName') as string) || '',
    email: (formData.get('email') as string) || '',
    service: (formData.get('service') as string) || '',
    budget: (formData.get('budget') as string) || '',
    brief: (formData.get('brief') as string) || '',
  };

  try {
    // 1. Save to Neon PostgreSQL
    const sql = neon(process.env.DATABASE_URL!);
    
    // Create the table if it doesn't exist
    await sql`
      CREATE TABLE IF NOT EXISTS inquiries (
        id SERIAL PRIMARY KEY,
        full_name TEXT NOT NULL,
        company_name TEXT,
        email_address TEXT NOT NULL,
        interested_service TEXT NOT NULL,
        budget_range TEXT,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;

    await sql`
      INSERT INTO inquiries (full_name, company_name, email_address, interested_service, budget_range, message)
      VALUES (${data.fullName}, ${data.companyName}, ${data.email}, ${data.service}, ${data.budget}, ${data.brief})
    `;

    // 2. Send Email via Resend
    await resend.emails.send({
      from: "D'Lian System <system@dliangroup.com>",
      to: 'contact@dliangroup.com',
      subject: `New Lead: ${data.service} - ${data.fullName}`,
      replyTo: data.email,
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px; margin: 0 auto; border: 1px solid #eee; padding: 20px; border-radius: 10px;">
          <h2 style="color: #00D1FF; border-bottom: 2px solid #00D1FF; padding-bottom: 10px;">New Project Inquiry</h2>
          <p>You have received a new inquiry from the website contact form.</p>
          
          <div style="background-color: #f9f9f9; padding: 15px; border-radius: 5px; margin: 20px 0;">
            <p><strong>Full Name:</strong> ${data.fullName}</p>
            <p><strong>Email:</strong> ${data.email}</p>
            <p><strong>Company:</strong> ${data.companyName || 'N/A'}</p>
            <p><strong>Interested Service:</strong> ${data.service}</p>
            <p><strong>Project Budget:</strong> ${data.budget || 'Not specified'}</p>
          </div>
          
          <div style="margin-top: 20px;">
            <h3 style="font-size: 16px;">Project Brief:</h3>
            <p style="white-space: pre-wrap; line-height: 1.5; color: #555;">${data.brief}</p>
          </div>
          
          <p style="font-size: 12px; color: #999; margin-top: 40px; border-top: 1px solid #eee; pt: 20px;">
            This email was sent from the D'Lian Connection automated system.
          </p>
        </div>
      `,
    });

    return { success: true };
  } catch (error) {
    console.error("Inquiry Error:", error);
    return { success: false };
  }
}