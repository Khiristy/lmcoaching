import express from 'express';

const router = express.Router();

// Ajoutez vos routes ici
router.get('/', (req, res) => {
  res.send('Config route');
});

export default router;
