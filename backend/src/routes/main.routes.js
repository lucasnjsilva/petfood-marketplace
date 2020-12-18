const express = require('express');
const router = express.Router();

const Petshop = require('../models/petshop');
const Product = require('../models/product');

const createSplitTransaction = require('../services/pagarme').createSplitTransaction;

router.get('/petshops', async (request, response) => {
  try {
    const petshops = await Petshop.find();
    response.json({ error: false, petshops });
  } catch (error) {
    response.json({ error: true, message: error.message });
  }
});

router.get('/petshop/:id', async (request, response) => {
  try {
    const petshop = await Petshop.findById(request.params.id);
    let products = await Product.find({
      petshop_id: petshop._id,
    });

    response.json({ error: false, petshop: { ...petshop._doc, products } });
  } catch (error) {
    response.json({ error: true, message: error.message });
  }
});

router.post('/purchase', async (request, response) => {
  try {
    const transaction = await createSplitTransaction(request.body);

    response.json(transaction);
  } catch (error) {
    response.json({ error: true, message: error.message });
  }
});

module.exports = router;