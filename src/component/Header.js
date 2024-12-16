import React from 'react'
import { NavLink } from 'react-router-dom'
const navigations=[
  {
    name:'Home',
    path:"/"
  },
  {
    name:'Product',
    path:"/product"
  },
  {
    name:'About',
    path:"/about"
  },
  {
    name:'Contact',
    path:"/contact"
  }
]
const Header = () => {
  return (
    <>
        <header className="text-black-600 body-font bg-amber-100	">
  <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
    <NavLink to={'/'} href="/" className="flex title-font font-medium items-center text-gray-900 mb-0 md:mb-0 cursor-pointer ">
      {/* <svg xmlns="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Microsoft_Store.svg/1200px-Microsoft_Store.svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl uppercase">Yousha-Store</span> */}
      <img className='h-10' src='Capture.PNG' alt='i'/>
    </NavLink>
    
    <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
    {
      navigations.map((navigation)=>{
        return(
          <NavLink  to={navigation.path} className= " mr-5 font-normal hover:font-semibold">{navigation.name}</NavLink>
        )
      })
    }
    </nav>
    <NavLink to="/cart " className="inline-flex items-center bg-yellow-500 border-0 py-1 px-3 focus:outline-none hover:bg-yellow-600 rounded text-white mt-4 md:mt-0">Add to Cart
      <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-4 h-4 ml-1" viewBox="0 0 24 24">
        <path d="M5 12h14M12 5l7 7-7 7"></path>
      </svg>
    </NavLink>
  </div>
</header>
    </>
  )
}

export default Header
