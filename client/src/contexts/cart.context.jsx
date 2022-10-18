import {useState, createContext, useEffect } from 'react';

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
        cartCount: 0,
    }
);



export const CartProvider = ({children})=>{
    const [isCartOpen, setIsCartOpen] =  useState(false);
    const [cartItems, setCartItems] = useState([]);
    const [cartCount, setCartCount] = useState(0);
    // const [cartTotal, setCartTotal] = useState();

/** useEffect, we pass it a callback and this callback runs 
 *  everytime the dependency array changes  */
    useEffect(()=>{
        const newCartCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
        setCartCount(newCartCount);
    }, [cartItems])

    // useEffect(()=>{
    //     const newCartTotal = cartItems.reduce(
    //         (total, cartItem) => total + cartItem.quantity * cartItem.price,
    //         0)
    //     setCartTotal(newCartTotal);
    // }, [cartItems])



    const addItemToCart = (productToAdd) => {
        setCartItems(addCartItem(cartItems, productToAdd));
    }

    const value = {isCartOpen, setIsCartOpen, addItemToCart, cartItems, cartCount};

    return (
        <CartContext.Provider value={value} > {children} </CartContext.Provider>
    )

}