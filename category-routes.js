// routes/category-routes.js
const router = require('express').Router();
const { Category } = require('../models');

// Define your routes here
router.get('/', async (req, res) => {
  try {
    const categories = await Category.findAll();
    res.status(200).json(categories);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
