import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';

const Home = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    const [generatedItem, setGeneratedItem] = useState({});
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
    const generateCartItem = () =>{
        const index = Math.floor(Math.random() * 10);
        if(index < cart.length){
            const item = cart[index];
            setGeneratedItem(item);
        }
        else{
            return generateCartItem();
        }
    }
    return (
        <div className='home-container'>
            <div className="products-container">
                {
                    products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                }
            </div>
            <div className="cart-container">
                <Cart cart={cart} generateCartItem={generateCartItem} generatedItem={generatedItem}></Cart>
            </div>
        </div>
    );
};

export default Home;