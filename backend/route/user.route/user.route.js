import express from 'express';
import {
    createUser,
    loginUser,
    getUsers,
    getUserById,
    updateUser,
    deleteUser
} from '../../controller/user.controller/user.controller.js';
import { protect } from '../../middleware/authMiddleware.js';

const router = express.Router();

router.post('/register', createUser);
router.post('/login', loginUser);


// Protected routes (require JWT)
router.get('/', protect, getUsers);
router.get('/:id', protect, getUserById);
router.put('/:id', protect, updateUser);
router.delete('/:id', protect, deleteUser);

export default router;
