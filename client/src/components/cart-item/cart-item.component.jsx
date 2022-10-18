

const CartItem =({cartItem})=>{
    const {title, img, price, quantity} = cartItem;

    return (
        <div className="cart-item__container">
            <img srcSet={`./img/shopItems/${img} `}  alt={title} />
                <div className='cart-item__details'>
                    <span className='cart-item__title'>{title}</span>
                    <span className='cart-item__price'>
                        {quantity} x {price} €
                    </span>
                </div>   
        </div>
    )

}

export default CartItem;