import React from "react";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";

function ItemDetailContainer() {
  const { itemId } = useParams();



  return <>
  <div className="flex justify-center items-center h-screen">
    {itemId && <ItemDetail itemId={itemId} />}
    </div>
    </>;
}

export default ItemDetailContainer;

