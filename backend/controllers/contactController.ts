import { Request, Response } from 'express';
import Contact from '../models/Contact';

// export const createContact = async (req: Request, res: Response) => {
//   const { name, email } = req.body;
// //   const userId = req.body.userId || req.userId;
//   const userId = req.userId;

//   try {
//     const newContact = new Contact({ name, email, userId });
//     await newContact.save();
//     res.status(201).json(newContact);
//   } catch (err) {
//     res.status(500).json({ error: 'Failed to create contact' });
//   }
// };

export const createContact = async (req: Request, res: Response) => {
    const { name, email } = req.body;
    const userId = req.userId;
  
    try {
      if (!userId) {
        return res.status(401).json({ error: 'Missing userId' });
      }
  
      const newContact = new Contact({ name, email, userId });
      await newContact.save();
  
      res.status(201).json(newContact);
    } catch (err) {
      console.error('❌ Error:', err);
      const errorMessage = err instanceof Error ? err.message : 'Failed to create contact';
      res.status(500).json({ error: errorMessage });
    }
  };
  