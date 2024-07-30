import { Dispatch, createContext } from "react";
import { CartAction, CartState } from "./CartReducer";

interface CartContextTyoe {
    state: CartState ;
    dispatch : Dispatch<CartAction>
}

export const CartContext =  createContext({} as CartContextTyoe)