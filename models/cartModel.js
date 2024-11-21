import pool from '../config/db.js';

export async function getCart() {
    const [rows] = await pool.query(`
    SELECT c.id, p.name, p.price, c.quantity 
    FROM cart c
    JOIN products p ON c.product_id = p.id
  `);
    return rows;
}

export async function addProductToCart(productId, quantity) {
    const [result] = await pool.query(
        'INSERT INTO cart (product_id, quantity) VALUES (?, ?)',
        [productId, quantity]
    );
    return result;
}
