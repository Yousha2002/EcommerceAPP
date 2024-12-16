import React from "react";
import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <>
      <section className="text-gray-600 body-font ">
        <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
          <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-bold text-gray-900 uppercase">
              New Season Arrivals
              <br className="hidden lg:inline-block" />
              Slimfit and comfort
            </h1>
            <p className="mb-6 leading-relaxed">
              Discover timeless elegance and modern trends at our clothing
              store. From casual to formal wear, our curated collection caters
              to diverse styles. Immerse yourself in quality fabrics, impeccable
              fits, and exceptional customer service. Elevate your wardrobe with
              our fashion-forward selections that inspire confidence and reflect
              individuality.
            </p>
            <div className="flex justify-center">
              <NavLink to='/product' className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg">
              Categories

              </NavLink>
              <NavLink to='/product' className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-500 hover:text-white rounded text-lg">
                Shop Now
                
              </NavLink>
            </div>
          </div>
          <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
            <img
              className="object-cover object-center rounded"
              alt="hero"
              src="https://images.pexels.com/photos/6214476/pexels-photo-6214476.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            />
          </div>
        </div>
      </section>
    </>
  );
};

export default Hero;
