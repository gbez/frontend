import React, { Component, Fragment } from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

class Public extends Component {
  render() {
    const Component = this.props.component;
    return (
      <Fragment>
        <div className="wrapper">
          <div className="wrapper-content">
            <Navbar />
            <Component />
          </div>
        </div>
        <Footer />
      </Fragment>
    );
  }
}

export default Public;
