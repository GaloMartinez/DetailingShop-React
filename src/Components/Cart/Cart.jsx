import React from 'react'
import { Link } from 'react-router-dom'
import CartItem from './CartItem/CartItem'
import useCart from '../../hooks/useCart'


function Cart() {

  const { cart, clearCart, totalProducts, totalCart } = useCart();

  if (totalProducts === 0) {
    return (
      <div className="">
        <h1 className="text-xl font-bold flex items-center justify-center mt-10">No hay productos en el carrito</h1>
        <Link to="/" className=""></Link>
      </div>
    )

  }

  return (
    <>
      <h1 className='text-2xl font-bold uppercase  mt-5 text-center'>Carrito de compras</h1>
      {cart.map((product) => (<CartItem key={product.id} product={product} />))}
      <h1 className="text-lg font-bold uppercase  mt-5 text-center">Total de la compra: ${totalCart()}</h1>
      <div className=" justify-center flex mx-auto space-x-2">
        <Link to="/checkout" className="Checkout">
          <button className="  bg-green-700 hover:bg-green-600 text-white font-bold py-2 px-9 rounded">
            CheckOut
          </button>
        </Link>
        <button className="  bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded" onClick={clearCart}>
          Limpiar Carrito
        </button>
      </div>
    </>
  )
}

export default Cart
