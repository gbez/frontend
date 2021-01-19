import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class ScrollDownArrow extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    var el = document.getElementById(this.props.name);
    el.scrollIntoView({ behavior: "smooth", block: "start" });
  }

  render() {
    return (
      <div className="icon-scroll">
        <a onClick={this.handleClick}>
          <FontAwesomeIcon icon="arrow-circle-down" />
        </a>
      </div>
    );
  }
}

export default ScrollDownArrow;
