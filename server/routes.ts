import type { Express } from "express";
import { createServer, type Server } from "http";
import { storage } from "./storage";
import { z } from "zod";
import nodemailer from "nodemailer";

// Contact form validation schema
const contactSchema = z.object({
  name: z.string().min(2, "Name must be at least 2 characters"),
  email: z.string().email("Please enter a valid email address"),
  subject: z.string().min(5, "Subject must be at least 5 characters"),
  message: z.string().min(10, "Message must be at least 10 characters")
});

export async function registerRoutes(app: Express): Promise<Server> {
  // Contact form submission endpoint
  app.post("/api/contact", async (req, res) => {
    try {
      // Validate request body
      const validatedData = contactSchema.parse(req.body);
      
      // Create a transporter - using Ethereal for testing, but it could be replaced with any SMTP service
      let transporter;
      
      // Check if SendGrid API key is available
      if (process.env.SENDGRID_API_KEY) {
        // Use SendGrid if API key is available
        transporter = nodemailer.createTransport({
          service: 'SendGrid',
          auth: {
            user: 'apikey',
            pass: process.env.SENDGRID_API_KEY
          }
        });
      } else {
        // Fallback to Ethereal for testing if no SendGrid key
        const testAccount = await nodemailer.createTestAccount();
        transporter = nodemailer.createTransport({
          host: "smtp.ethereal.email",
          port: 587,
          secure: false,
          auth: {
            user: testAccount.user,
            pass: testAccount.pass,
          },
        });
      }
      
      // Send email
      const info = await transporter.sendMail({
        from: `"${validatedData.name}" <${validatedData.email}>`,
        to: "shivam.dwivedi@example.com", // Replace with your actual email
        subject: `Portfolio Contact: ${validatedData.subject}`,
        text: validatedData.message,
        html: `
          <div>
            <h2>New message from portfolio contact form</h2>
            <p><strong>From:</strong> ${validatedData.name} (${validatedData.email})</p>
            <p><strong>Subject:</strong> ${validatedData.subject}</p>
            <p><strong>Message:</strong></p>
            <p>${validatedData.message.replace(/\n/g, "<br>")}</p>
          </div>
        `,
      });
      
      console.log("Message sent: %s", info.messageId);
      
      // Only log preview URL for Ethereal emails
      if (!process.env.SENDGRID_API_KEY) {
        console.log("Preview URL: %s", nodemailer.getTestMessageUrl(info));
      }
      
      // Return success response
      res.status(200).json({ 
        success: true, 
        message: "Message sent successfully",
        // For development with Ethereal, include the preview URL
        previewUrl: !process.env.SENDGRID_API_KEY ? nodemailer.getTestMessageUrl(info) : undefined
      });
    } catch (error) {
      if (error instanceof z.ZodError) {
        return res.status(400).json({ 
          success: false, 
          message: "Validation error", 
          errors: error.errors 
        });
      }
      console.error("Error sending email:", error);
      res.status(500).json({ 
        success: false, 
        message: "Failed to send message" 
      });
    }
  });

  const httpServer = createServer(app);
  return httpServer;
}
