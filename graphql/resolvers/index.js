const { gql } = require("apollo-server");
const { fetchUsers, registerUser, login } = require('./users');
const { addProduct, fetchAllProducts, fetchProductById } = require('./products');

// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        customers: (parent, args, context) => {
            const {me} = context;
            console.log('---me----',me);            
          const users =   fetchUsers();
          return users;
        },
        products: async (parent, args, context) => {
            const {me} = context;
            console.log('---me----',me);            
            const products =   await fetchAllProducts();
            return products;
        },
        product: async (parent, args, context) => {
            const {me} = context;
            console.log('---me----',me);            
          const product =  await fetchProductById(args.id);
          return product;
        },
    },
    Mutation: {
        registerCutomer: async (parent, args) => {
            const user = await registerUser(args.user);
            return user;
        },
        login: async (parent, args) => {
            const token = await login(args.user);
            return token;
        },
        addProduct: async (parent, args) => {
            const product = await addProduct(args.product);
            return product;
        }
    }
};
module.exports = resolvers;


