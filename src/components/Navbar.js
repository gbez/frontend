import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav>
          <a id="logo" href="/">
            <img src="/logo.svg" />
          </a>
          <ul>
            <li>
              <a href="/category/journal/1">
                <FontAwesomeIcon icon="pencil-alt" />
              </a>
            </li>
            <li>
              <a href="/category/library/1">
                <FontAwesomeIcon icon="book" />
              </a>
            </li>
            <li>
              <a href="/category/repository/1">
                <FontAwesomeIcon icon="code" />
              </a>
            </li>
            <li>
              <a href="/category/auditorium/1">
                <FontAwesomeIcon icon="music" />
              </a>
            </li>
            <li>
              <a href="/me" me>
                <FontAwesomeIcon icon="info" />
              </a>
            </li>
            <li>
              <a href="/search">
                <FontAwesomeIcon icon="search" />
              </a>
            </li>
          </ul>
        </nav>
      </div>
    );
  }
}

export default Navbar;
