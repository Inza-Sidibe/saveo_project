import { ApolloClient, InMemoryCache } from '@apollo/client';

const client = new ApolloClient({
  uri: 'https://eu-west-2.cdn.hygraph.com/content/cm6ifhj5x005t07w3oxba8l1r/master',
  cache: new InMemoryCache(),
  headers: {
    // Ajoutez éventuellement vos headers d'authentification
    'Content-Type': 'application/json'
  }
});

export default client;