import express from 'express';
import { storeDynamicString, getDynamicString } from '../controllers/dynamicStringController.js';

const router = express.Router();

router.post('/store', storeDynamicString);
router.get('/get/:key', getDynamicString);

export default router;
