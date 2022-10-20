import { useContext } from 'react';

import Button  from '../button/button.component';

import { CartContext } from '../../contexts/cart.context';


const ProductCard = ({product}) => {
    const { title, price, img, imgSm} = product;
    const { addItemToCart} = useContext(CartContext);

    const addProductToCart = () => addItemToCart(product);

return (
    <div className="shopItems__container" >
            <img srcSet={`./img/shopItems/${img} 1x, ./img/shopItems/${imgSm} 2x `}  alt={title} className="shopItems__img" />
            <div className='shopItems__footer'>
                <span className='name'>{title}</span>
                <span className='price'>{price}</span>
            </div>   
            {/* <Button className='btn shopItems__button'  type="submit" onClick={addProductToCart} >ADD to Cart</Button>    */}
            <Button btnType='shop'  type="submit" onClick={addProductToCart} >ADD to Cart</Button>   
    </div>
);

}

export default ProductCard;