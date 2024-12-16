import React, { useEffect, useState } from 'react'
import Hero from '../component/Hero'
import Product from '../component/Product'
import Features from '../component/Features'
import Statcard from '../component/Statcard'
import Categories from '../component/Categories'
import Contact from '../component/Contact'
import About from '../component/About'

import { ScaleLoader } from 'react-spinners'

const Home = () => {

    const [product,setProduct] = useState([])
    useEffect(()=>{
      const fetchProduct = async()=>{
        const res =await fetch('https://fakestoreapi.com/products?limit=12')
        const data =await res.json()
        console.log(data)
        setProduct(data)
      }
      fetchProduct()
    },[])
  return (
    <>
      <Hero/>
      <div className="flex flex-col text-center w-full mb-2">
      <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">CATEGORIES</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">All Product Categories</h1>
    </div>
      <Categories/>
      <div className="flex flex-col text-center w-full mb-2">
      <h2 className="text-xs text-yellow-500 tracking-widest font-medium title-font mb-1">PRODUCT</h2>
      <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">Most Trending Now</h1>
    </div>
    {
        product.length > 0 ?
        <Product  product={product}/>:<ScaleLoader
  color="rgba(214, 174, 54, 1)"
  height={50}
/>
    }
    <Product/>
      <Features/>
     <Statcard/>
     <Contact/>
     <About/>
    </>
  )
}

export default Home
