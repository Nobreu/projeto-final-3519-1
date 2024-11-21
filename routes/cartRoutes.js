import express from 'express';
import { viewCart, addToCart } from '../controllers/cartController.js';

const router = express.Router();

router.get('/', viewCart);
router.post('/add', addToCart);

export default router;
