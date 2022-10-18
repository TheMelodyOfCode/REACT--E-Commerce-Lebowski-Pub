import { useContext } from 'react';

import { CartContext } from '../../contexts/cart.context';
import Button from '../button/button.component'
import CartItem from '../cart-item/cart-item.component';

const CartDropdown = ()=>{
    const { cartItems} = useContext(CartContext);
    return (
        <div className='cart-dropdown__container'>
            <div className='cart-dropdown__cartItems' >
                <div >
                {
                cartItems.length ? (cartItems.map((item) => (
                    <CartItem key={item.id} cartItem={item} />
                    ))) : (
                        <span>Your cart is empty</span>
                    )
                }
                </div>
            </div>
            <Button>GO TO CHECKOUT</Button>
        </div>
    )
}

export default CartDropdown;