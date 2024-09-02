import React, { useEffect, useState, useContext } from 'react'
import Card from './Card.jsx';
import ShimmerUI from './ShimmerUI.jsx';
import { ThemeStore } from './ThemeContext.jsx';
import AddedCartCard from './AddedCartCard.jsx';
import { useSelector } from 'react-redux';
// import useProductData from '../useProductData.jsx';



const Home = () => {
  const [allproducts, setAllProducts] = useState(null);
  const [products, setProducts] = useState(null);
  const [query, setQuery] = useState("")


  const {theme, setTheme} = useContext(ThemeStore)

  let cartItems = useSelector((store) => store.cart.cart)


  let handleTopRated = () => {
    let filteredData = allproducts.filter((obj) => {
      return obj.rating > 4;
    })
    setProducts(filteredData);
  }


  let handleCategory = (category) => {
    let filteredData = allproducts.filter((obj) => {
      return obj.category == category;
    })
    setProducts(filteredData);
  }

  let handleSearch = () => {
    let filteredData = allproducts.filter((obj) => {
      return obj.title.toLowerCase().includes(query.toLowerCase().trim());
    })
    setProducts(filteredData);
    setQuery("")
  }



  // let data = useProductData()

  let getdata = async () => {
    let data = await fetch('https://dummyjson.com/products');
    let productData = await data.json();
    setAllProducts(productData.products);
    setProducts(productData.products);
  }
  useEffect(() => {
    getdata();
  }, [])

  let AddedCart = AddedCartCard(Card)
  let inCart = (id)=>{
    let idx = cartItems.findIndex((cartObj)=> cartObj.data.id == id)

    if (idx == -1)return false
    return true
  }

  return (

    <div className= {theme == "light" ? "bg-slate-300" : "bg-dark"}>
    
      <div className='flex justify-around items-center w-full h-16'>

        <button onClick={handleTopRated} className="btn btn-active btn-accent">Top Rated</button>
        <button onClick={() => { handleCategory("furniture") }} className="btn btn-active btn-accent">Furniture</button>

        <div className='search flex justify-around items-center w-1/5'>
          <input value={query} onChange={(e) => {
            setQuery(e.target.value)
          }} type="text" placeholder="Type here" className="input input-bordered w-full max-w-xs" />
          <button className="btn btn-outline btn-error m-2" onClick={handleSearch}>Search</button>
        </div>

        <button onClick={() => { handleCategory("groceries") }} className="btn btn-active btn-accent">Grocery</button>
        <button onClick={() => { handleCategory("beauty") }} className="btn btn-active btn-accent">Beauty</button>

      </div>
      <div className='flex justify-around flex-wrap '>

        {
          products == null ? <ShimmerUI></ShimmerUI> :
            products.map((obj, idx) => {
              return inCart(obj.id) == true ? <AddedCart key={obj.id} productobj={obj}></AddedCart> : <Card key={obj.id} productobj={obj}></Card>
            })
        }
      </div>
    </div>
  )
}

export default Home