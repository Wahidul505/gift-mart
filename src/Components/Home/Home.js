import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    const addToCart = (product) =>{
        const exist = cart.find(element => element.id === product.id);
        if(!exist){
            const newCart = [...cart, product];
            setCart(newCart);
        }
    }
    console.log(cart);
    return (
        <div className='home-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart}></Cart>
            </div>
        </div>
    );
};

export default Home;