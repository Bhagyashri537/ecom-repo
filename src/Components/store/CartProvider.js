import React, { useReducer } from "react";
import CartContext from "./cart-context";

const defaultCartState = {
    items: [],
    totalAmount: 0,
    quantity:0
}

const cartReducer = (state, action)=>{
    if(action.type==='ADD'){
       const updateItems = state.items.concat(action.item);
       const updateTotalAmount = state.totalAmoount + action.totalAmoount+action.item.quantity;
       const updateQuantity = state.quantity+action.item.quantity;
       return {
        items: updateItems,
        totalAmoount: updateTotalAmount,
        quntity: updateQuantity
       }
    }
return defaultCartState;
}

const CartProvider = (props)=>{
    const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);
    const addItemtoCart = (item)=> {
        dispatchCart({type:'ADD', item:item})
    };

    const removeItemFromCart = (id) => {
        dispatchCart({type:'REMOVE', id:id});
    };

    const cartContext = {
        items: cartState.items,
        totalAmoount:cartState.totalAmount,
        quantity: cartState.quantity,
        addItem: addItemtoCart,
        removeItem: removeItemFromCart
    }
return <CartContext.Provider value={cartContext}>
    {props.children}
</CartContext.Provider>
}

export default CartProvider;