import express from 'express';
import ProductController from '../../controllers/Product.controller.js';
import { verifyToken } from '../../middlewares/user.middleware.js';

const router = express.Router();

router.get('/', verifyToken, ProductController.getAllProducts);
router.get('/:id', verifyToken, ProductController.getProduct);
router.get('/user/:userId', verifyToken, ProductController.getProductsByUser);
router.post('/', verifyToken, ProductController.createProduct);
router.put('/:id', verifyToken, ProductController.updateProduct);
router.delete('/:id', verifyToken, ProductController.deleteProduct);

export default router;