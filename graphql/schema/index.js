const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    customers: [Customer],
    products: [Product]
  }

  type Mutation {
    registerCutomer(user: CustomerInput): Customer,
    login(user: LoginInput): String,
    addProduct(product:ProductInput): Product
  }

  input CustomerInput {
    name: String,
    email: String,
    password: String,
    address: String
  }

  input LoginInput {
      email: String
      password: String
  }

  input ProductInput {
    name: String,
    category: String,
    price: Float!
  }

  type Customer {
    id: ID!,
    name: String,
    email: String,
    address: String
  }

  type Product {
    id: ID!,
    name: String,
    category: String,
    price: Float!
  }


  
`;

module.exports = typeDefs;


