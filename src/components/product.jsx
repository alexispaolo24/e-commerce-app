import { Component } from "react";
import { Products, Products as data } from "../data/products";
import {
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Button,
  Typography,
  TextField,
  IconButton,
} from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { red } from "@mui/material/colors";
import React, { useState } from "react";
import AddIcon from "@mui/icons-material/Add";
import RemoveIcon from "@mui/icons-material/Remove";

// export default class Product extends Component {
//   constructor(props) {
//     super(props);
//   }

//   formatText = () => {
//     if (this.props.data.count > 0) {
//       return this.props.data.count;
//     }
//     return 0;
//   };

//   handleAddToCard = () => {
//     this.setState();
//   };
//   render() {
//     return (
//       // <div>{this.props.data.title}</div>
//       <Card sx={{ maxWidth: 345 }}
//         style={{flexDirection: 'column'}}>
//         <CardHeader
//           avatar={
//             <Avatar sx={{ bgcolor: red[500] }} aria-label="product">
//               ₱
//             </Avatar>
//           }
//           title={this.props.data.title}
//           subheader={this.props.data.price}
//         />
//         <CardMedia component="img" image={this.props.data.image} />
//         <CardContent style ={{ flexGrow: 1}}>
//           <Typography variant="body2" color="text.secondary">
//             {this.props.data.description}
//           </Typography>
//           <div style={{alignSelf:'flex-end'}}></div>
//           <div
//             style={{
//               display: "flex",
//               flexWrap: "wrap",
//               justifyContent: "center"
//             }}
//           >
//             <IconButton
//               aria-label="remove"
//               color="primary"
//               variant="contained"
//               onClick={() => this.props.onDecrement(this.props.data.id)}
//               disabled={this.props.data.count < 1}
//             >
//               <RemoveIcon />
//             </IconButton>
//             <Typography variant="h6" gutterBottom color="text.primary">
//               {this.props.data.count}
//             </Typography>
//             <IconButton
//               aria-label="add"
//               color="primary"
//               variant="contained"
//               onClick={() => this.props.onIncrement(this.props.data.id)}
//             >
//               <AddIcon />
//             </IconButton>
//           </div>

//           <div
//             style={{
//               display: "flex",
//               flexWrap: "wrap",
//               justifyContent: "center",
//             }}
//           >
//             <Button
//               variant="contained"
//               color="primary"
//               aria-label="Shopping Cart"
//               onClick={() => alert("Item added to cart")}
//             >
//               🛒 Add to Cart
//             </Button>
//           </div>
//         </CardContent>
//       </Card>
//     );
//   }
// }

const Product = (props) => {
  const formatText = () => {
    if (props.data.count > 0) {
      return props.data.count;
    }
    return 0;
  };

  return (
    <Card sx={{ maxWidth: 345 }} style={{ flexDirection: "column" }}>
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[500] }} aria-label="product">
            ₱
          </Avatar>
        }
        title={props.data.title}
        subheader={props.data.price}
      />
      <CardMedia component="img" image={props.data.image} />
      <CardContent style={{ flexGrow: 1 }}>
        <Typography variant="body2" color="text.secondary">
          {props.data.description}
        </Typography>
        <div style={{ alignSelf: "flex-end" }}></div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <IconButton
            aria-label="remove"
            color="primary"
            variant="contained"
            onClick={() => props.onDecrement(props.data.id)}
            disabled={props.data.count < 1}
          >
            <RemoveIcon />
          </IconButton>
          <Typography variant="h6" gutterBottom color="text.primary">
            {props.data.count}
          </Typography>
          <IconButton
            aria-label="add"
            color="primary"
            variant="contained"
            onClick={() => props.onIncrement(props.data.id)}
          >
            <AddIcon />
          </IconButton>
        </div>

        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "center",
          }}
        >
          <Button
            variant="contained"
            color="primary"
            aria-label="Shopping Cart"
            disabled={props.data.count < 1}
            onClick={() => {
              alert("Item added to cart");
              props.addToCart(props.data, props.data.count);
            }}
          >
            🛒 Add to Cart
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};

export default Product;
