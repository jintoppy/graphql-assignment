const { gql } = require("apollo-server");
const { fetchUsers } = require('./users');


// Provide resolver functions for your schema fields
const resolvers = {
    Query: {
        customers: (parent, args, context) => {
            const {me} = context;
            console.log('---me----',me);
            
          const users =   fetchUsers();
          return users;
        }
    }
};
module.exports = resolvers;


