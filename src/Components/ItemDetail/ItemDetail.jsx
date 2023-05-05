import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import { getItem } from "../Service/service";
import { useContext } from "react";
import CartContext from "../Context/ContextProviders/CartContext";


function ItemDetail({ productId }) {
  const [product, setProduct] = useState(null);



  const {agregarItem, handleOnAdd, quantityAdded, setQuantityAdded} = useContext(CartContext)

 

  useEffect(() => {
    getItem(productId).then((data) => setProduct(data));
  }, [productId]);

  if (!product) {
    return <div>Cargando...</div>;
  }

  
 console.log("Cantidad seleccionada: ", {quantityAdded})
  


  return (
    <div>
      <div className="max-w-sm rounded overflow-hidden shadow-lg mt-16 mb-10 mx-16 ">
        <img className="w-full" src={product.pictureUrl} alt={product.title} />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{product.title}</div>
          <p className="text-gray-700 font-semibold text-base">
            {product.description}
          </p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <p className="text-gray-600 font-medium text-base">
            ${product.price}
          </p>
          {
            quantityAdded > 0 ? (
              <link to='/cart' className='Option'>Terminar Compra</link>
            ) : (
              <ItemCount
              initial={1}
              stock={10}
              onAdd={(quantity) => handleOnAdd(quantity)}
            />
            )
          }
          
        
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;

