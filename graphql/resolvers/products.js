const axios = require('axios');

const instance = axios.create({
    baseURL: 'http://localhost:4000/'
});

exports.addProduct = async (product) => {
    try {
        const {data} = await instance.post('/products',{
            name: product.name,
            category: product.category,
            price: product.price
        })
        return data;
    } catch (e) {
        console.error('---error adding product--',e);
      throw e;
    }
}

exports.fetchAllProducts = async () => {
    try {
        const {data} = await instance.get('/products');
        return data;
    } catch (e) {
    console.error('---error fetching products--',e);
          throw e;
    }
}

exports.fetchProductById = async (product) => {
    try {
        const {data} = await instance.get('/products');
        return data;
    } catch (e) {
    console.error('---error fetching products--',e);
        throw e;
    }
};