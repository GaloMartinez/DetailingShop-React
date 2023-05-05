import react from 'react'

const CartContext = react.createContext({
    cartItems: [],
    handleOnAdd: () => {},
    quantityAdded: 0,
    setQuantityAdded: () => {}

});


export default CartContext;