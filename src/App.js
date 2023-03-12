
import React, { useState } from "react";
import Header from "./Components/Layout/Header";
//import Product from "./Components/Products/Product";
import Footer from "./Components/Layout/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/store/CartProvider";


function App() {
  const [showCart, setShowCart] = useState(false);
  const ShowCartHandler = ()=> {
    setShowCart(true);
  }
  const HideCartHandler = ()=>{
    setShowCart(false);
  }
  return (
    <CartProvider>
    {showCart && <Cart onClose={HideCartHandler}/>}
      <Header onShow={ShowCartHandler}/>
      {/* <Product /> */}
      <Footer />
    </CartProvider>
  );
}
export default App;