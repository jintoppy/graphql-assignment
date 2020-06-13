
const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const OrderSchema = new Schema({
    customer: {
        type: Schema.Types.ObjectId,
        ref: 'users'
    },
    totalOrderValue: Number,
    shippingAddress: String,
    paymentMethod: String,
    products: [{
        type: Schema.Types.ObjectId,
        ref: 'products'
    }]
});

OrderSchema.virtual('id').get(function(){
    return this._id.toHexString();
})

OrderSchema.set('toJSON', {
    virtuals: true
})

const Order = mongoose.model('product', OrderSchema);

module.exports = Order;
