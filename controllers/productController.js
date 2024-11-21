import { getAllProducts, getProductById } from '../models/productModel.js';

export async function listProducts(req, res) {
    const { search } = req.query;
    const products = await getAllProducts(search);
    res.render('products/list', { products, search });
}

export async function viewProduct(req, res) {
    const product = await getProductById(req.params.id);
    res.render('products/details', { product });
}
