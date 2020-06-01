import React, { Component } from "react";
import MainImage from "./MainImage";
import Product from "./Product";
import Describle from "./Describle";
import Ads from "./Ads";

const data = {
  id: 1,
  count: 0,
  title: "Áo thun nam thể thao hàng VNXK vải dày mịn - Vải Đốm",
  products: [
    {
      id: 1,
      price: 20000,
      color: "Black",
      discount: 10,
      url: "images/black.jpg",
      rest: 0,
    },
    {
      id: 2,
      price: 25000,
      color: "Red",
      discount: 12,
      url: "images/red.jpg",
      rest: 1,
    },
    {
      id: 3,
      price: 22000,
      color: "Blue",
      discount: 15,
      url: "images/blue.jpg",
      rest: 2,
    },
  ],
  describle: [
    "Chất liệu: polyester và thun",
    "Thoát mồ hôi tốt",
    "Áo thun cổ tròn thể thao Hiye chuyên được may từ chất liệu nilon thoáng mát",
    "Kết hợp thêm sợi thun tạo độ co giãn giúp người tiêu dùng thoải mái khi mặc",
  ],
};

export default class Main extends Component {
  state = {
    count: 0,
    title: data.title,
    branch: "No Branch",
    products: [],
    productDetail: {},
    describle: data.describle,
    cart: [],
    activeNotify: false,
  };

  componentDidMount() {
    this.getProducts();
  }

  getProducts = () => {
    const tempProducts = [...data.products];
    this.setState({
      products: tempProducts,
      productDetail: tempProducts[0],
    });
  };

  chooseItem = (id) => {
    this.getItem(id);
  };

  getItem = (id) => {
    const tempProducts = [...this.state.products];
    let tempProductDetail = tempProducts.find((item) => item.id === id);
    this.setState({
      productDetail: tempProductDetail,
    });
  };

  addToCart = (id) => {
    let tempItem = this.state.productDetail;
    let tempCart = [...this.state.cart, tempItem];
    let tempCount = this.state.count + 1;
    let tempActive = false;
    if (tempCount > 5) {
      tempActive = true;
    } else {
      tempActive = false;
    }
    this.setState({
      count: tempCount,
      cart: tempCart,
      activeNotify: tempActive,
    });

    // khi hai san pham trung nhau thi tang bien dem cua san pham do len nhu the nao???
  };

  render() {
    console.log(this.state.activeNotify);
    return (
      <div className="wrap__main">
        <div className="content">
          <div className="introduction">
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Adipisci
              illo at porro esse corporis aperiam maiores odio necessitatibus
              sequi ipsam.
            </p>
          </div>
          <div className="cart">
            <span>Giỏ hàng </span>
            <span className="count">({this.state.count})</span>
          </div>
          <div className="product">
            <MainImage productDetail={this.state.productDetail} />
            <Product
              products={this.state.products}
              productDetail={this.state.productDetail}
              chooseItem={this.chooseItem}
              addToCart={this.addToCart}
              title={this.state.title}
              branch={this.state.branch}
            />
            <Ads />
            <Describle describle={this.state.describle} />
          </div>
        </div>
      </div>
    );
  }
}
