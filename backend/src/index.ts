import express from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import dotenv from 'dotenv';
import userRoutes from '../routes/userRoutes';
import authRoutes from '../routes/authRoutes';
import contactRoutes from '../routes/contactRoutes';
import groupRoutes from '../routes/groupRoutes';



dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());

app.get('/api/ping', (_, res) => res.send('pong!'));

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);
app.use('/api/contacts', contactRoutes);
app.use('/api/groups', groupRoutes);
app.use('/api/contacts', contactRoutes);



mongoose.connect(process.env.MONGO_URI!)
  .then(() => {
    console.log('✅ Connected to MongoDB');
    app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));
  })
  .catch(err => console.error('❌ MongoDB connection error:', err));
