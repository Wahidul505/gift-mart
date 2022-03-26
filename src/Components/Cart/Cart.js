import React from 'react';
import CartItem from '../CartItem/CartItem';

const Cart = ({cart}) => {
    return (
        <div>
            <h3>Your Orders</h3>
            <hr />
            {
                cart.map(product => <CartItem key={product.id} product={product}></CartItem>)
            }
            <hr />
        </div>
    );
};

export default Cart;