import React, { useEffect, useState } from 'react';
import './Home.css';
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import Modal from '../Modal/Modal';

const Home = () => {
    // state for storing the products data 
    const [products, setProducts] = useState([]);
    // state for storing the cart products 
    const [cart, setCart] = useState([]);
    // state for storing the randomly generated product 
    const [generatedItem, setGeneratedItem] = useState({});
    // state for displaying the modal 
    const [display, setDisplay] = useState('none');
    // state for displaying the randomly generated product 
    const [show, setShow] = useState('none');
    // useEffect for fetching and sets the products data 
    useEffect(()=>{
        fetch('products.json')
        .then(res => res.json())
        .then(data => setProducts(data))
    },[])
    // handler for add product into cart 
    const addToCart = (product) =>{
        if(cart.length < 4){
            const exist = cart.find(element => element.id === product.id);
            if(!exist){
                const newCart = [...cart, product];
                setCart(newCart);
            }
        }
        else{
            setDisplay('block');
        }
    }
    // handler for generate a random product
    const generateCartItem = () =>{
        if(cart.length > 0){
            const index = Math.round(Math.random() * 10);
            if(index < cart.length){
                const item = cart[index];
                setGeneratedItem(item);
            }
            else{
                return generateCartItem();
            }
            setShow('flex');
        }
    }
    // handler for delete specified item from cart 
    const deleteItem = (product) =>{
        const restItem = cart.filter(item => item.id !== product.id);
        setCart(restItem);
    }
    // handler for clear the whole cart 
    const resetCart = () =>{
        const emptyCart = [];
        setCart(emptyCart);
        setShow('none');
    }
    // handler for closing the warning modal 
    const closeModal = () =>{
        setDisplay('none');
    }
    return (
        <div>
            <div>
                <Modal display={display} closeModal={closeModal}></Modal>
            </div>
            <div className='home-container'>
                <div className="products-container">
                    {
                        products.map(product => <Product key={product.id} product={product} addToCart={addToCart}></Product>)
                    }
                </div>
                <div className="cart-container">
                    <Cart 
                    cart={cart}
                    generateCartItem={generateCartItem}
                    generatedItem={generatedItem}
                    resetCart={resetCart}
                    deleteItem={deleteItem}
                    show={show}
                    ></Cart>
                </div>
            </div>
        </div>
    );
};

export default Home;