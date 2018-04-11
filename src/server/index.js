import express from "express";
import bodyParser from "body-parser";
import { readFileSync } from "fs";
import { graphqlExpress, graphiqlExpress } from "apollo-server-express";
import { makeExecutableSchema } from "graphql-tools";
var app = express();

const salad = { avocado: 1, mango: 1, tomato: 0.2, arugula: true, onion: true };
const burger = { buns: 2, shrimp: 1, egg: 1, lettuce: 2.5, mayo: true };
// define arrays of 100 each
const salads = new Array(100).fill(salad);
const burgers = new Array(100).fill(burger);
const get = (what, count) => what.splice(0, parseInt(count) || 1);
const schema = makeExecutableSchema({
  typeDefs: readFileSync(__dirname + "/schema/schema.graphql", "utf8"),
  resolvers: {
    Query: {
      salads: (_, { count }) => get(salads, count),
      burgers: (_, { count }) => get(burgers, count)
    }
  }
});

app.use("/graphql", bodyParser.json(), graphqlExpress({ schema }));
app.use("/graphiql", graphiqlExpress({ endpointURL: "/graphql" }));

app.listen(4000, () => console.log("server is listening at port:4000"));
