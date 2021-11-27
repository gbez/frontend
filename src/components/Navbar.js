import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

class Navbar extends Component {
  render() {
    return (
      <div className="navbar">
        <nav>
          <a id="logo" href="/">
            <img
              alt="logo"
              src="https://firebasestorage.googleapis.com/v0/b/besner-blog.appspot.com/o/images%2FLogo.svg?alt=media&token=af0ff0ee-8888-4e63-a5be-d5f7be9a5e75
"
            />
          </a>
          <ul>
            <li>
              <a href="/category/journal/1">
                <FontAwesomeIcon icon="pencil-alt" />
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
              <a href="/category/library/1">
                <FontAwesomeIcon icon="book" />
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
