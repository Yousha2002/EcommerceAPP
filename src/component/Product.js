import React from "react";
import { NavLink } from "react-router-dom";
const Product = ({ product = [] }) => {
  return (
    <section className="text-gray-600 body-font  " >
      <div className="container py-12 px-20 pb-0 ">
        <div className="flex flex-wrap -m-4">
          {product.map((product) => {
            console.log(product, "product");
            const { id, title, price, category, image, } = product;
            return (
              <NavLink
                to={`/product/${id}`}
                key={id}
                className="lg:w-1/3 md:w-1/2 p-4 w-full border border-opacity-50 mb-4 cursor-pointer"
              >
                <a
                  href="/"
                  className="block relative h-48 rounded overflow-hidden"
                >
                  <img
                    alt={title}
                    className="object-contain object-center w-full h-full block"
                    src={image}
                  />
                </a>
                <div className="mt-4">
                  <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1 uppercase">
                    {category}
                  </h3>
                  <h2 className="text-gray-900 title-font text-lg font-medium">
                    {title}
                  </h2>
                  <p className="mt-1 font-bold	">PKR {price}</p>
                </div>
                <div className="mt-4">
                  <NavLink
                    to={`/product/${id}`}
                    key={id}
                    className="inline-flex text-white bg-yellow-500 border-0 py-2 px-6 focus:outline-none hover:bg-yellow-600 rounded text-lg"
                  >
                    Buy Now
                  </NavLink>
                </div>
              </NavLink>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Product;
