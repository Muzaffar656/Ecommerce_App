import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import axios from "axios";
import { setProducts } from "./Redux-app/actions/productAction";
import ProductComponents from "./AProductComponents";
import "../components/App.css";
import { Link } from "react-router-dom";

const AProductLisning = () => {
  const products = useSelector((state) => state);
  console.log(products);
  const dispatch = useDispatch();

  const fetchProducts = async () => {

      const response = await axios
      .get(`https://fakestoreapi.com/products`)
      .catch((err) => {
        console.log(err);
      });

    dispatch(setProducts(response.data));
   
  
 
  };

  useEffect(() => {
    fetchProducts();
   
  });

  return (
    <div>
      <div className="home-page">
        <div className="text-section">
          <h1>NEW SEASONS ARRIVALS</h1>
          <h3>CHECK OUT ALL THE TRENDS</h3>
        </div>
      </div>
    <div className="heading">
      <h1>Latest Products</h1>
    </div>
      <div className="buttons">
      <button className="bts btn-primary">All</button>
      <Link to='/mens'>  <button  className="bts btn-primary">Men's Clothing</button> </Link>
      <button  className="bts btn-primary">Women's Clothing</button>
      <button  className="bts btn-primary">Jewelery</button>
      <button  className="bts btn-primary">Electronic</button>
      </div>
      <div className="main-grid" style={{ display: "grid" }}>
        <ProductComponents />
      </div>
    </div>
  );
};

export default AProductLisning;
