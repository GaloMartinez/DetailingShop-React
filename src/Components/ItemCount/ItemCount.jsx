import React from 'react'
import { useState } from 'react'


function ItemCount({ stock, initial, onAdd }) {
    const [quantity, setQuantity] = useState(initial)

    function Agregar() {
        if (quantity < stock) {
            setQuantity(quantity + 1)
        }

    }

    function Quitar() {
        if (quantity > 1) {
            setQuantity(quantity - 1)           
        }
    }



    return (
        <div className='Counter'>
          <div className='flex justify-center items-center mt-2 py-4 px-10'>
              <button className='bg-cyan-900  hover:bg-cyan-950  rounded-sm font-semibold text-white  py-3 text-3xl w-16' onClick={Quitar}>-</button>
          
              <h4 className='text-5xl mx-4'>{quantity}</h4>
       
              <button className='bg-cyan-900  hover:bg-cyan-950  rounded-sm font-semibold text-white py-3 text-3xl w-16' onClick={Agregar}>+</button>
           
          </div>
          <div className="flex justify-center items-center mt-3">
            <button className=' bg-cyan-900 hover:bg-cyan-950 rounded-sm p-3 font-semibold text-white uppercase' onClick={() => onAdd(quantity)} disabled={!stock}>
              Agregar al carrito
            </button>
          </div>
        </div>
      )
      
    }    

export default ItemCount

