import React from 'react';
import './Gift.css';
import { BsGiftFill } from 'react-icons/bs';

const Gift = ({gift}) => {
    const {image, name, price} = gift;
    return (
        <div className='gift-card'>
            <div>
                <img src={image} alt="" />
                <h3>{name}</h3>
                <p>Tk {price}</p>
            </div>
            <p className='add-btn'>
                <button>Add To Cart <span style={{paddingLeft:'5px', fontSize:'15px'}}><BsGiftFill></BsGiftFill></span></button>
            </p>
        </div>
    );
};

export default Gift;