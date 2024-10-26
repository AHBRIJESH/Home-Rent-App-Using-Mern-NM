const mongoose = require('mongoose');

const foodItemSchema = new mongoose.Schema({
    name: String,
    quantity: Number,
});

module.exports = mongoose.model('FoodItem', foodItemSchema);