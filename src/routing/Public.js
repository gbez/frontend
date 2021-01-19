import React, { Component, Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Public extends Component {
  render() {
    const Component = this.props.component;
    return (
      <Fragment>
        <Navbar />
        <Component />
        <Footer />
      </Fragment>
    );
  }
}

export default Public;
