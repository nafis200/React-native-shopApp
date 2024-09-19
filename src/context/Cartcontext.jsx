import { createContext, useState } from "react";


export const cartContext = createContext() 

export const CartProvider = ({children})=>{
    const [carts,setCarts] = useState([]);

    const addToCart = (item)=>{
        const itemExist = carts.findIndex((cart)=> cart.id === item.id)
        if(itemExist){
            setCarts([...carts, item])
        }
    }

    const value = {
        carts,
        addToCart
    }
    return <cartContext.Provider value = {value}>{children}</cartContext.Provider>
}