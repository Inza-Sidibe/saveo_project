import { ApolloClient, InMemoryCache, createHttpLink } from '@apollo/client';
import { setContext } from "@apollo/client/link/context";

const client = new ApolloClient({
  uri: 'https://eu-west-2.cdn.hygraph.com/content/cm3oklqff01aq08w3w7jik7lh/master',
  cache: new InMemoryCache(),
  headers: {
    // Ajoutez éventuellement vos headers d'authentification
    'Content-Type': 'application/json'
  }
});

export default client;