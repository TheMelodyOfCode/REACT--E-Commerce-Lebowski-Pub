import {useState, createContext } from 'react';

// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

export const CartContext = createContext(
    {
        isCartOpen: false,
        setIsCartOpen: ()=>{},
    }
);

export const CartProvider = ({children})=>{
    const [isCartOpen, setIsCartOpen] =  useState(false);
    const value = {isCartOpen, setIsCartOpen};
  
    return (
        <CartContext.Provider value={value} > {children} </CartContext.Provider>
    )

}