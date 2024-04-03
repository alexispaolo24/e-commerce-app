import { Component } from "react";
import { PRODUCTS_DATA } from "../data/products";
import Product from "./product";
import { Grid } from "@mui/material";

// export default class Products extends Component {
//   render() {
//     return (
//       <Grid container>
//         {this.props.prod_data.map((prod) => (
//           <Product key={prod.id}
//             data={prod}
//             onIncrement={this.props.onIncrement}
//             onDecrement={this.props.onDecrement}
//           />
//         ))}
//       </Grid>
//     );
//   }
// }

import React from "react";

const Products = (props) => {
  return (
    <Grid container>
      {props.prod_data.map((prod) => (
        <Product
          key={prod.id}
          data={prod}
          addToCart={props.addToCart}
          onIncrement={props.onIncrement}
          onDecrement={props.onDecrement}
        />
      ))}
    </Grid>
  );
};

export default Products;
