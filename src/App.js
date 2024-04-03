import logo from "./logo.svg";
import "./App.css";
import { Component, useState } from "react";
import Product from "./components/product";
import Products from "./components/products";
import { PRODUCTS_DATA } from "./data/products";

// export default class App extends Component {
//   testdata = PRODUCTS_DATA;
//   test = this.testdata.map((item) => ({
//     ...item,
//     count: 0,
//   }));
//   state = { prod_data: this.test };

//   handleAddToCart = (productId, itemCount) =>{

//   }

//   handleIncrement = (id) => {
//     this.setState({
//       prod_data: this.state.prod_data.map((prod) => {
//         if (prod.id === id) {
//           return {
//             ...prod,
//             count: prod.count + 1,
//           };
//         }
//         return prod;
//       }),
//     });
//   };

//   handleDecrement = (id) => {
//     this.setState({
//         prod_data: this.state.prod_data.map((prod) => {
//           if (prod.id === id) {
//             return {
//               ...prod,
//               count: prod.count - 1,
//             };
//           }
//           return prod;
//         }),
//       });
//   };
//   render() {
//     return (
//       <div className="container">
//         <Products
//           prod_data = {this.state.prod_data}
//           onIncrement = {this.handleIncrement}
//           onDecrement = {this.handleDecrement}
//         />
//       </div>
//     )
//   }
// }

import React from "react";
import NavBar from "./components/NavBar";

const App = () => {
  const test = PRODUCTS_DATA.map((item) => ({
    ...item,
    count: 0,
  }));
  const [prod, setProd] = useState(test);
  const [cartItems, setCartItems] = useState([])
  const display = 0

  const handleAddToCart = (product, itemCount) => {
    const existingItem = cartItems.find(item => item.prod === product)
    if(existingItem){
      setCartItems(prevCartItems => (
        prevCartItems.map(item => (
          item === product ? { ...item, count: itemCount } : item
        ))
      ))
    } else{
      cartItems.push(product)
    }
    console.log(JSON.stringify(cartItems))
  };
  const totalCount = cartItems.reduce((sum, currentItem) => sum + currentItem.count,0)
  const handleIncrement = (id) => {
    setProd(
      prod.map((pr) => {
        if (pr.id === id) {
          return {
            ...pr,
            count: pr.count + 1,
          };
        }
        return pr;
      })
    );
  };

  const handleDecrement = (id) => {
    setProd(
      prod.map((pr) => {
        if (pr.id === id) {
          return {
            ...pr,
            count: pr.count - 1,
          };
        }
        return pr;
      })
    );
  };
  return (
    <div>
      <NavBar totalCount={totalCount} cartItems={cartItems}/>
      <div className="container">
        <Products
          prod_data={prod}
          addToCart={handleAddToCart}
          onIncrement={handleIncrement}
          onDecrement={handleDecrement}
        />
      </div>
    </div>
  );
};

export default App;
