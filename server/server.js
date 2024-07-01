import express from 'express';
import connectDB from './config/db.js';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// Connect to database
connectDB();

// Middleware
app.use(express.json({ extended: false }));
app.use(cors());
app.use(bodyParser.json());

// Define Routes
import imageRoutes from './routes/imageRoutes.js';
import stringRoutes from './routes/stringRoutes.js';
import userRoutes from './routes/userRoutes.js';
import configRoutes from './routes/configRoutes.js';

app.use('/api/images', imageRoutes);
app.use('/api/strings', stringRoutes);
app.use('/api/users', userRoutes);
app.use('/api/config', configRoutes);

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
