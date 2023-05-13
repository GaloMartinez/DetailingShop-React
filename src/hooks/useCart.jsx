import { useContext } from "react";
import CartContextProvider from "../Components/Context/ContextProviders/CartContextProvider";

const useCart = () => {
    return useContext(CartContextProvider);
}

export default useCart;