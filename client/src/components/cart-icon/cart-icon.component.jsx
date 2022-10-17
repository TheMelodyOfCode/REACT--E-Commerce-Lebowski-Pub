
import { ReactComponent as ShoppingIcon } from '../../assets/shoppingCart.svg';

import { useContext } from 'react';
import { CartContext } from '../../contexts/cart.context';


const CartIcon = ()=> {

    const { isCartOpen, setIsCartOpen} = useContext(CartContext);
    const toggleIsCartOpen = () => setIsCartOpen(!isCartOpen);

    return (

        <div className='cart-icon__container' onClick={toggleIsCartOpen} >
            <ShoppingIcon className='cart-icon__icon'/>
            <span className='cart-icon__itemCount'>100</span>
        </div>
    )

}

export default CartIcon;