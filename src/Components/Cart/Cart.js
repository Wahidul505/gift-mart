import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';
const Cart = ({cart}) => {
    return (
        <div>
            <h3>Your Orders</h3>
            <hr />
            {
                cart.map(product => <CartItem key={product.id} product={product}></CartItem>)
            }
            <hr />
            <button className='choose-btn'>Choose One For Me</button>
            <button className='reset-btn'>Reset</button>
        </div>
    );
};

export default Cart;