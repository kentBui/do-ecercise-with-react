import React from "react";

export default function Product({
  products,
  productDetail,
  chooseItem,
  title,
  branch,
  addToCart,
}) {
  const mount = Math.floor(
    (productDetail.price * productDetail.discount) / 100
  );
  const price = productDetail.price - mount;
  return (
    <div className="product__info">
      <h3 className="title">{title}</h3>
      <p className="branch">
        <span>Thương hiệu: </span>
        {branch}
      </p>
      <p className="rest">
        <span>Còn lại:</span> {productDetail.rest} Sản phẩm
      </p>
      <p className="price">{price} ₫</p>
      <p className="old-price">
        <span className="line-through">{productDetail.price} ₫</span>
        <span className="discount">{productDetail.discount} %</span>
      </p>
      <hr />
      <p className="color">
        <span>Màu sắc: </span> {productDetail.color}
      </p>
      <ul className="choose-image ">
        {products.map((item) => (
          <li
            key={item.id}
            className="choose-item"
            onClick={() => chooseItem(item.id)}
          >
            <img src={item.url} alt="" />
          </li>
        ))}
      </ul>
      <button className="add-cart" onClick={() => addToCart(productDetail.id)}>
        Add to cart
      </button>
    </div>
  );
}
