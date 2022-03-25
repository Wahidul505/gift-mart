import React, { useEffect, useState } from 'react';
import './Home.css';
import Gift from '../Gift/Gift';
import Cart from '../Cart/Cart';

const Home = () => {
    const [products, setProducts] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    return (
        <div className='home-container'>
            <div className="products-container">
                {
                    products.map(gift => <Gift key={gift.id} gift={gift}></Gift>)
                }
            </div>
            <div className="cart-container">
                <Cart></Cart>
            </div>
        </div>
    );
};

export default Home;