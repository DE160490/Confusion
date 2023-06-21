import React, { Component } from "react";
// import { Routes, Route, Navigate, useParams } from "react-router-dom";
import Header from "./HeaderComponent";
import Footer from "./FooterComponent";
import Home from "./HomeComponent";

class Main extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="Website">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default Main;
