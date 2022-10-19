
import {useState, createContext , useEffect} from 'react';

import { getCategoriesAndDocuments } from "../utils/firebase/firebase.utils.js";
// import { addCollectionAndDocuments } from "../utils/firebase/firebase.utils.js";
// import SHOP_DATA from '../shop-data.js';

export const CategoriesContext = createContext(
    {
    categoriesMap: {},
    }
);

export const CategoriesProvider = ({children})=>{
    const [categoriesMap, setCategoriesMap] =  useState({});
    /* This was just to see how to upload data to firestore
    This function shouldn't run everytime- it was a one of thing just to see hwo to store stuff in fb */
    // useEffect(()=>{
    //     addCollectionAndDocuments('categories', SHOP_DATA)
    // })

    useEffect(()=>{
        const getCategoriesMap = async ()=> {
            const categoryMap = await getCategoriesAndDocuments();
            // console.log(categoryMap);
            setCategoriesMap(categoryMap)
        };

        getCategoriesMap();
    }, []);

    const value = {categoriesMap};
  
    return (
        <CategoriesContext.Provider value={value}> {children} </CategoriesContext.Provider>
    )

}