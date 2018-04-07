import {
  getUser,
  getProducts,
  getProduct,
  addProduct,
  getCartItems,
  getCartItem,
  addToCart,
  deleteCartItem
} from "../connectors";
import pubsub from "../pubnub";

export default {
  Product: {
    name(product, args, ctx) {
      return product.name + " (on sale)";
    }
  },
  CartItem: {
    product(cartItem, args, ctx) {
      console.log("product resolver executed");
      return getProduct(cartItem.productId);
    }
  },
  User: {
    fullName(user, args, ctx) {
      return user.firstName + " " + user.lastName;
    }
  },
  Query: {
    user(_, args, ctx) {
      console.log(getUser());
      return getUser();
    },
    products(root, args, ctx) {
      return getProducts(args);
    },
    product(_, args, ctx) {
      return getProduct(args.id);
    },
    cartItems(_, args, ctx) {
      return getCartItems();
    }
  },
  Mutation: {
    addProduct(_, args, ctx) {
      return addProduct(args);
    }
  }
};
