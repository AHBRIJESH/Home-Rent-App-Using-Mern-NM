const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const FoodItem = require('./models/FoodItem');

const app = express();
app.use(bodyParser.json());

mongoose.connect('mongodb://localhost:27017/foodDB', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
});

app.get('/items', async (req, res) => {
    const items = await FoodItem.find();
    res.json(items);
});

app.post('/order', async (req, res) => {
    const { name } = req.body;
    const item = await FoodItem.findOne({ name });
    
    if (item && item.quantity > 0) {
        item.quantity -= 1; // Reduce quantity by 1 for each order
        await item.save();
        res.json({ message: 'Order placed successfully!', item });
    } else {
        res.status(400).json({ message: 'Out of stock!' });
    }
});

app.listen(3000, () => {
    console.log('Server running on port 3000');
});