import ApolloClient from 'apollo-boost';

/** Apollo client configurations */
const client = new ApolloClient({
  uri: process.env.BACKEND_URL,
  request: async operation => {
    const token = JSON.parse(localStorage.getItem('token'));
    const headers = token
      ? {
          authorization: `Bearer ${token}`,
        }
      : {};
    operation.setContext({
      headers,
    });
  },
});

export default client;
