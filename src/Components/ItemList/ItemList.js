import { useEffect, useState } from "react";
import Item from "../Item/Item";
function ItemList() {
    const [products, setProducts] = useState([])
  
    useEffect(()=>{
      async function fetchData(){
        const data = await GetProducts();
        setProducts(data);
        
      }
      fetchData()
      
      
    },[]);

return (
    <div>
       {products.map((product)=> (
      <Item key={product.id} product={product}/>
     ))}
    </div>
  )
}

export default ItemList

const products = [
    {id:'Shampoo1', title:'Primer shampoo', description: 'verde', price: '$800', pictureUrl:"img/Shampoo01.jpeg"},
    {id:'Shampoo2', title:'Segundo shampoo', description: 'verde', price: '$800', pictureUrl:"img/Shampoo01.jpeg"},
    {id:'Shampoo3', title:'Tercer shampoo', description: 'verde', price: '$800', pictureUrl:"img/Shampoo01.jpeg"},
]

export function GetProducts(){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(products)
        }, 2000)
    })
}
    
   

  




