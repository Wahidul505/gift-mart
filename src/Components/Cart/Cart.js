import React from 'react';
import CartItem from '../CartItem/CartItem';

const Cart = () => {
    return (
        <div>
            <h3>Your Orders</h3>
            <hr />
            <CartItem></CartItem>
            <hr />
        </div>
    );
};

export default Cart;