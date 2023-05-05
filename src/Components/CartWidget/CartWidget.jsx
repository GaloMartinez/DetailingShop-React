
import { useContext } from 'react'
import CartContext from '../Context/ContextProviders/CartContext'
import cartImage from './assets/cartImage.svg'
function CartWidget() {
  const {cart, limpiarCarrito, totalProductos } = useContext (CartContext)
  

  const handleLimpiarCarrito = () => {
    limpiarCarrito()
  }
  console.log("Productos en el carrito: ", cart);
  return (
    <div className="fixed right-5 top-20 ">
      <div className="flex items-center ">
        <img src={cartImage} alt="cart-widget" />
       <p>{totalProductos}</p>

      </div>
    </div>
  )
}

export default CartWidget
