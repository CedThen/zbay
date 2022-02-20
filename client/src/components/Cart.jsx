import { useSelector, useDispatch } from "react-redux"
import useCustomNavigate from "../hooks/useCustomNavigate"
import { routeNames } from "./constants"

const Cart = () => {
  const { isLoggedIn, products, user: { cart } } = useSelector(state => state)
  const navLogin = useCustomNavigate(routeNames.LOGIN)
  const navRegister = useCustomNavigate(routeNames.REGISTER)
  console.log('products, cart', products, cart)
  function LoginWarning() {
    return (
      <div className="m-5 p-5 border">Please
        <span className="text-blue-400 cursor-pointer" onClick={navLogin}> Login </span>
        or
        <span className="text-blue-400 cursor-pointer" onClick={navRegister}> Register </span>
        to view your cart</div>
    )
  }

  function CartRows() {
    return Object.keys(cart).map(itemId => {
      const { image, title, price } = products.find(product => product.id === parseInt(itemId))
      return (
        <div className="w-full h-48 flex flex-row border">
          <img src={image} alt='' />
          <div>{title}</div>
          <div>Quantity: {cart[itemId]}</div>
          <div>{price}</div>
        </div>
      )
    })
  }

  return (
    <div className="w-full flex flex-col border-box mt-16">
      <h1 className="text-4xl mb-5">Cart</h1>
      {
        !isLoggedIn ? <LoginWarning />
          : (
            <>
              <div >
                <CartRows />
              </div>
              <div>
                <button>Check Out</button>
              </div>
            </>
          )
      }
    </div >
  )
}


export default Cart