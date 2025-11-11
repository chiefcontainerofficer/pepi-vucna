import nodemailer from 'nodemailer';

// Create Mailtrap transporter using SMTP
const createMailtrapTransporter = () => {
  const apiToken = process.env.MAILTRAP_API_TOKEN;
  
  if (!apiToken) {
    throw new Error('MAILTRAP_API_TOKEN must be set in environment variables');
  }
  
  return nodemailer.createTransport({
    host: 'live.smtp.mailtrap.io',
    port: 587,
    auth: {
      user: 'api',
      pass: apiToken,
    },
  });
};

export default async function handler(req, res) {
  // Only allow POST method
  if (req.method !== 'POST') {
    return res.status(405).json({ error: 'Method not allowed' });
  }

  try {
    const { name, email, message } = req.body;

    // Basic validation
    if (!name || !email || !message) {
      return res.status(400).json({ error: 'Missing required fields' });
    }

    // Email content
    const emailContent = {
      from: process.env.EMAIL_FROM || 'noreply@pepitransport.hr',
      to: process.env.EMAIL_TO || 'info@pepitransport.hr',
      subject: `Nova poruka od ${name}`,
      text: `Ime: ${name}\nEmail: ${email}\n\nPoruka:\n${message}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #4B0082;">Nova poruka s web stranice</h2>
          <p><strong>Ime:</strong> ${name}</p>
          <p><strong>Email:</strong> ${email}</p>
          <h3>Poruka:</h3>
          <p>${message.replace(/\n/g, '<br>')}</p>
        </div>
      `,
      replyTo: email,
    };

    // Process the email request
    
    // Create transporter and send email
    const transporter = createMailtrapTransporter();
    await transporter.sendMail(emailContent);

    // Return success response
    return res.status(200).json({ success: true });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ error: 'Failed to send email' });
  }
} 