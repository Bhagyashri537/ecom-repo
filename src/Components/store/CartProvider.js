import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
    quantity:0
}

const cartReducer = (state, action)=>{
    if (action.type === 'ADD') {
        const updatedTotalAmount =
          state.totalAmount + action.item.price * action.item.quantity;

        const existingCartItemIndex = state.items.findIndex(
          (item) => item.id === action.item.id
        );
        const existingCartItem = state.items[existingCartItemIndex];
        let updatedItems;

        if (existingCartItem) {
          const updatedItem = {
            ...existingCartItem,
            quantity: existingCartItem.quantity + action.item.quantity,
          };
          updatedItems = [...state.items];
          updatedItems[existingCartItemIndex] = updatedItem;
        } else {
          updatedItems = state.items.concat(action.item);
        }
        console.log(updatedTotalAmount);

        return {
          items: updatedItems,
          totalAmount: updatedTotalAmount,
        };
      }
    if(action.type==='REMOVE'){
        const existingCartItemIndex = state.items.findIndex(
            (item) => item.id === action.id
          );
          const existingItem = state.items[existingCartItemIndex];

      const updatedTotalAmount = state.totalAmount - existingItem.price;
      let updatedItems; 
      if (existingItem.quantity === 1) {
        updatedItems = state.items.filter(item => item.id !== action.id);
      } else {
        const updatedItem = { ...existingItem, quantity: existingItem.quantity - 1 };
        updatedItems = [...state.items];
        updatedItems[existingCartItemIndex] = updatedItem;
      }
        return {
            items: updatedItems,
            totalAmount: updatedTotalAmount
          }; 
    }
return defaultCartState;
}

const CartProvider = (props)=>{
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);
    const addItemtoCart = (item)=> {
        console.log('addItemCart', cartState.totalAmount)
        dispatchCart({type:'ADD', item:item})
    };

    const removeItemFromCart = (id) => {
        dispatchCart({type:'REMOVE', id:id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmount:cartState.totalAmount,
        quantity: cartState.quantity,
        addItem: addItemtoCart,
        removeItem: removeItemFromCart
    }
return <CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
}
export default CartProvider;