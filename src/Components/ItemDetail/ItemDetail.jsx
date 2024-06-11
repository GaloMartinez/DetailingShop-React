import React from "react";
import ItemCount from "../ItemCount/ItemCount";
import { useEffect, useState } from "react";
import useCart from "../../hooks/useCart";
import { getDoc, doc, } from "firebase/firestore"
import { db } from "../Service/firebase/firebaseConfig";

function ItemDetail({ itemId }) {
  const [product, setProduct] = useState(null);
  const { handleOnAdd, quantityAdded } = useCart();

  useEffect(() => {
    if (itemId) {

      const docRef = doc(db, "productos", itemId)

      getDoc(docRef)
        .then(response => {
          const data = response.data()
          const productAdapted = { id: response.id, ...data }
          setProduct(productAdapted)
        })
        .catch(error => {
          console.log(error)
        })
    }
  }, [itemId]);

  if (!product) {
    return <div>Cargando...</div>;
  }


  console.log("Cantidad seleccionada: ", quantityAdded, product)



  return (
    <>
      <div className=" bg-gray-300 max-w-sm rounded overflow-hidden shadow-lg mt-16 mb-10 mx-16 ">
        <img className="w-full" src={product.pictureUrl} alt={product.title} />
        <div className="px-6 py-4">
          <div className="text-zinc-600 font-bold text-xl mb-2">{product.title}</div>
          <p className="text-gray-700 font-semibold text-base">{product.description}</p>
          <p className="text-gray-600 font-bold text-base mb-2 pt-2">${product.price}</p>
        </div>
        <div className="px-6 pt-0 pb-9">
        <ItemCount
            initial={1}
            stock={10}
            onAdd={(quantity) => handleOnAdd(quantity, product)}
          />
        </div>
      </div>
    </>
  );
}

export default ItemDetail;

