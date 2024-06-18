// server/routes/userRoutes.js
import express from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.mjs';
import User from '../models/User.mjs';
import protect from '../middlewares/authMiddleware.mjs';

const router = express.Router();

router.get('/', protect, async (req, res) => {
  try {
    const users = await User.find();
    res.json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.route('/')
  .get(getUsers)
  .post(createUser);

router.route('/:id')
  .get(getUserById)
  .put(updateUser)
  .delete(deleteUser);

export default router;

