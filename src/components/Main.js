import React, { Component } from "react";
import MainImage from "./MainImage";
import Product from "./Product";
import Describle from "./Describle";
import Ads from "./Ads";
import { data } from "../Data";

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
    inCart: false,
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
    if (tempProductDetail.rest > 0) {
      this.setState({
        inCart: false,
      });
    } else {
      this.setState({
        inCart: true,
      });
    }
    this.setState({
      productDetail: tempProductDetail,
    });
  };

  addToCart = (id) => {
    let tempItem = this.state.productDetail;

    let tempActive = false;

    let tempCart;

    if (tempItem.rest < 1) {
      this.setState({
        inCart: true,
      });
      return;
    }
    // khi nhấn add thì số lượng sản phẩm còn lại giảm nhưng khi về 0 thì chưa kích hoạt incart ngay.
    // mình phải click thêm 1 lần thì mới chuyển trạng thái

    let tempCount = this.state.count + 1;

    if (this.state.cart.indexOf(tempItem) === -1) {
      tempItem.productCount += 1;
      tempItem.rest -= 1;
      tempCart = [...this.state.cart, tempItem];
    } else {
      tempItem.productCount += 1;
      tempItem.rest -= 1;
      tempCart = [...this.state.cart];
    }

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
    // chua check so  luong con lại, nếu không còn thì ko add cart được!!! ==> ok
    // khi hai san pham trung nhau thi tang bien dem cua san pham do len nhu the nao??? ==> ok
  };

  clearCart = () => {
    console.log("clear");
    this.setState({
      count: 0,
      inCart: false,
    });
  };
  // giúp mình hướng giải quyết thằng clearCart được không? làm sao để chuyển trả productCount về rest.

  render() {
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
              inCart={this.state.inCart}
              clearCart={this.clearCart}
            />
            <Ads />
            <Describle describle={this.state.describle} />
          </div>
        </div>
      </div>
    );
  }
}
