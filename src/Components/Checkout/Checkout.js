import { writeBatch, getDocs, query, where, collection, addDoc, Timestamp, documentId } from "firebase/firestore"
import { useState } from 'react';
import useCart from '../../hooks/useCart'
import { db } from "../Service/firebase/firebaseConfig";
import CheckoutForm from '../CheckoutForm/CheckoutForm';
import CartItem from "../Cart/CartItem/CartItem";



const Checkout = () => {
    const [loading, setLoading] = useState(false)
    const [orderId, setOrderId] = useState("")

    const { cart, clearCart, totalCart } = useCart();

    const createOrder = async ({ name, phone, email }) => {
        setLoading(true)
        try {
            const objOrder = {
                buyer: {
                    name, phone, email
                },

                items: cart,
                total: totalCart(),
                date: Timestamp.fromDate(new Date())
            }
            console.log(totalCart)

            const batch = writeBatch(db)

            const outOfStock = []

            const ids = cart.map(prod => prod.id)
            const productsRef = collection(db, 'products')

            const productsAddedFromFirestore = await getDocs(query(productsRef, where(documentId(), 'in', ids)))

            const { docs } = productsAddedFromFirestore

            docs.forEach(doc => {
                const dataDoc = doc.data()
                const stockDb = dataDoc.stockDb

                const productAddedToCart = cart.find(prod => prod.id === doc.id)
                const prodQuantity = productAddedToCart?.quantity

                if (stockDb >= prodQuantity) {
                    batch.update(doc.ref, { stock: stockDb - prodQuantity })
                } else {
                    outOfStock.push({ id: doc.id, ...dataDoc })
                }
            })
            if (outOfStock.length === 0) {
                await batch.commit()

                const orderRef = collection(db, 'orders')

                const orderAdded = await addDoc(orderRef, objOrder)

                setOrderId(orderAdded.id)
                clearCart()
            } else {
                console.error("Hay productos que estan fuera de stock")
            }
        } catch (error) {
            console.log(error)
        } finally {
            setLoading(false)
        }
    }
    if (loading) {
        return <h1 className="font-bold text-2xl flex justify-center">Se esta generando su orden...</h1>
    }
    if (orderId) {
        return <h1 className="font-bold text-2xl flex justify-center">El id de su orden es: {orderId}</h1>
    }
    return (
        <div>
        
      {cart.map((product) => (<CartItem key={product.id} product={product} />))}
      <h1 className="text-lg font-bold uppercase  mt-5 text-center">Total de la compra: ${totalCart()}</h1>
    
            <CheckoutForm onConfirm={createOrder}  />
            
        </div>
    )

}
export default Checkout