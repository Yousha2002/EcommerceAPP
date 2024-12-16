import React from 'react'
import Header from './component/Header'
import Home from './modules/Home'
import Footer from './component/Footer'
import { BrowserRouter,Routes,Route } from 'react-router-dom'
import Pro from './modules/Pro'
import Allproduct from './modules/Allproduct'
import CategoriesProduct from './component/CategoriesProduct'
import Cart from './component/Cart'
import Contact from './component/Contact'
import About from './component/About'
const App = () => {
  return (
    <>
    <BrowserRouter>
    <Header/>
    <Routes>
<Route  path="/" element={<Home/>} />
<Route  path="/product/:id" element={<Pro/>} />
<Route  path="/product" element={<Allproduct/>} />
<Route  path="/categories/:name" element={<CategoriesProduct/>} />
<Route  path="/cart" element={<Cart/>} />
<Route  path="/contact" element={<Contact/>} />
<Route  path="/about" element={<About/>} />
    </Routes>
    <Footer/>
    </BrowserRouter>
    </>
  )
}

export default App

