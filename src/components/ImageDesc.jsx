import React from "react";
import "./imagedesc.css";

function ImageDesc() {
  return (
    <div className="image-text">
      <img
        className="image-text-img"
        src="https://theme-taste-demo.myshopify.com/cdn/shop/files/Screenshot_2022-01-18_at_1.49.34_PM_1070x_1070x_e5f771b3-b41d-4f09-9d1a-ae510790a180.png?v=1645059972&width=750"
        alt="image"
      />
      <div className="image-text-desc">
        <h2>Take a sip</h2>
        <p>
          Sweet, tart, and oh-so-refreshing, our low-sugar, probiotic lemonades
          taste like summer in a bottle.
        </p>
        <a href="#">Click Here</a>
      </div>
    </div>
  );
}

export default ImageDesc;
