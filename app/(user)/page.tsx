"use client";

import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import {
  Alert,
  AppBar,
  Button,
  Snackbar,
  Toolbar,
  Typography,
} from "@mui/material";
import Container from "@mui/material/Container";
import { useEffect, useState } from "react";
import { BubbleTeaService } from "../(services)/bubbleTeaService";
import ProductList from "./components/ProductList";
import { ProductsProvider } from "./contexts/ProductsContext";
import ShoppingCartList from "./components/ShoppingCartList";
import HomeIcon from "@mui/icons-material/Home";

export default function UserPage() {
 
  const [openToast, setOpenToast] = useState(false);

  const [inShoppingCart, setInShoppingCart] = useState(false);
  return (
    <Container>
      <AppBar position="fixed">
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            Bubble Teas
          </Typography>
          <Button
            variant="outlined"
            endIcon={inShoppingCart ?  <HomeIcon /> : <ShoppingCartIcon />}
            sx={{ borderColor: "white", color: "white" }}
            onClick={() => setInShoppingCart((prev) => !prev)}
          >
            {inShoppingCart ? "Home" : "Cart"}
          </Button>
        </Toolbar>
      </AppBar>
      <ProductsProvider>
        {inShoppingCart ? (
          <ShoppingCartList
            setOpenToast={setOpenToast}
            setInShoppingCart={setInShoppingCart}
          />
        ) : (
          <ProductList />
        )}
      </ProductsProvider>
      <Snackbar
        open={openToast}
        autoHideDuration={6000}
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
      >
        {/* Hard coded message for now, I'm aware that it's not good practice */}


        <Alert severity="success" onClose={() => setOpenToast(false)}>
          Order submitted successfully! Your cart has been cleared.
        </Alert>
      </Snackbar>
    </Container>
  );
}
