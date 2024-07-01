import express from 'express';
import { check } from 'express-validator';
import { registerUser, deleteUser, getUser } from '../controllers/userController.js';
import auth from '../middlewares/auth.js';

const router = express.Router();

router.post(
    '/register',
    [
      check('username', 'Username is required').not().isEmpty(),
      check('email', 'Please include a valid email').isEmail(),
      check('password', 'Password must be 6 or more characters').isLength({ min: 6 })
    ],
    registerUser
  );
router.delete('/delete/:email', deleteUser);
router.get('/me', auth, getUser);

export default router;
