import React, { useEffect, useState } from "react";
import Features from "./Features";
import { ScaleLoader } from "react-spinners";

const Categories = () => {
  const [catagories, setCatagories] = useState([]);
  useEffect(() => {
    const fetchCatagories = async () => {
      const res = await fetch("https://fakestoreapi.com/products/categories");
      const data = await res.json();
      console.log(data);
      setCatagories(data);
    };
    fetchCatagories();
  }, []);
  if (catagories.length === 0)
    return <ScaleLoader color="rgba(214, 174, 54, 1)" height={50} />;
  return (
    <div>
      <Features cards={catagories} />
    </div>
  );
};

export default Categories;
