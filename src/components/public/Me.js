import React from "react";

function Me() {
  return (
    <div className="vertical-center">
      <div className="me">
        <div className="image">
          <img alt="me" src="https://i.postimg.cc/c6ytFPQW/peter.jpg"></img>
        </div>
        <div className="text">
          <h2>I am the Jewish looking 20-something in the Hawaiian Shirt.</h2>
          <h2>Peter is a waiter at a Dim Sum restaurant in Miami.</h2>
          <h2>We are often mistaken for one another.</h2>
          <div className="list-wrapper">
            <div className="list">
              <h2>I enjoy:</h2>
              <ul>
                <li>Hawaiian Shirts</li>
                <li>Speaking Foreign Languages</li>
                <li>Learning about the World</li>
                <li>Cocka-Poos</li>
                <li>Pretzels</li>
              </ul>
            </div>
            <div className="list">
              <h2>I believe in:</h2>
              <ul>
                <li>Metaphysical Determinism</li>
                <li>Democratic Socialism</li>
                <li>Jewish Ritual Practice</li>
                <li>The healing power of laughter</li>
                <li>Pretzels</li>
              </ul>
            </div>
            <div className="list">
              <h2>I am currently:</h2>
              <ul>
                <li>Teaching 8th Grade English</li>
                <li>Training for a 6 week hike</li>
                <li>Playing Chopin</li>
                <li>Reading David Foster Wallace</li>
                <li>a Pretzel</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Me;
