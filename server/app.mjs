// server/app.js
import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import connectDB from './config/db.mjs';
import userRoutes from './routes/userRoutes.mjs';
import authRoutes from './routes/authRoutes.mjs';

dotenv.config();

const app = express();
connectDB();

app.use(cors()); // Activer CORS pour toutes les requêtes

app.use(express.json());

app.use('/api/users', userRoutes);
app.use('/api/auth', authRoutes);

app.get('/', (req, res) => {
  res.send('API is running...');
});

export default app;