import { ApolloClient, InMemoryCache } from "@apollo/client/core";

const GITHUB_ISSUE_TOKEN = process.env.NEXT_PUBLIC_GITHUB_ISSUE_TOKEN;

if (!GITHUB_ISSUE_TOKEN) {
  throw new Error("Environment variables not set");
}

const Client = new ApolloClient({
  uri: "https://api.github.com/graphql",
  headers: { authorization: `Bearer ${GITHUB_ISSUE_TOKEN}` },
  cache: new InMemoryCache(),
});

export default Client;
