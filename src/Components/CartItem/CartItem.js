import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './CartItem.css';

const CartItem = () => {
    return (
        <div>
            <div className='cart-item'>
                <img src="https://m.media-amazon.com/images/I/41zq8jCSYJL.jpg" alt="" />
                <p>product number one and only</p>
                <button><FaTrashAlt /></button>
            </div>
        </div>
    );
};

export default CartItem;