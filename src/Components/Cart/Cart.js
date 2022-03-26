import React from 'react';
import CartItem from '../CartItem/CartItem';
import './Cart.css';
import { BsArrowRightSquare } from 'react-icons/bs';

const Cart = ({cart, generateCartItem, generatedItem}) => {
    const {name, image} = generatedItem;
    return (
        <div>
            <h3>Your Orders</h3>
            <hr />
            {
                cart.map(product => <CartItem key={product.id} product={product}></CartItem>)
            }
            <hr />
            <div className='generated-item'>
                <img src={image} alt="" />
                <h4>{name}</h4>
                <button><BsArrowRightSquare /></button>
            </div>
            <hr />
            <button onClick={generateCartItem} className='choose-btn'>Choose One For Me</button>
            <button className='reset-btn'>Reset</button>
        </div>
    );
};

export default Cart;