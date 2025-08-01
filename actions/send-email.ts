"use server"

import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function sendContactEmail(formData: FormData) {
  const name = formData.get("name") as string
  const email = formData.get("email") as string
  const category = formData.get("category") as string
  const subject = formData.get("subject") as string
  const message = formData.get("message") as string

  if (!name || !email || !category || !subject || !message) {
    return {
      success: false,
      error: "All fields are required",
    }
  }

  try {
    // Send email to PathFinder team
    await resend.emails.send({
      from: "PathFinder Contact <noreply@pathfinder.com>",
      to: ["alamurisatvika@gmail.com"],
      subject: `PathFinder Contact: ${subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            New Contact Form Submission
          </h2>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Contact Details</h3>
            <p><strong>Name:</strong> ${name}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Category:</strong> ${category}</p>
            <p><strong>Subject:</strong> ${subject}</p>
          </div>
          
          <div style="background-color: #ffffff; padding: 20px; border: 1px solid #e5e7eb; border-radius: 8px;">
            <h3 style="margin-top: 0; color: #374151;">Message</h3>
            <p style="white-space: pre-wrap; line-height: 1.6;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
          </div>
          
          <div style="margin-top: 20px; padding: 15px; background-color: #dbeafe; border-radius: 8px;">
            <p style="margin: 0; font-size: 14px; color: #1e40af;">
              <strong>Reply to:</strong> ${email}
            </p>
          </div>
        </div>
      `,
    })

    // Send confirmation email to user
    await resend.emails.send({
      from: "PathFinder <noreply@pathfinder.com>",
      to: [email],
      subject: "Thank you for contacting PathFinder",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto;">
          <h2 style="color: #2563eb; border-bottom: 2px solid #2563eb; padding-bottom: 10px;">
            Thank You for Contacting PathFinder!
          </h2>
          
          <p>Hi ${name},</p>
          
          <p>Thank you for reaching out to PathFinder. We've received your message and will get back to you within 24 hours.</p>
          
          <div style="background-color: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
            <h3 style="margin-top: 0; color: #374151;">Your Message Summary</h3>
            <p><strong>Subject:</strong> ${subject}</p>
            <p><strong>Category:</strong> ${category}</p>
            <p><strong>Message:</strong></p>
            <p style="white-space: pre-wrap; line-height: 1.6; font-style: italic;">${message.replace(/</g, "&lt;").replace(/>/g, "&gt;")}</p>
          </div>
          
          <p>In the meantime, feel free to explore our resources:</p>
          <ul>
            <li><a href="https://pathfinder.com/pathways" style="color: #2563eb;">Explore Post-Secondary Pathways</a></li>
            <li><a href="https://pathfinder.com/careers" style="color: #2563eb;">Discover Career Options</a></li>
            <li><a href="https://pathfinder.com/resources" style="color: #2563eb;">Browse Educational Resources</a></li>
          </ul>
          
          <p>Best regards,<br>The PathFinder Team</p>
          
          <div style="margin-top: 30px; padding: 15px; background-color: #f3f4f6; border-radius: 8px; font-size: 12px; color: #6b7280;">
            <p style="margin: 0;">This is an automated confirmation email. Please do not reply to this email.</p>
          </div>
        </div>
      `,
    })

    return {
      success: true,
      message: "Email sent successfully!",
    }
  } catch (error) {
    console.error("Error sending email:", error)
    return {
      success: false,
      error: "Failed to send email. Please try again later.",
    }
  }
}
