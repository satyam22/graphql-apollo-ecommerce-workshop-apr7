// import { makeExecutableSchema } from "graphql-tools";
// import Resolvers from "../resolvers";
import Schema from "./schema";

const { makeExecutableSchema } = require("graphql-tools");
const Resolvers = require("../resolvers");
//const Schema=require('./schema');
export const executableSchema = makeExecutableSchema({
  typeDefs: Schema,
  resolvers: Resolvers
});

export default executableSchema;
