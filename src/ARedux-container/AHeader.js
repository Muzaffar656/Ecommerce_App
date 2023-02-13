import React from "react";
import "../components/App.css";
import { Link } from "react-router-dom";
const AHeader = () => {
  return (
    <div className="header">
      <nav>
        <div className="icon">
          <h2> FakeShop </h2>
        </div>
        <ul>
        <Link style={{textDecoration:"none"}} to='/'>  <li>Home</li>  </Link>  
        
        <Link style={{textDecoration:"none"}} to='/product'> <li>Products</li> </Link>  
        </ul>
      </nav>
    </div>
  );
};

export default AHeader;
