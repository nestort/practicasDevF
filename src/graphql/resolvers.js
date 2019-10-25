
import {
    addUserAction,
    updateUserAction
  } from './actions/usersActions';
  
  import {
    addPostAction
  } from './actions/postsActions';
  
  const books = [
    {
      title: 'Harry Potter and the Chamber of Secrets',
      author: 'J.K. Rowling'
    },
    {
      title: 'Jurassic Park',
      author: 'Michael Crichton'
    }
  ];
  
  const resolvers = {
    Query: {
      books: () => books,
    },
    Mutation: {
      addUser: async (parent, data, context, info) => {
        try {
          return await addUserAction(data.data);
        } catch (error) {
          console.log("TCL: error", error)
        }
      },
      addPost: async (parent, data, context, info) => {
        try {
          const { postInfo, userID } = data;
          const newPost = await addPostAction(postInfo);
          const filter = { _id: userID };
          const update = { $push: { 'posts': newPost._id } };
          await updateUserAction(filter, update);
          return newPost;
        } catch (error) {
  
        }
      },
    }
  };
  
  // parent: funciones necesarias para interno de graphql
  // data: argumentos de la funcion resolver
  // context: variables globales entre resolvers
  // info: informacion del user agent
  
  export default resolvers;
  