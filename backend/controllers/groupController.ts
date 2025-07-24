import { Request, Response } from 'express';
import Group from '../models/Group';

export const createGroup = async (req: Request, res: Response) => {
  const { name } = req.body;
  const userId = req.body.userId || req.userId;

  try {
    const group = new Group({ name, userId, contacts: [] });
    await group.save();
    res.status(201).json(group);
  } catch (err) {
    res.status(500).json({ error: 'Failed to create group' });
  }
};

export const addContactToGroup = async (req: Request, res: Response) => {
  const groupId = req.params.id;
  const { contactId } = req.body;

  try {
    const group = await Group.findById(groupId);
    if (!group) return res.status(404).json({ error: 'Group not found' });

    if (!group.contacts.includes(contactId)) {
      group.contacts.push(contactId);
      await group.save();
    }

    res.status(200).json(group);
  } catch (err) {
    res.status(500).json({ error: 'Failed to add contact to group' });
  }
};
