import React from "react";
import ItemList from "../ItemList/ItemList";

function ItemListContainer({ greeting }) {
  return (
    <>
      <h1 className="text-2xl font-bold camelCase  mt-5 text-center">
        {greeting}
      </h1>
      <div className="grid grid-cols-3 gap-10 ms-20 ">
      <ItemList />
      </div>
    </>
  );
}

export default ItemListContainer;

