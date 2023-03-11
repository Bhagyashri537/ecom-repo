import React, { useContext } from 'react';
import Modal  from '../UI/Modal';
import CartContext from '../store/cart-context';
import classes from './Cart.module.css';

const Cart =(props) => {
    const cartCtx = useContext(CartContext);
    const totalAmoount = cartCtx.totalAmount;
    const cartItemRemoveHandler = (id) => {
        console.log(id);
        cartCtx.removeItem(id);
      };
    const CartItems = <ul className={classes['cart-items']}>
       {cartCtx.items.map((item)=>
        <li>Name:{item.title}  ${item.price}  Qtt:{item.quantity} 
        <span></span><button onClick={cartItemRemoveHandler.bind(null, item.id)}>Remove</button>
        </li>)}
    </ul>

   
   return <Modal onClose={props.onClose}>
   {CartItems}
    <div className={classes.total}>
        <span>Toatal Amount</span>
        <span>${totalAmoount}</span>
    </div>
    <div className={classes.actions}>
        <button className={classes['button--alt']} onClick={props.onClose}>Close</button>
        <button className={classes.button}>Purchase</button>
    </div>
   </Modal>
}
export default Cart;