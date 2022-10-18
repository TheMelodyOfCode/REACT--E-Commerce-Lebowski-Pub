
import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';
import CheckoutItem from '../../components/checkout-item/checkout-item.component';


const Checkout = () => {
        const { cartItems, cartTotal} = useContext(CartContext)
    return (
        <div className='checkout__container'>
            <div className='checkout__header'>
                <div className='checkout__headerBlock'>
                    <span>Product</span>
                </div>
                <div className='checkout__headerBlock'>
                    <span>Description</span>
                </div>
                <div className='checkout__headerBlock'>
                    <span>Quantity</span>
                </div>
                <div className='checkout__headerBlock'>
                    <span>Price</span>
                </div>
                <div className='checkout__headerBlock'>
                    <span>Remove</span>
                </div>
            </div>
            {cartItems.map((cartItem) => (
                <CheckoutItem key={cartItem.id} cartItem={cartItem} />
            ))}
            <span className='checkout__total'>Total: {cartTotal}€</span>
        </div>
    );
};

export default Checkout;