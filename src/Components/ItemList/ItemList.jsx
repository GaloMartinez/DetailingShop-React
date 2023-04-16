import { useEffect, useState } from "react";
import Item from "../Item/Item";
import ItemDetail from "../ItemDetail/ItemDetail";
import { GetProducts } from "../Service/service";
import { useParams } from "react-router-dom";


function ItemList() {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [products, setProducts] = useState([])
  const { categoryId } = useParams()

  useEffect(() => {
    async function fetchData() {
      const data = await GetProducts(categoryId);
      setProducts(data);
    }
    fetchData();
  }, [categoryId]);

  function handleSelectProduct(productId) {
    setSelectedProductId(productId);
  }

  if (selectedProductId) {
    return <ItemDetail productId={selectedProductId} />;
  }


  return (
    <div>
      {products &&
        products.map((product) => (
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









