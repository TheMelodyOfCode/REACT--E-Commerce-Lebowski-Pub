import {useState, createContext } from 'react';

// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";


/** find if cartItems contains productToAdd
*   if found, increment quantity
*   return new array with modified cartItems/ new cart item */
const addCartItem = (cartItems, productToAdd) => {

    const existingCartItem = cartItems.find(
        (cartItem) => cartItem.id === productToAdd.id
    );

        if(existingCartItem) {
            return cartItems.map((cartItem) =>
            cartItem.id === productToAdd.id
            ? {...cartItem, quantity: cartItem.quantity +1 }
            : cartItem
            );
        }

    return [...cartItems, { ...productToAdd, quantity: 1}];
}

export const CartContext = createContext(
    {
        isCartOpen: false,
        setIsCartOpen: ()=>{},
        cartItems: [],
        addItemToCart: ()=>{},
    }
);



export const CartProvider = ({children})=>{
    const [isCartOpen, setIsCartOpen] =  useState(false);
    const [cartItems, setCartItems] = useState([]);

    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems};

    return (
        <CartContext.Provider value={value} > {children} </CartContext.Provider>
    )

}