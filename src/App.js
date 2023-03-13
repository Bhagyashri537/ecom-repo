
import React, { useState } from "react";
import Header from "./Components/Layout/Header";
//import Product from "./Components/Products/Product";
import Footer from "./Components/Layout/Footer";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./Components/store/CartProvider";

const Dummy_Product = [
  {
      id:'p1',
      title: 'Colors',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%201.png',
      quantity:1
  },
  {
      id:'p2',
      title: 'Black and white Colors',
      price: 50,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%202.png',
      quantity:1
  },
  {
      id:'p3',
      title: 'Yellow and Black Colors',
      price: 70,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%203.png',
      quantity:1
  },
  {
      id:'p4',
      title: 'Blue Color',
      price: 100,
      imageUrl: 'https://prasadyash2411.github.io/ecom-website/img/Album%204.png',
      quantity:1
  }
]

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
      <Header  product = {Dummy_Product} onShow={ShowCartHandler}/>
      {/* <Product /> */}
      <Footer />
    </CartProvider>
  );
}
export default App;