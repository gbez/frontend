import React, { Component } from "react";

class ProgressBar extends Component {
  constructor(props) {
    super(props);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount = () => {
    window.addEventListener("scroll", this.handleScroll);
  };

  componentWillUnmount = () => {
    window.removeEventListener("scroll", this.handleScroll);
  };

  handleScroll = (e) => {
    var bar = document.getElementById("progress-bar");
    var main = document.getElementById("main");
    var headerHeight = document.getElementById("header").offsetHeight;
    var postHeight = main.offsetHeight - headerHeight;
    var currentHeight = document.documentElement.scrollTop - headerHeight;
    var percentage = currentHeight / postHeight;
    if (percentage > 0) {
      bar.style.display = "block";
      bar.style.width = `${percentage * window.innerWidth}px`;
    } else if (percentage < 0) {
      bar.style.display = "none";
    }
  };

  render() {
    return <div id="progress-bar" className="progress-bar"></div>;
  }
}

export default ProgressBar;
