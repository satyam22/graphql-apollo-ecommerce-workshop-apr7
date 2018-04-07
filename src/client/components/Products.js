import React from "react";
// import gql from "graphql-tag";
// import { Link } from "react-router-dom";
// import { ListGroup, ListGroupItem } from "reactstrap";
// import ProductSelect from "./ProductSelect";
// import Price from "./Price";

// function Product({ product }) {
//   return (
//     <ListGroupItem>
//       <div className="row">
//         <div className="col-auto mr-auto">
//           <ProductSelect product={product} />
//           <Link to={`/products/${product.id}`}>{product.name}</Link>
//         </div>
//         <div className="col-auto">
//           <Price value={product.price} />
//         </div>
//       </div>
//     </ListGroupItem>
//   );
// }

// function ProductList({ products }) {
//   return (
//     <div>
//       Products
//       <ListGroup>
//         {products.map(product => (
//           <Product key={product.id} product={product} />
//         ))}
//       </ListGroup>
//     </div>
//   );
// }

class Products extends React.Component {
  render() {
    return <h1>Products</h1>;
  }
}

export default Products;
