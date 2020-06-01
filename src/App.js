import React, { Component } from "react";
import "./App.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";

export default class App extends Component {
  render() {
    return (
      <div className="app">
        <Header />
        <Main state={this.state} />
        <Footer />
      </div>
    );
  }
}
