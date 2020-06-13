const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    product: [Prouct]
    user: User
    customer: Customer
  }
`;
