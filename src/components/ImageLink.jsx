import React from "react";
import "./imagelink.css";

function ImageLink() {
  return (
    <div className="section">
      <div className="image-link">
        <img
          src="https://theme-taste-demo.myshopify.com/cdn/shop/files/Screenshot_2022-02-03_at_10.42.58_AM_710x_e3fa5623-0910-43f1-add9-cbac5b27ed41.png?v=1645126391&width=710"
          alt="image"
        />
        <a href="#">Category</a>
      </div>
    </div>
  );
}

export default ImageLink;
