import express from 'express';
import { storeDynamicImage, getDynamicImage } from '../controllers/base64Controller.js';

const router = express.Router();

router.post('/upload', storeDynamicImage);
router.get('/download/:name', getDynamicImage);
router.delete('/delete/:name', deleteDynamicImage);


export default router;
