import React, { Component } from "react";
import { connect } from "react-redux";
import { loadPost, resetPost } from "../../../redux/actions";
import { getSafe, filterFeed } from "../../../functions/helpers";
import ProgressBar from "./ProgressBar";
import ScrollDownArrow from "./ScrollDownArrow";
class Post extends Component {
  componentDidMount() {
    this.props.loadPost();
  }

  componentWillUnmount() {
    this.props.resetPost();
  }

  render() {
    var post = getSafe(() => this.props.post.data.data[0], null);
    console.log(post);
    if (post == null) {
      return null;
    }
    return (
      <div className="post">
        <div
          id="header"
          className="header"
          style={{ backgroundImage: `url(${post.thumbnail})` }}
        >
          <div className="darken-header-image"></div>
          <div className="header-text">
            <h1>{post.title}</h1>
            <h3>{post.subtitle}</h3>
            <p>{post.readingTime.text}</p>
          </div>
          <ScrollDownArrow name="main" />
        </div>
        <ProgressBar />
        <div id="main" className="main">
          <div
            id="content"
            className="content"
            dangerouslySetInnerHTML={{ __html: post.content }}
          ></div>
          <p>Date: {post.readableDate}</p>
          <p>
            <span>
              tag(s):{" "}
              {post.tag.map(function (tag, index) {
                return (
                  <span key={`tag_${index}`}>
                    <a href={`/tag/${tag}/1`}>{(index ? ", " : "") + tag}</a>
                  </span>
                );
              })}
            </span>
          </p>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { post: state.post };
};

export default connect(mapStateToProps, { loadPost, resetPost })(Post);
