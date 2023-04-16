import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { GetItem } from '../Service/service';
import { useParams } from 'react-router-dom';

function ItemDetailContainer() {
  const [product, setProduct] = useState({})
  const { itemId } = useParams()

  useEffect(() => {
    async function fetchDataItem() {

      const item = await GetItem(itemId)
      console.log(item);
      setProduct(item);
    }

    fetchDataItem()

  }, [itemId]);

  // CONTINUAR 

  return (
    <div>
    {product ? (<ItemDetail
        product={product}

      />
      ) : (
        <p>Cargando...</p>
      )}

    </div>
  )
}

export default ItemDetailContainer

