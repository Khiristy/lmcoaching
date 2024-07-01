import express from 'express';

import {
  createGlobalData,
  getGlobalData,
  getGlobalDataById,
  updateGlobalData,
  deleteGlobalData
} from '../controllers/globalDataController.js';

router.post('/', createGlobalData);
router.get('/', getGlobalData);
router.get('/:id', getGlobalDataById);
router.put('/:id', updateGlobalData);
router.delete('/:id', deleteGlobalData);

const router = express.Router();

// Ajoutez vos routes ici
router.get('/', (req, res) => {
  res.send('Config route');
});

export default router;
