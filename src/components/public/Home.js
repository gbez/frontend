import React, { Component } from "react";

function HomeItem(props) {
  return (
    <div className="home-item">
      <img alt="home-item-img" src={props.img}></img>
      <p>{props.text}</p>
    </div>
  );
}

class Home extends Component {
  render() {
    return (
      <div className="home">
        <br />
        <br />
        <br />
        <h1>i am grant. this is my website.</h1>
        <h2>
          i write <a href="/category/journal/1">prose</a> and{" "}
          <a href="/category/repository/1">code</a>.
        </h2>
        <h3>
          i also play <a href="/category/auditorium/1">piano...</a>
        </h3>
        <h4>
          and <a href="/category/library/1">read.</a>
        </h4>
        <p>
          <em>
            Sometimes, I go on <a href="/category/tag/adventure">adventures.</a>
          </em>
        </p>
      </div>
    );
  }
}

export default Home;
