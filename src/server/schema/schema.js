export default `
  type User {
    id: Int!
    firstName: String
    lastName: String
  }

  type Product {
    id: Int!
    name: String
    price: Int
    description: String
  }

  type Query {
    user: User
    products: [Product]
    product(id: Int!): Product
  }

  schema {
    query: Query
  }
`;
