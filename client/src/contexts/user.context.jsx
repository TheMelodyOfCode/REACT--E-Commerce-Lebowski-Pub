
import { createContext, useState, useEffect } from "react";
import { onAuthStateChangedListener, createUserDocumentFromAuth } from "../utils/firebase/firebase.utils";

//this is the actual value you want to access
export const UserContext = createContext({
    /** here we buil the base empty state
     * an empty object is still be true, therefor we set it to null */
    currentUser: null,
    setCurrentUser: () => null,
});

/**
 * provider is the actual component
 * on every context that is build for us there is a .Provider
 * the .Provider is the component that will wrap around
 * ANY OTHER components that need access to the values inside
 * <UserProvider>
 * <App /> (chidren)
 * </UserProvider>
 * * * 
 * this UserProvider is alowing any of it's child components
 * to acces it's values inside of it's useState*/
export const UserProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(null);
    const value = { currentUser, setCurrentUser};

    /* centralized user authentication and creation */
    useEffect(()=> {
       const unsubscribe = onAuthStateChangedListener((user)=>{
        if (user) {
            createUserDocumentFromAuth(user);
        }
        setCurrentUser(user);
        // console.log(user);
       })

       return unsubscribe;
    }, [])

    // value holds the actual contextual values
    return <UserContext.Provider value={value}>{children}</UserContext.Provider>
}