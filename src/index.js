import { ApolloServer } from 'apollo-server';
import mongoose  from 'mongoose';

import typeDefs  from './graphql/schemas';
import resolvers  from './graphql/resolvers';


const url = process.env.DATA_BASE;
mongoose.connect(
  url,
  {
    useCreateIndex: true,
    useNewUrlParser: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  }
);
const mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, "¡Error de conexion!"));
mongoDB.on('open', () => console.log('BD conectada'));



const server = new ApolloServer({ typeDefs, resolvers });

server.listen().then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
                        