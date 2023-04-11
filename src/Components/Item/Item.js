import React from 'react'

function Item({product}) {
  
  
  
  
    return (
     

<div className="max-w-md mx-auto bg-white rounded-xl shadow-md overflow-hidden md:max-w-2xl">
  <div className="md:flex">
    <div className="md:flex-shrink-0">
      <img className="h-32 w-full object-cover md:w-32" src={product.pictureUrl} alt={product.title} />
    </div>
    <div className="p-8">
      <div className="uppercase tracking-wide text-sm text-indigo-500 font-semibold">Título</div>
      <a href="#" className="block mt-1 text-lg leading-tight font-medium text-black hover:underline">Texto</a>
      <p className="mt-2 text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis ut purus eleifend, ullamcorper lacus ut, ultricies velit.</p>
    </div>
  </div>
</div>

    

  )
}

export default Item
