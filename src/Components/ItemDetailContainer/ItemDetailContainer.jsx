import React from 'react'
import { useState, useEffect } from 'react'
import ItemDetail from '../ItemDetail/ItemDetail';
import { GetItem } from '../Service/service';
import { useParams } from 'react-router-dom';


function ItemDetailContainer({itemId}) {
  const [product, setProduct] = useState({})
  const { itemId } = useParams()

  useEffect(() => {
  
    async function fetchDataItem() {

      const item = await GetItem(itemId)
      setProduct(item);
    }

    fetchDataItem()

  }, [itemId]);

  // CONTINUAR 

  return (
    <div>
      {productId ? <ItemDetail productId={productId} /> : null}
    </div>
  );
}

export default ItemDetailContainer


