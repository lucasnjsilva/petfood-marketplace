const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const petshop = new Schema({
  nome: String,
  logo: String,
  categoria: String,
  destaque: Number,
  location: Object,
  recipient_id: String, // id do model
});

module.exports = mongoose.model('Petshop', petshop);