import React, { useContext } from 'react';
import Modal  from '../UI/Modal';
import CartContext from '../store/cart-context';
import classes from './Cart.module.css';

const Cart =(props) => {
    const cartCtx = useContext(CartContext);
    const CartItems = <ul className={classes['cart-items']}>
        {cartCtx.items.map((item)=>
        <li>{item.title} {item.price} {item.quantity}
        <button>Remove</button>
        </li>)}
    </ul>

    const totalAmoount = cartCtx.items.reduce((curVal,item)=>{
        return curVal+item.price;
    },0);
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