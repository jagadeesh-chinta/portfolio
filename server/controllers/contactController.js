import { body, validationResult } from 'express-validator';

// Validation rules
export const contactValidation = [
  body('name')
    .trim()
    .notEmpty().withMessage('Name is required')
    .isLength({ min: 2, max: 100 }).withMessage('Name must be 2-100 characters')
    .escape(),
  body('email')
    .trim()
    .notEmpty().withMessage('Email is required')
    .isEmail().withMessage('Please provide a valid email address')
    .normalizeEmail(),
  body('message')
    .trim()
    .notEmpty().withMessage('Message is required')
    .isLength({ min: 10, max: 2000 }).withMessage('Message must be 10-2000 characters')
    .escape(),
];

export const handleContactSubmission = [
  ...contactValidation,
  async (req, res) => {
    try {
      const errors = validationResult(req);
      if (!errors.isEmpty()) {
        return res.status(400).json({
          success: false,
          message: 'Validation failed',
          errors: errors.array().map(err => ({
            field: err.path,
            message: err.msg,
          })),
        });
      }

      const { name, email, message } = req.body;

      // Log the contact submission
      console.log('--- New Contact Submission ---');
      console.log(`Name: ${name}`);
      console.log(`Email: ${email}`);
      console.log(`Message: ${message}`);
      console.log(`Time: ${new Date().toISOString()}`);
      console.log('-----------------------------');

      // TODO: Integrate email provider (e.g., Nodemailer, SendGrid, Resend)
      // When configured, send email to jagadeeshchinta6@gmail.com
      //
      // Example with Nodemailer:
      // const transporter = nodemailer.createTransport({...});
      // await transporter.sendMail({
      //   from: process.env.EMAIL_FROM,
      //   to: 'jagadeeshchinta6@gmail.com',
      //   subject: `Portfolio Contact: ${name}`,
      //   text: `From: ${name} (${email})\n\n${message}`,
      // });

      res.status(200).json({
        success: true,
        message: 'Thank you for reaching out! Your message has been received. I will get back to you soon.',
      });
    } catch (error) {
      console.error('Contact form error:', error);
      res.status(500).json({
        success: false,
        message: 'Something went wrong. Please try again later.',
      });
    }
  },
];
