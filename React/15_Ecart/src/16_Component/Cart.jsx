import React from 'react'
import CartRow from './CartRow'
import { useSelector, useDispatch } from 'react-redux'
import { clearCart } from '../21_Store/CartSlice'
// import { ThemeStore } from './ThemeContext'

const Cart = () => {

  let cartData = useSelector((store) => store.cart.cart)

  let dispatch = useDispatch()

  // let { theme } = useContext(ThemeStore)


  // let darkTheme = "overflow-x-auto ml-10"
  // let lightTheme = "bg-gray-400 w-96 shadow-xl m-4 text-black"


  return (
    <div className="overflow-x-auto ml-10">                         {/*theme == "light" ? lightTheme : darkTheme}>*/}
      <table className="table">

        <thead>
          <tr className='text-2xl'>
            <th>Image</th>
            <th> <span>🔼</span> Rating <span> 🔽 </span></th>
            <th>Price</th>
            <th>Quantity</th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          {
            cartData.map((cartObj)=> <CartRow obj={cartObj}></CartRow>)
          }

        </tbody>

      </table>
      <button className="btn btn-block btn-outline btn-error" onClick={()=> dispatch(clearCart())}>Clear Cart</button>
    </div>
  )
}

export default Cart