import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { GetItem } from '../Service/service';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const { itemId } = useParams()
  const [product, setProduct] = useState(null)
  return (
    <div> <ItemDetail productId={itemId}  /> </div>
  );
}

export default ItemDetailContainer

