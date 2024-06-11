import { useState, createContext } from 'react'

const CartContext = createContext();

function CartContextProvider({ children }) {

  const [cart, setCart] = useState([]);
  const [totalProducts, setTotalProducts] = useState(0)
  const [quantityAdded, setQuantityAdded] = useState(0)



  const addProduct = (product, quantity) => {
    if (inCart(product.id)) {
      const cartActualized = cart.map((prod) =>
        prod.id === product.id ? { ...prod, quantity: prod.quantity + quantity } : prod
      );
      setCart(cartActualized);
      setTotalProducts(totalProductsPrev => totalProductsPrev + quantity);
    } else {
      setCart(cartPrev => [...cartPrev, { ...product, quantity }]);
      setTotalProducts(totalProductsPrev => totalProductsPrev + quantity);
    }
  };

  const removeProduct = (itemId, quantity) => {
    const cartActualized = cart.filter(prod => prod.id !== itemId)
    setCart(cartActualized)
    setTotalProducts(totalProductsPrev => totalProductsPrev - quantity)

  }

  const clearCart = () => {
    setCart([])
    setTotalProducts(0)
    setQuantityAdded(0)
  }

  const inCart = (itemId) => {
    console.log(itemId)
    return cart.some((prod) => prod.id === itemId)
  }

  const handleOnAdd = (quantity, product) => {
    setQuantityAdded(quantity)
    addProduct(product, quantity)
    
  }

  const valorTotal = (quantity, price) => {
    let total = 0;
    if (quantity >= 1) {
      total = (quantity * price)
    }
    return total;
  }

  const totalCart = () => {
    const total = cart.reduce((prev, curr) => prev + valorTotal(curr.quantity, curr.price), 0);
    return total;
  };


  return (
    <div>
      <CartContext.Provider value={{ cart, addProduct, removeProduct, clearCart, totalProducts, handleOnAdd, quantityAdded, setQuantityAdded, valorTotal, totalCart }}>
        {children}
      </CartContext.Provider>
    </div>
  )
}

export { CartContextProvider };
export default CartContext;
