import React from "react";
// import { ListGroup, ListGroupItem } from "reactstrap";
// import DeleteCartItem from "./DeleteCartItem";

// function CartItem({ cartItem }) {
//   return (
//     <ListGroupItem>
//       <div className="row">
//         <div className="col-auto mr-auto">{cartItem.product.name}</div>
//         <div className="col-auto">
//           <DeleteCartItem id={cartItem.id} />
//         </div>
//       </div>
//     </ListGroupItem>
//   );
// }

// function CartItemsList({ cartItems }) {
//   return (
//     <div>
//       <ListGroup>
//         {cartItems.map(cartItem => (
//           <CartItem key={cartItem.id} cartItem={cartItem} />
//         ))}
//       </ListGroup>
//     </div>
//   );
// }

export default class Cart extends React.Component {
  render() {
    return <h1>Cart</h1>;
  }
}
