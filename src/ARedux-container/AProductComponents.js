import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import "../components/App.css";
const AProductComponents = () => {
  const products = useSelector((state) => state.allProducts.products);
 
  const renderList = products.map((product) => {
    const { id, title,price,image } = product;
    return (
      <div key={id}>
  
      <div key={id} className="main">
        <Link to={`/product/${id}`}>
          <div className="cards">
            <div className="img">
              <img src={image}  alt="img" height={"120px"} />
            </div>
            <div className="content">
              <div>
                <h2>{title.substring(0,10)}</h2>
              
              </div>
             <div> 
                <h5 className="price">$ {price}</h5>
              </div>
             <div>
              <button className="btn-buy">Buy Now</button>
             </div>
            </div>
          </div>
        </Link>
      </div>
      </div>
    );
  });
  return <> {renderList} </>;
};

export default AProductComponents;
