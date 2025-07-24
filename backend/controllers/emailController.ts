import { Request, Response } from 'express';
import { sendEmail } from '../services/emailService';

export const sendEmailToAddress = async (req: Request, res: Response) => {
  const { to, subject, message } = req.body;

  try {
    await sendEmail(to, subject, `<p>${message}</p>`);
    res.status(200).json({ message: 'Email sent successfully' });
  } catch (err) {
    console.error('Email send error:', err);
    res.status(500).json({ error: 'Failed to send email' });
  }
};
