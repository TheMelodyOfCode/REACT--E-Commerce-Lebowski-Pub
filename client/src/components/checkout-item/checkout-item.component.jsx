
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


const CheckoutItem = ({cartItem})=>{

const { title, imgSm, price, quantity} = cartItem;

const {clearItemFromCart, addItemToCart, removeItemFromCart} = useContext(CartContext)

const clearItemHandler = ()=> clearItemFromCart(cartItem);
const addItemHandler = ()=> addItemToCart(cartItem);
const removeItemHandler = ()=> removeItemFromCart(cartItem);

return (
    <div className='checkOutItem__container'>
        <div className='checkOutItem__imageContainer'>
        <img srcSet={`./img/shopItems/${imgSm} `}  alt={title} />
        </div>
        <span className='checkOutItem__title' >{title}</span>
        <span className='checkOutItem__quantityBox' >
            <div className='checkOutItem__arrow' onClick={removeItemHandler} >
                &#10094;
            </div>
            <span className='checkOutItem__quantity' >{quantity}</span>
            <div className='checkOutItem__arrow' onClick={addItemHandler} >
                &#10095;
            </div>
        </span>
        <span className='checkOutItem__price'>  {price} €</span>
        <div className='checkOutItem__removeButton' onClick={clearItemHandler} >&#10005;</div>
    </div>
)

}

export default CheckoutItem;