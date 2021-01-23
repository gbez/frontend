import React, { Component } from "react";

const image1 =
  "https://upload.wikimedia.org/wikipedia/en/3/39/Avatar_world_map.jpg";
const image2 =
  "https://base.imgix.net/files/base/ebm/industryweek/image/2019/05/industryweek_33743_future_city_80s_style.png?auto=format&fit=crop&h=432&w=768";
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
        <img src={image1}></img>
        <HomeItem img={image2} text="Text" />
        <HomeItem img="" text="Text" />
        <HomeItem img="" text="Text" />
        <HomeItem img="" text="Text" />
        <HomeItem img="" text="Text" />
      </div>
    );
  }
}

export default Home;
