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
  Query: {
    user(_, args, ctx) {
      return getUser();
    },
    products(root, args, ctx) {
      return getProducts();
    },
    product(_, args, ctx) {
      return getProduct(args.id);
    }
  }
};
