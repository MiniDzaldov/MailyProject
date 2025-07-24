// import { Request, Response, NextFunction } from 'express';
// import jwt from 'jsonwebtoken';
// import mongoose from 'mongoose';

// export const authenticate = (req: Request, res: Response, next: NextFunction) => {
//   const authHeader = req.headers.authorization;

//   if (!authHeader || !authHeader.startsWith('Bearer ')) {
//     return res.status(401).json({ message: 'Unauthorized: No token provided' });
//   }

//   const token = authHeader.split(' ')[1];

//   try {
//     const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
//     req.userId = new mongoose.Types.ObjectId(decoded.userId);
//     next();
//   } catch (err) {
//     return res.status(403).json({ message: 'Forbidden: Invalid token' });
//   }
// };


import { Request, Response, NextFunction } from 'express';
import jwt from 'jsonwebtoken';
import mongoose from 'mongoose';

export const authenticate = (req: Request, res: Response, next: NextFunction) => {
  const authHeader = req.headers.authorization;

  if (!authHeader || !authHeader.startsWith('Bearer ')) {
    return res.status(401).json({ message: 'Unauthorized: No token provided' });
  }

  const token = authHeader.split(' ')[1];

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET!) as { userId: string };
    console.log('✅ Decoded token:', decoded);
    
    req.userId = new mongoose.Types.ObjectId(decoded.userId);
    
    next();
  } catch (err) {
    return res.status(403).json({ message: 'Forbidden: Invalid token' });
  }
};
