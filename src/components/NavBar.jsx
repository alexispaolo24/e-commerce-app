import { AppBar, Badge, IconButton, Toolbar, Typography } from "@mui/material";
import React, { useState } from "react";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import Cart from "./Cart";

const NavBar = (props) => {
  const [isCartOpen, setIsCartOpen] = useState(false);

  const toggleCart = () => {
    setIsCartOpen(!isCartOpen);
  };
  return (
    <div>
      <AppBar position="static">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            E-Commerce App
          </Typography>
          <IconButton color="inherit" aria-label="cart" onClick={toggleCart}>
            <Badge badgeContent={props.totalCount} color="error">
              <ShoppingCartIcon />
            </Badge>
          </IconButton>
        </Toolbar>
      </AppBar>
      {isCartOpen && <Cart cartItems={props.cartItems}/>}
    </div>
  );
};

export default NavBar;
