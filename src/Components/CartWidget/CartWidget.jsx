
import cartImage from './assets/cartImage.svg'
import { Link } from 'react-router-dom'
import useCart from '../../hooks/useCart'
function CartWidget() {
  const { totalProducts} = useCart();



  return (
    <div className=" top-0 right-0 mr-10 ">

      <Link to="/cart" className="CartWidget" >
        <div className="flex items-center ">
          <img src={cartImage} alt="cart-widget" />
          <p>{totalProducts}</p>
        </div>
      </Link>

    </div>
  )
}

export default CartWidget
