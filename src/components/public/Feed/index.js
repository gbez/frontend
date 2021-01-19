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

class Feed extends Component {
  componentDidMount() {
    const path = window.location.pathname;
    const pageNumber = Number(path.substring(path.lastIndexOf("/") + 1));
    this.props.setPage(pageNumber);
    this.props.loadFeed();
  }

  componentWillUnmount() {
    this.props.resetPage();
    this.props.resetFeed();
  }

  render() {
    var feed = getSafe(() => this.props.feed.data.data, []);
    return (
      <div className="feed">
        {feed.map((item) => {
          return <FeedItem item={item} />;
        })}
      </div>
    );
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
