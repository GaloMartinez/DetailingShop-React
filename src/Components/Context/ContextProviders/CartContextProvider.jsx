import React from 'react'
import CartContext from './CartContext'
import { useState } from 'react'

function CartContextProvider({children}) {

const [cart, setCart] = useState([])
const [totalProductos , setTotalProductos] = useState(0)
const [quantityAdded, setQuantityAdded] = useState(0)

console.log(cart)

const agregarItem = (item, quantity) => {
  if(!estaEnCarrito(item.id)) {
      setCart((cartPrev) => [...cartPrev, {...item, quantity}])
      console.log("Se agrego un " + (item.title) + "al carrito")
      setTotalProductos(totalProductosPrev => totalProductosPrev + quantity)
  } else {
      console.error("El producto ya fue agregado al carrito")
  }
}

const removerItem = (itemId) => {
    const cartActualizado = cart.filter(prod => prod.id !== itemId)
    setCart(cartActualizado)
}

const limpiarCarrito = () => {
    setCart([])
}

const estaEnCarrito = (itemId) => {
    return cart.some((prod) => prod.id === itemId)
}

const handleOnAdd = (quantity) => {
  setQuantityAdded(quantity)
  const item = {
    productId 
  }
  agregarItem(item, quantity)
}

  return (
    <div>
      <CartContext.Provider value={{cart, agregarItem, removerItem, limpiarCarrito, totalProductos, handleOnAdd, quantityAdded, setQuantityAdded}}>
        {children}
      </CartContext.Provider>
    </div>
  )
}

export default CartContextProvider
