import React from 'react'
import { Link } from 'react-router-dom'

function Item({ product, onSelect }) {

  function handleSelect() {
    onSelect(product.id);
  }

  return (
    <div className=" bg-gray-300 max-w-sm rounded overflow-hidden shadow-lg mt-16 mb-10 mx-16 ">
      <img className=" w-full h-[300px]" src={product.pictureUrl} alt={product.title} />
      <div className="px-6 py-4">
        <div className="text-zinc-600 font-bold text-xl mb-2">{product.title}</div>
        <p className="text-gray-700 font-semibold text-base">{product.description}</p>
        <p className="text-gray-600 font-medium text-base mb-2 pt-2">${product.price}</p>
        </div>
      <div className="px-6 pt-0 pb-8  ">
        
        <Link onClick={handleSelect} to={`/item/${product.id}`} className="  mt-6 bg-cyan-900 hover:bg-cyan-950 rounded-sm text-white font-bold py-2 px-4   focus:outline-none focus:shadow-outline">Ver detalles</Link>
       
      </div>
    </div>
  )
}


export default Item
