import express from 'express';
import {
  createGlobalData,
  getGlobalData,
  getGlobalDataById,
  updateGlobalData,
  deleteGlobalData
} from '../controllers/globalDataController.js';

const router = express.Router(); // Initialiser le router avant de l'utiliser

// Définir les routes
router.post('/', createGlobalData);
router.get('/', getGlobalData);
router.get('/:id', getGlobalDataById);
router.put('/:id', updateGlobalData);
router.delete('/:id', deleteGlobalData);

export default router;
