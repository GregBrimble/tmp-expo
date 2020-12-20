import { makeGraphQLHandler } from "@glenstack/cf-workers-graphql";
import { makeExecutableSchema } from "@graphql-tools/schema";
import gql from "graphql-tag";

const typeDefs = gql`
  type Query {
    hello: String
  }
`;

const resolvers = {
  Query: {
    hello: (obj, args, context) =>
      context.name ? `Hello, ${context.name}!` : "Hello, world!",
  },
};

const schema = makeExecutableSchema({ typeDefs, resolvers });
export const handler = makeGraphQLHandler(schema, {
  makeContextValue: (request) =>
    Promise.resolve({ name: request.headers.get("X-Name") }),
});
