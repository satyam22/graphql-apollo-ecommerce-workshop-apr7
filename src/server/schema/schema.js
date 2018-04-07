export default `
  type User {
    id: Int!
    firstName: String
    lastName: String
    fullName: String
  }

  type Product {
    id: Int!
    name: String
    price: Int
    description: String
  }

  type CartItem {
    id: Int!
    product: Product
  }

  type Query {
    user: User
    products(priceLimit: Int): [Product]
    product(id: Int!): Product
    cartItems: [CartItem]
  }

  type Mutation {
    addProduct(name: String, price: Int): Product
  }


  schema {
    query: Query
    mutation : Mutation
  }
`;
