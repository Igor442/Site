const express = require('express');
const { getAllUsers, getAllOrders, updateOrderStatus, createProduct, updateProduct, deleteProduct } = require('../controllers/adminController');
const authMiddleware = require('../middlewares/authMiddleware');

const router = express.Router();

// Middleware para verificar se o usuário é administrador
const adminMiddleware = (req, res, next) => {
  if (req.user && req.user.isAdmin) {
    next();
  } else {
    res.status(403).json({ message: 'Acesso negado: somente administradores' });
  }
};

// Rotas para administração de usuários
router.get('/users', authMiddleware, adminMiddleware, getAllUsers);

// Rotas para administração de pedidos
router.get('/orders', authMiddleware, adminMiddleware, getAllOrders);
router.put('/orders/:id', authMiddleware, adminMiddleware, updateOrderStatus);

// Rotas para administração de produtos
router.post('/products', authMiddleware, adminMiddleware, createProduct);
router.put('/products/:id', authMiddleware, adminMiddleware, updateProduct);
router.delete('/products/:id', authMiddleware, adminMiddleware, deleteProduct);

module.exports = router;
