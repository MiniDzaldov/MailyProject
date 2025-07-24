import express from 'express';
import { sendEmailToAddress } from '../controllers/emailController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/send', authenticate, sendEmailToAddress);

export default router;
