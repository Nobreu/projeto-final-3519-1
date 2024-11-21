import { getCart, addProductToCart } from '../models/cartModel.js';

export async function viewCart(req, res) {
    const cartItems = await getCart();
    res.render('cart/index', { cartItems });
}

export async function addToCart(req, res) {
    const { productId, quantity } = req.body;
    await addProductToCart(productId, quantity);
    res.redirect('/cart');
}
