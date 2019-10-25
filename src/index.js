const { ApolloServer, gql } = require('apollo-server');


const books = [
  {
    title: 'Harry Potter and the Chamber of Secrets',
    author: 'J.K. Rowling',
  },
  {
    title: 'Jurassic Park',
    author: 'Michael Crichton',
  },
];

const personData = [{
  age: 19,
  name: "Juan"
}];



const typeDefs = gql`
  type Book {
    title: String
    author: String
  }

  type Person {
    name: String
    age: Int
  }

  type Query {
    books: [Book]
    person: [Person]
  }
`;

const resolvers = {
  Query: {
    books: () => books,
    person: () => personData,
  },
};

const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});