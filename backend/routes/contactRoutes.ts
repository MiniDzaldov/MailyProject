import express from 'express';
import { createContact } from '../controllers/contactController';
import { authenticate } from '../middleware/authMiddleware';


const router = express.Router();

// router.post('/', createContact);
router.post('/', authenticate, createContact);


export default router;


