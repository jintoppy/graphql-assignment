const { gql } = require("apollo-server");

const typeDefs = gql`
  type Query {
    customers: [Customer]
  }

  type Customer {
    id: ID!,
    name: String,
    email: String,
    address: String
  }
  
  
`;

module.exports = typeDefs;


