import React, { useState } from "react";
import CartContext from "./cart-context";
import { useHistory } from "react-router-dom";


const defaultCartState = {
  items: [],
  totalAmount: 0,
};
const url = 'https://crudcrud.com/api/16fda313040744e0b8c94cbdf94c9bf4';

async function getCartItemsFromCrud() {
  const email = localStorage.getItem("email");
  const str = email.replace("@", "");
  const newstr = str.replace(".", "");
  try {
    const res = await fetch(
      `${url}/cart${newstr}`,
      {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    const data = await res.json();
    //  console.log(data)

    return data;
  } catch (err) {
    console.log(err.message);
  }
}

async function postCart(obj){
  const email= localStorage.getItem('email');
  const str = email.replace("@" ,"");
  const newstr = str.replace(".","");

  try{
     const res = await fetch(`${url}/cart${newstr}` ,{
      method : 'POST',
      body : JSON.stringify(obj),
      headers :{
        'Content-Type' : 'application/json'
      }
    })
    alert("Item added Successfully")
  }catch(err){
    console.log(err.message)
  }
}

async function putCart(id ,obj){
  const email= localStorage.getItem('email');
  const str = email.replace("@" ,"");
  const newstr = str.replace(".","");

  try{
     const res = await fetch(`${url}/cart${newstr}/${id}` ,{
      method : 'PUT',
      body : JSON.stringify(obj),
      headers :{
        'Content-Type' : 'application/json'
      }
    })
    alert("Item added Successfully")
  }catch(err){
    console.log(err.message)
  }
}

async function deleteCart(id){
  const email= localStorage.getItem('email');
  const str = email.replace("@" ,"");
  const newstr = str.replace(".","");

  try{
     const res = await fetch(`${url}/cart${newstr}/${id}` ,{
      method : 'DELETE',
      headers :{
        'Content-Type' : 'application/json'
      }
    })

  }catch(err){
    console.log(err.message)
  }
}




const CartProvider =  (props) => {
  const [cart, setCart] = useState(defaultCartState.items);
  const [totalAmount, setTotalAmount] = useState(defaultCartState.totalAmount);
  // const [cartState , dispatchcartAction] = useReducer(cartReducer , defaultCartState)

  const addItemHandler = async (item) => {
    let isPresent = cart.find((obj) => obj.id === item.id);
    let isboolean = isPresent === undefined ? false : true;

    if (!isboolean) {
      const updatedItems = cart.concat(item);
      const newTotalAmount = totalAmount + item.price;

      setTotalAmount(newTotalAmount);
      await postCart(item)
      const data = await getCartItemsFromCrud();
      setCart(data , totalAmount);


    } else {
      let newid
      let newitem
      const updatedItems = cart.map(async (item1) => {
        if (item1.id === item.id) {
           newid = item1._id
           newitem = {...item1 , quantity : item1.quantity}
          //await putCart(item1._id , {...item1 , quantity : item1.quantity +1})
          // const data = await getCartItemsFromCrud();
          // setCart(data)
          // return { ...item1, quantity: item1.quantity + 1 };
        }
      });
      const newTotalAmount = totalAmount + item.price;
     // setCart(updatedItems);
      setTotalAmount(newTotalAmount);
      delete newitem._id
      await putCart(newid , {...newitem , quantity : newitem.quantity +1})
       const data = await getCartItemsFromCrud();
        setCart(data , newTotalAmount)
    }
  };

  const removeItemHandler = async  (item) => {
    // const deleteItem = cart.map(item1 =>{
    //    item1._id
    // })
    let updatedDeleteCart= cart.filter(item1=>item1.id===item.id)

    const updatedItems = cart.filter(
       (item1) =>item1.id !== item.id 
    );
    const newTotalAmount = totalAmount - (item.quantity*item.price);

   // setCart(updatedItems);
    //setTotalAmount(newTotalAmount)

    await deleteCart(updatedDeleteCart[0]._id)
    const data = await getCartItemsFromCrud();

    setCart(data );
    setTotalAmount(newTotalAmount)

    alert("Item deleted Successfully")

  };

  const setDataHandler = (data  , totalAmount)=>{
    //  const data = await getCartItemsFromCrud();
     setCart(data)
     setTotalAmount(totalAmount)
  }

  //login and auuthentication

  const initialToken = localStorage.getItem("token");
  const [token, setToken] = useState(initialToken);
  const userLoggedIn = !!token;
  const history = useHistory();

  const loginHandler = (token) => {
    setToken(token);
    localStorage.setItem("token", token);
    history.replace("/store");
  };

  const logoutHandler = () => {
    setToken(null);
    localStorage.removeItem("token");
    alert("Logout Successful")
  };
  

  const cartContext = {
    items: cart,
    totalAmount: parseInt(totalAmount),
    addItem: addItemHandler,
    removeItem: removeItemHandler,
    setData : setDataHandler,
    token: token,
    login: loginHandler,
    logout: logoutHandler,
    isLoggedIn: userLoggedIn,
  };
  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;