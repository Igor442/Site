const Order = require('../models/Order');

exports.createOrder = async (req, res) => {
  const { userId, products, amount } = req.body;
  const newOrder = new Order({ userId, products, amount });
  await newOrder.save();
  res.status(201).json(newOrder);
};
