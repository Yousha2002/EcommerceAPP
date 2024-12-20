import React from 'react'
import { NavLink } from 'react-router-dom'
import "./App.css"
const Footer = () => {
  return (
 <>
    <footer class="text-gray-600 body-font bg-amber-100	">
  <div class="container px-5 py-10 mx-auto flex md:items-center lg:items-start md:flex-row md:flex-nowrap flex-wrap flex-col">
    <div class="w-64 flex-shrink-0 md:mx-0 mx-auto text-center md:text-left">
    <NavLink to={'/'} href="/" className="flex title-font font-medium items-center text-gray-900 mb-0 md:mb-0 cursor-pointer ">
      {/* <svg xmlns="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/Microsoft_Store.svg/1200px-Microsoft_Store.svg" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" className="w-10 h-10 text-white p-2 bg-yellow-500 rounded-full" viewBox="0 0 24 24">
        <path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"></path>
      </svg>
      <span className="ml-3 text-xl uppercase">Yousha-Store</span> */}
      <img className='h-10 ml-12' src='Capture.PNG' alt='i'/>
    </NavLink>
      <p class="mt-2 text-sm text-gray-500">   Discover timeless elegance and modern trends at our clothing
              store. From casual to formal wear, our curated collection caters
              to diverse styles. </p>
    </div>
    <div class="flex-grow flex flex-wrap md:pl-20 -mb-10 md:mt-0 mt-10 md:text-left text-center">
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">Customer Care</h2>
        <nav class="list-none mb-10">
          <li>
            <a  href='/' class="text-gray-600 hover:text-gray-800">Help Center</a>
          </li>
          <li>
            <a  href='/' class="text-gray-600 hover:text-gray-800">Returns & Refunds</a>
          </li>
          <li>
            <a  href='/' class="text-gray-600 hover:text-gray-800">How to Buy</a>
          </li>
          <li>
            <a  href='/' class="text-gray-600 hover:text-gray-800">Purchase Protection</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">collection</h2>
        <nav class="list-none mb-10">
          <li>
            <a  href='/' class="text-gray-600 hover:text-gray-800">Electronic</a>
          </li>
          <li>
            <a  href='/' class="text-gray-600 hover:text-gray-800">Jewelery</a>
          </li>
          <li>
            <a  href='/' class="text-gray-600 hover:text-gray-800">Men Clothing</a>
          </li>
          <li>
            <a href='/' class="text-gray-600 hover:text-gray-800">Woman Clothing</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3 uppercase">HELP</h2>
        <nav class="list-none mb-10">
          <li>
            <a  href='/' class="text-gray-600 hover:text-gray-800">Payment</a>
          </li>
          <li>
            <a  href='/' class="text-gray-600 hover:text-gray-800">Shipping</a>
          </li>
          <li>
            <a  href='/' class="text-gray-600 hover:text-gray-800">FAQ</a>
          </li>
          <li>
            <a  href='/' class="text-gray-600 hover:text-gray-800">Report Infringement</a>
          </li>
        </nav>
      </div>
      <div class="lg:w-1/4 md:w-1/2 w-full px-4">
        <h2 class="title-font font-medium text-gray-900 tracking-widest text-sm mb-3">CONTACT US</h2>
        <nav class="list-none mb-10">
          <li>
            <a  href='/' class="text-gray-600 hover:text-gray-800">smyousha2002@gmail.com</a>
          </li>
          <li>
            <a  href='/' class="text-gray-600 hover:text-gray-800">www.linkedin.com/in/yousha-shakeel</a>
          </li>
          <li>
            <a   href='/' class="text-gray-600 hover:text-gray-800">+923152322865</a>
          </li>
          <li>
            <a  href='/' class="text-gray-600 hover:text-gray-800">Yousha Shakeel</a>
          </li>
        </nav>
      </div>
    </div>
  </div>
  <div class="bg-gray-100">
    <div class="container mx-auto py-4 px-5 flex flex-wrap flex-col sm:flex-row">
      <p class="text-gray-500 text-sm text-center sm:text-left">Copyright 2023 : All rights reserved by @YOUSHA-SHAKEEL
       
      </p>
      <span class="inline-flex sm:ml-auto sm:mt-0 mt-2 justify-center sm:justify-start">
        <a  href='/' class="text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
          </svg>
        </a>
        <a  href='/' class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
          </svg>
        </a>
        <a  href='/' class="ml-3 text-gray-500">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-5 h-5" viewBox="0 0 24 24">
            <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
            <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
          </svg>
        </a>
        <a href='/' class="ml-3 text-gray-500">
          <svg fill="currentColor" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="0" class="w-5 h-5" viewBox="0 0 24 24">
            <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
            <circle cx="4" cy="4" r="2" stroke="none"></circle>
          </svg>
        </a>
      </span>
    </div>
  </div>
</footer>
 </>
  )
}

export default Footer
