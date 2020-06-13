
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    customer: Number,
    totalOrderValue: Number,
    shippingAddress: String,
    paymentMethod: String,
    products: [{
        product: Number,
        quantity: Number,
        price: Number
    }]
});

const Product = mongoose.model('product', ProductSchema);

module.exports = Product;
