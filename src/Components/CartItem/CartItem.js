import React from 'react';
import { FaTrashAlt } from 'react-icons/fa';
import './CartItem.css';

const CartItem = ({product}) => {
    const {name, image} = product;
    return (
        <div>
            <div className='cart-item'>
                <img src={image} alt="" />
                <p>{name}</p>
                <button><FaTrashAlt /></button>
            </div>
        </div>
    );
};

export default CartItem;