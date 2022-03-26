import CartItem from '../CartItem/CartItem';
import './Cart.css';
import { BsArrowRightSquare } from 'react-icons/bs';

const Cart = ({cart, generateCartItem, generatedItem, resetCart, deleteItem, show}) => {
    const {name, image} = generatedItem;
    return (
        <div className='cart'>
            <h3>Your Orders</h3>
            <hr />
            {
                cart.map(product => <CartItem key={product.id} product={product} deleteItem={deleteItem}></CartItem>)
            }
            <hr />
            <div style={{display: show}} className='generated-item'>
                <img src={image} alt="" />
                <h4>{name}</h4>
                <button><BsArrowRightSquare /></button>
            </div>
            <hr />
            <button onClick={generateCartItem} className='choose-btn'>Choose One For Me</button>
            <button onClick={resetCart} className='reset-btn'>Reset</button>
        </div>
    );
};

export default Cart;