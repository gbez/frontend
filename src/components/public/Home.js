import React, { Component } from "react";

function HomeItem(props) {
  return (
    <div className="home-item">
      <img src={props.img}></img>
      <p>{props.text}</p>
    </div>
  );
}

class Home extends Component {
  render() {
    return (
      <div className="home">
        <h1>This is my home</h1>
        <img
          style={{ width: "100%" }}
          src="https://d6ozfheqtj1tz.cloudfront.net/ChIJS_W93oi42YgRxKDwdPyixN8/5c382c367c0b0.jpg"
        ></img>
        <HomeItem
          img="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
          text="Text"
        />
        <HomeItem
          img="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
          text="Text"
        />
        <HomeItem
          img="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
          text="Text"
        />
        <HomeItem
          img="https://www.talkwalker.com/images/2020/blog-headers/image-analysis.png"
          text="Text"
        />
        <HomeItem img="/logo2.svg" text="Text" />
      </div>
    );
  }
}

export default Home;
