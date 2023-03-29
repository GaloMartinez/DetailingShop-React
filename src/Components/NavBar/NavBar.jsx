import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
function NavBar() {
  return (
    <nav className="flex-grow justify-center ">
      <h1 className='text-4xl font-bold uppercase  mt-5 text-center'>Detailing Shop</h1>
      <ul className=' bg-cyan-900 flex justify-center items-center mt-3 '>

        <li className="mr-6"><button className=' bg-cyan-900  px-4 py-2  border rounded-md border-x-zinc-500 font-semibold text-white hover:bg-sky-900  '>Shampoo y Ceras</button></li>
        <li className="mr-6"><button className='  bg-cyan-900 px-4 py-2  border rounded-md border-x-zinc-500 font-semibold text-white hover:bg-sky-900 '>Siliconas y Acondicionadores</button></li>
        <li className="mr-6"><button className='  bg-cyan-900 px-4 py-2  border rounded-md border-x-zinc-500 font-semibold text-white hover:bg-sky-900 '>Cepillos y Microfibras</button></li>
        <li className=" mr-6 "><CartWidget /></li>
      </ul>

    </nav>

  )
}

export default NavBar
