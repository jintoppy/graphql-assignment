const axios = require('axios');
const { fetchUserById } = require('./users');
const { fetchProductById } = require('./products');

const instance = axios.create({
    baseURL: 'http://localhost:3001/'
});


exports.getAllOrders = async () => {
    try {
        const {data} = await instance.get('/orders');
        data.forEach(async (order) => {
            const customerInfo = await fetchUserById(order.customer);
            order.products.forEach(async (pId, idx) => {
                const productInfo = await fetchProductById(pId);
                order.products[idx] = productInfo;
            });
            order.customer = customerInfo
        });
        console.log(data);
        return data;
    } catch (e) {
    console.error('---error fetching products--',e);
          throw e;
    }
};