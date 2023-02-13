import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import { selectedProducts } from "./Redux-app/actions/productAction";
import '../components/App.css'
const AProductDetail = () => {
  const product = useSelector((state) => state.product);
  const {title,price,image,description,category}=product
  const dispatch = useDispatch();
  const { productId } = useParams();
  const fetchProductDetails = async () => {
    const response = await axios
      .get(`https://fakestoreapi.com/products/${productId}`)
      .catch((err) => {
        console.log(err);
      });
    dispatch(selectedProducts(response.data));
  };
  useEffect(() => {
    fetchProductDetails();
  });

  return (
    <div className="detail-grid">
    <img src={image} alt="imgs"  height={"120px"} />
    <div className="product-content">

    <h1>{title}</h1>
    <h3>{category}</h3>
      <h2>$ {price}</h2>
      <h6>{description}</h6>
      <button className="btn">Buy Now</button>
    </div>
    </div>
  );
};

export default AProductDetail;
