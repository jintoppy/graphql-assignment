const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const ProductSchema = new Schema({
    name: String,
    email: String,
    age: Number
});

ProductSchema.virtual('id').get(function(){
    return this._id.toHexString();
});

ProductSchema.set('toJSON', {
    virtuals: true
});

const User = mongoose.model('products', ProductSchema);

module.exports = User;