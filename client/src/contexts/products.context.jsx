
import {useState, createContext , useEffect} from 'react';

// import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";

import PRODUCTS from '../lebowski-data.json';

export const ProductsContext = createContext(
    {
    products: [],
    }
);

export const ProductsProvider = ({children})=>{
    const [products, setProducts] =  useState(PRODUCTS);
    const value = {products, setProducts};
  
    return (
        <ProductsContext.Provider value={value}> {children} </ProductsContext.Provider>
    )

}