
const Product = require('../models/order.model');

const createNewOrder = async (req, res ) => {
    console.log('order controller');
    console.log(req.body);
    if (!req.body.customer) {
        res.status(401).send({message: 'Insufficient parameters'});
    }
    const product = new Product({
        customer: req.body.customer,
        totalOrderValue: req.body.totalOrderValue,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        products: req.body.products

    });
    try {
        const savedProduct = product.save();
        res.status(200).send(savedProduct);
    } catch(err) {
        console.log('error in controller --', err);
    }

    

};

module.exports = {createNewOrder};