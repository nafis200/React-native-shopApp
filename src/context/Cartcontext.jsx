import { createContext, useState } from "react";


export const cartContext = createContext() 

export const CartProvider = ({children})=>{
    const [carts,setCarts] = useState([1,2,3]);

    const value = {
        carts,
    }
    return <cartContext.Provider value = {value}>{children}</cartContext.Provider>
}