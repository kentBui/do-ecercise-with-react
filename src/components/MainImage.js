import React from "react";

export default function MainImage({ productDetail }) {
  return (
    <div className="product__image">
      <div className="image">
        <img src={productDetail.url} alt="" />
      </div>
    </div>
  );
}
