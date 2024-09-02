import React from 'react'
import { useDispatch } from 'react-redux';
import { removeCart, QuantityDecrese, QuantityIncrease } from '../21_Store/CartSlice';


const CartRow = ({obj}) => {

let { quantity, data} = obj;
let {thumbnail, rating, price, title, id} = data

let dispatch = useDispatch()

  return (
    <tr className='text-xl'>
    <td>
      <div className="flex items-center gap-3">
        <div className="avatar">
          <div className="mask mask-squircle h-16 w-16">
            <img
              src={thumbnail}
              alt="Avatar Tailwind CSS Component"
              className='w-full h-full bg-white'
               />
          </div>
        </div>
        <div>
          <div className="font-bold">{title}</div>
        </div>
      </div>
    </td>
    <td>
      {rating}
      <br />
    </td>
    <td> $ {price}</td>
    <td> <span onClick={()=> dispatch(QuantityIncrease(id))}>🔼</span> {quantity} <span onClick={()=> dispatch(QuantityDecrese(id))}>🔽</span> </td>
    <th>
      <button className="btn btn-outline btn-error" onClick={()=>dispatch(removeCart(id))}>Remove</button>

    </th>
  </tr>
  )
}

export default CartRow