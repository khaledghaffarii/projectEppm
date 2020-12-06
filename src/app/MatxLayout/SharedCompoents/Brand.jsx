import React from "react";
import {Link} from "react-router-dom";
const Brand = ({ children }) => {
  return (
    <div className="flex items-center justify-between brand-area ">
      <Link to="/dashboard/analytics">
      {/* <div className="flex items-center brand ml-3" style={{ maxWidth:'100%'}}> 
        <img src="/assets/images/eppm.jpeg" alt="company-logo" />
      </div> */}
      <b className="ml-3" style={{ 'fontWeight':'bold','fontSize':'3em','color':'#ea0022' }}>EPPM</b>
      </Link>
      {children}
    </div>
  );
};

export default Brand;
