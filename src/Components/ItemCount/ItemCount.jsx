import React from 'react'
import { useState, useContext } from 'react'
import CartContext from '../Context/ContextProviders/CartContext'

function ItemCount({ stock, initial, }) {
    const [quantity, setQuantity] = useState(initial)
    const { removerItem, handleOnAdd } = useContext(CartContext)

    function Agregar() {
        if (quantity < stock) {
            setQuantity(quantity + 1)
            console.log("hola me sume")
        }

    }

    function Quitar() {
        if (quantity > 1) {
            setQuantity(quantity - 1)
            console.log("hola me reste")
        }
    }


    const handleRemoverItem = (itemId) => {
        removerItem(itemId)
    }




    return (
        <div className='Counter'>
            <ul className='flex justify-center items-center mt-3 py-20 px-28'>
                <li className='w-1/2'>
                    <button className='bg-cyan-900 rounded-md  font-semibold text-white hover:bg-sky-900 px-4 py-3 text-5xl' onClick={Quitar}>-</button>
                </li>
                <h4 className='Number'>{quantity}</h4>
                <li>
                    <button className='bg-cyan-900 rounded-md font-semibold text-white hover:bg-sky-900 px-4 py-3 text-5xl' onClick={Agregar}>+</button>
                </li>
            </ul>
            <div className="flex justify-center items-center mt-3">
                <button className='bg-slate-500 p-3 rounded-md font-semibold text-white uppercase' onClick={() => handleOnAdd(quantity)} disabled={!stock}>
                    Agregar al carrito
                </button>
                <button className="ml-3 bg-red-500 p-3 rounded-md font-semibold text-white uppercase" onClick={() => handleRemoverItem(1)}>
                    Remover Item
                </button>

            </div>
        </div>
    )
}

export default ItemCount

