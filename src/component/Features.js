import React from 'react'
import { NavLink } from 'react-router-dom'

const Features = ({cards=[]}) => {
  return (
    <>
        <section className="text-gray-600 body-font   ">
  <div className="container px-1 py-1 mx-auto  ">
    
    <div className="flex flex-wrap -m-4">
    {
      cards?.map((card)=>{
        return(
          <NavLink to={`/categories/${card}`} className="p-4 md:w-1/3 cursor-pointer">
        <div className="flex rounded-lg h-full bg-gray-100 p-8 flex-col">
          <div className="flex items-center mb-3">
            <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-yellow-500 text-white flex-shrink-0">
              <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
              </svg>
            </div>
            <h2 className="text-gray-900 text-lg title-font font-medium capitalize">{card ||'Example card'}</h2>
          </div>
          <div className="flex-grow">
            <p className="leading-relaxed text-base">Discover timeless elegance and modern trends at our clothing
              store.</p>
            <a href='/' className="mt-3 text-yellow-500 inline-flex items-center"><NavLink to={`/categories/${card}`} className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              All Product

              </NavLink>
              
            </a>
          </div>
        </div>
      </NavLink>
        )
      })
    }
     
    
    </div>
  </div>
</section>
    </>
  )
}

export default Features
