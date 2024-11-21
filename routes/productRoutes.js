import express from 'express';
import { listProducts, viewProduct } from '../controllers/productController.js';

const router = express.Router();

router.get('/', listProducts);
router.get('/:id', viewProduct);

export default router;
