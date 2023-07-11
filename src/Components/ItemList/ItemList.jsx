import { useEffect, useState } from "react";
import Item from "../Item/Item";
import ItemDetail from "../ItemDetail/ItemDetail";
import { useParams } from "react-router-dom";
import { getDocs, collection, query, where, orderBy } from "firebase/firestore"
import { db } from "../Service/firebase/firebaseConfig";

function ItemList() {
  const [selectedProductId, setSelectedProductId] = useState(null);
  const [products, setProducts] = useState([]);
  const { categoryId } = useParams();
  useEffect(() => {
    const collectionRef = categoryId
      ? query(collection(db, 'productos'), where('type', '==', categoryId))
      : query(collection(db, 'productos'), orderBy("type", "asc"))

    getDocs(collectionRef)
      .then(response => {
        const productsAdapted = response.docs.map(doc => {

          const data = doc.data()
       
          return { id: doc.id, ...data }
        })
        setProducts(productsAdapted)
      
      })
      .catch(error => {
        console.log(error)
      })

  }, [categoryId]);

  function handleSelectProduct(itemId) {
  
    setSelectedProductId(itemId);
  }

  return (
    <>
      {selectedProductId ? (
        <ItemDetail itemId={selectedProductId} />
      ) : (
        products &&
        products.map((product) => (
          <Item
            key={product.id}
            product={product}
            onSelect={handleSelectProduct}
          />
        ))
      )}
    </>
  );
}

export default ItemList;










