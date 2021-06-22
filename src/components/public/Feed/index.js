import React, { Component } from "react";
import { connect } from "react-redux";
import {
  loadFeed,
  resetFeed,
  setPage,
  resetPage,
  nextPage,
  prevPage,
} from "../../../redux/actions";
import { getSafe, filterFeed } from "../../../functions/helpers";
import FeedItem from "./FeedItem";
import { css } from "@emotion/core";
import RingLoader from "react-spinners/RingLoader";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

class Feed extends Component {
  componentDidMount() {
    const path = window.location.pathname;
    const pageNumber = Number(path.substring(path.lastIndexOf("/") + 1));
    this.props.setPage(pageNumber);
    this.props.loadFeed("/blogpost");
  }

  componentWillUnmount() {
    this.props.resetPage();
    this.props.resetFeed();
  }

  render() {
    var feed = getSafe(() => this.props.feed.data.data, []);
    let feedDisplay;
    if (feed.length > 0) {
      feedDisplay = feed.map((item) => {
        return <FeedItem item={item} />;
      });
    } else {
      feedDisplay = <RingLoader css={override} color={"#ee388d"} size={100} />;
    }
    return <div className="feed">{feedDisplay}</div>;
  }
}

const mapStateToProps = (state) => {
  return { feed: state.feed };
};

export default connect(mapStateToProps, {
  loadFeed,
  resetFeed,
  setPage,
  resetPage,
  nextPage,
  prevPage,
})(Feed);
