
const Order = require('../models/order.model');

const createNewOrder = async (req, res ) => {
    console.log('order controller');
    console.log(req.body);
    if (!req.body.customer) {
        res.status(401).send({message: 'Insufficient parameters'});
    }
    const product = new Order({
        customer: req.body.customer,
        totalOrderValue: req.body.totalOrderValue,
        shippingAddress: req.body.shippingAddress,
        paymentMethod: req.body.paymentMethod,
        products: req.body.products
    });
    try {
        const savedProduct = await product.save();
        res.status(200).send(savedProduct);
    } catch(err) {
        console.log('error in controller --', err);
    }    

};

const getOrders = async (req, res) => {
    try{
        const orders = await Order.find({});
        res.status(200).send(orders);
    }
    catch(e){
        console.log(e);
        res.status(500).send({message: 'some error happened'});
    }
};

module.exports = {createNewOrder, getOrders};