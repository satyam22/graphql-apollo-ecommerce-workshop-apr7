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

// const {
//   getUser,
//   getProducts,
//   getProduct,
//   addProduct,
//   getCartItems,
//   getCartItem,
//   addToCart,
//   deleteCartItem
// }=require('../connectors');
// const pubsub=require('../pubnub');

// export default {
//   Query: {
//     user(_, args, ctx) {
//       return getUser();
//     }
//   }
// };
