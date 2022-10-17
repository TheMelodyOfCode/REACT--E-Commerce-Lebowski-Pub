
import { ReactComponent as ShoppingIcon } from '../../assets/shoppingCart.svg';

const CartIcon = ()=> {

    return (

        <div className='cart-icon__container'>
            <ShoppingIcon className='cart-icon__icon'/>
            <span className='cart-icon__itemCount'>100</span>
        </div>
    )

}

export default CartIcon;