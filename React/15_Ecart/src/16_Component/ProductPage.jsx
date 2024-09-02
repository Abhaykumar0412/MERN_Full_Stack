import { useContext, useState } from 'react'
import { useParams } from 'react-router-dom'
import { ThemeStore } from './ThemeContext';
import useProductData from '../useProductData';
import Comment from './Comment';
import { useDispatch, useSelector } from "react-redux"
import { addCart } from '../21_Store/CartSlice';


const ProductPage = () => {
  const { id } = useParams();

  const [openIdx, setOpenIdx] = useState(null);

  let cartData = useSelector((store) => store.cart.cart)
  let inCart = () => {
    let idx = cartData.findIndex((cartObj) => {
      return cartObj.data.id == id;
    })
    if (idx === -1) {
      return false;
    } else {
      return true
    }
  }

  let data = useProductData(id)

  let dispatch = useDispatch()


  const { theme, setTheme } = useContext(ThemeStore)



  if (data == null) {
    return <div>.......loading</div>
  }

  let { thumbnail, title, price, category, rating, brand, reviews } = data;

  // let handleAddCart = (event) => {
  //   event.stopPropagation()
  //   console.log("Adding to Cart")
  // }

  return (
    <div className='w-screen h-screen relative'>
      {inCart() == true ? < div className='bg-orange-500 rounded-2xl absolute z-30 text-black p-3 font-bold left top'>Added to cart</div>: null}      
      <div className={theme == "light" ? "card card-side bg-slate-300 text-black shadow-xl" : "card card-side bg-dark shadow-xl"}>
        <figure>
          <img
            src={thumbnail}
            alt="Movie" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          {/* <p>Click the button to watch on Jetflix app.</p> */}
          <p>Category {category}</p>
          <p>Price ${price}</p>
          <p>Raring {rating}</p>
          <div className="card-actions justify-end">
            <button className="btn btn-primary" onClick={() => dispatch(addCart(data))}>Add to Cart</button>
          </div>
        </div>
      </div>
        <div className='bg-white w-3/4 h-1/2 mx-auto my-2'>
          {
            reviews.map((review, idx) => {
              return <Comment key={idx} review={review} openIdx={openIdx} setOpenIdx={setOpenIdx} idx={idx}></Comment>
            })
          }
        </div>
    </div >
  )
}

export default ProductPage