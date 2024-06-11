import { useContext } from "react";
import CartContext from "../Components/Context/ContextProviders/CartContextProvider";

const useCart = () => {
  return useContext(CartContext);
};

export default useCart;














// import { useContext } from "react";
// import CartContextProvider from "../Components/Context/ContextProviders/CartContextProvider";

// const useCart = () => {
//     return (CartContextProvider);
// }

// export default useCart;