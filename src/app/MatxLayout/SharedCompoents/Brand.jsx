import React from "react";
import {Link} from "react-router-dom";
const Brand = ({ children }) => {
  return (
    <div className="flex items-center justify-between brand-area">
      <Link to="/dashboard/analytics">
      <b className="ml-3" ></b>
      </Link>
     
      {children}
      
    </div>
  );
};

export default Brand;
