import express from 'express';
import UserController from '../../controllers/User.controller.js';
import { verifyToken } from '../../middlewares/user.middleware.js';

const router = express.Router();

router.get('/:id', verifyToken, UserController.getUser);
router.post('/', UserController.createUser);
router.put('/:id', verifyToken, UserController.updateUser);
router.delete('/:id', verifyToken, UserController.deleteUser);
router.post('/login', UserController.login);
router.get('/favorites/:id', verifyToken, UserController.getFavorites);
router.put('/favorites/:id', verifyToken, UserController.updateFavorites);

export default router;