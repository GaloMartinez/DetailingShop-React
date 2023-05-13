import React from 'react'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'


function NavBar() {


  return (
    <>
    
    <nav className="h-32 max-h-16 mt-16 flex items-center bg-cyan-900">

    <div className="">
      <Link to={"/"} className="text-white">
        <h1 className="text-2xl font-bold uppercase mt-0 ml-6">Detailing Shop</h1>
      </Link>
    </div>

    <div className="flex  mx-auto  pr-36 text-lg">

      <div className="mx-2">
        <Link to={"/category/shampoo"} className="bg-cyan-900 px-4 py-2 rounded-sm border-x-zinc-500 font-semibold text-white hover:bg-sky-900 flex items-center justify-center">
          Shampoo
        </Link>
      </div>

      <div className="mx-2">
        <Link to={"/category/ceras"} className="bg-cyan-900 px-4 py-2 rounded-sm border-x-zinc-500 font-semibold text-white hover:bg-sky-900 h-full flex items-center justify-center">
          Ceras
        </Link>
      </div>

      <div className="mx-2">
        <Link to={"/category/microfibras"} className="bg-cyan-900 px-4 py-2 rounded-sm border-x-zinc-500 font-semibold text-white hover:bg-sky-900 h-full flex items-center justify-center">
          Microfibras
        </Link>
      </div>


    </div>
    
    <div className="">
        <CartWidget />
      </div>

  </nav>
  
  
  </>


  )
}

export default NavBar
