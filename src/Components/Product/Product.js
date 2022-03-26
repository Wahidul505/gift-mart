import React from 'react';
import './Product.css';
import { BsGiftFill } from 'react-icons/bs';

const Product = ({product, addToCart}) => {
    const {image, name, price} = product;
    return (
        <div className='gift-card'>
            <div>
                <img src={image} alt="" />
                <h3>{name}</h3>
                <p>Tk {price}</p>
            </div>
            <p className='add-btn'>
                <button onClick={()=>addToCart(product)}>Add To Cart <span style={{paddingLeft:'5px', fontSize:'15px'}}><BsGiftFill></BsGiftFill></span></button>
            </p>
        </div>
    );
};

export default Product;