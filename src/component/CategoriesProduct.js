import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Product from './Product'
import { ScaleLoader } from 'react-spinners'
const CategoriesProduct = () => {
    const {name} = useParams()
    const [product,setProduct] = useState([])
    useEffect(()=>{
      const fetchProduct = async()=>{
        const res =await fetch(`https://fakestoreapi.com/products/category/${name}`)
        const data =await res.json()
        console.log(data)
        setProduct(data)
      }
      fetchProduct()
    },[name])
    if (product.length === 0) return <ScaleLoader
    color="rgba(214, 174, 54, 1)"
    height={50}
  />;


  return (
    <Product product={product}/>
  )
}

export default CategoriesProduct
