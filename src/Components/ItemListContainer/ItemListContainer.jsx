import React from 'react'

function ItemListContainer({ greeting }) {
  return (
    <div>
      <h1 className="text-2xl font-bold camelCase  mt-5 text-center">{greeting}</h1>
    </div>
  )
}

export default ItemListContainer
