import express from 'express';
import { createGroup, addContactToGroup } from '../controllers/groupController';
import { authenticate } from '../middleware/authMiddleware';

const router = express.Router();

router.post('/', createGroup);
router.put('/:id/add-contact', addContactToGroup);
router.post('/', authenticate, createGroup);
router.put('/:id/add-contact', authenticate, addContactToGroup);


export default router;
