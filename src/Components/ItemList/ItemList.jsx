import { useEffect, useState } from "react";
import Item from "../Item/Item";
import ItemDetail from "../ItemDetail/ItemDetail";
import { GetProductFilter, GetProducts } from "../Service/service";
import { useParams } from "react-router-dom";
import ItemDetailContainer from "../ItemDetailContainer/ItemDetailContainer";


function ItemList() {
  
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

  

  useEffect(() => {
    async function fetchData() {
      if (categoryId !== undefined) {
        const data = await GetProductFilter(categoryId);
        setProducts(data);
      } else {
        const data = await GetProducts();
        setProducts(data);
      }
    }

    fetchData();
  }, [categoryId]);

  function handleSelectProduct(productId) {
    setSelectedProductId(productId);
  }

  return (
    <div>
      {
         products
          && products.map((product) => (
            <Item
              key={product.id}
              product={product}
              onSelect={handleSelectProduct}
            />
          ))}
    </div>
  )
}

export default ItemList









