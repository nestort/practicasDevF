
import { gql } from 'apollo-server';

const typeDefs = gql`
type Book {
  title: String
  author: String
}

type User {
  name: String
  lastName: String
  email: String
  gender: String
}

input UserInput {
  name: String
  lastName: String
  email: String
  gender: String
}

type Post {
  _id: ID
  title: String
  content: String
  likes: Int
}

input PostInput {
  title: String
  content: String
  likes: Int
}

type Query {
  books: [Book]
}

type Mutation {
  addUser(data: UserInput) : User
  addPost(postInfo: PostInput, userID: String) : Post
}
`;

export default typeDefs;
