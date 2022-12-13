import { ApolloClient, InMemoryCache } from "@apollo/client";

const GRAPHQL_URL = 'https://countries.trevorblades.com/';

export const client = new ApolloClient({
    uri: GRAPHQL_URL,
    cache: new InMemoryCache(),
}); 