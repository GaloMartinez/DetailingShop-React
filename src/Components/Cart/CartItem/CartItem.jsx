import React from 'react'
import useCart from '../../../hooks/useCart'

function CartItem({ product }) {
  const { cart, removeProduct, valorTotal } = useCart()
  console.log(cart)

  const total = valorTotal(product.quantity, product.price)

  return (
    <div className="bg-white rounded-lg shadow-md p-4 border-2 border-gray-300">
      <img className="float-left w-32 h-28 mr-5" src={product.pictureUrl} alt={product.title} />
      <div className="font-bold text-lg mb-2">{product.title}</div>
      <div className="text-gray-700 text-base mb-2">
        Cantidad: {product.quantity}
      </div>
      <div className="text-gray-700 text-base mb-2">
        Valor total: ${total}
      </div>
      <div className="flex justify-end">
        <button
          className="bg-red-500 hover:bg-red-600 text-white font-bold py-2 px-4 rounded"
          onClick={() => removeProduct(product.id, product.quantity)}
        >
          Quitar producto
        </button>
      </div>
    </div>
  );
}

export default CartItem
