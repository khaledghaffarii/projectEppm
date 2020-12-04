import React from "react";
import {Link} from "react-router-dom";
const Brand = ({ children }) => {
  return (
    <div className="flex items-center justify-between brand-area">
      <Link to="/dashboard/analytics">
      <div className="flex items-center brand"> 
        <img src="/assets/images/eppm.png" alt="company-logo" />
        <span className="brand__text">EPPM</span>
      </div>
      </Link>
      {children}
    </div>
  );
};

export default Brand;
