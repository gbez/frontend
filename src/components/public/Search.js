import React, { Component } from "react";
import { connect } from "react-redux";
import { loadFeed } from "../../redux/actions";
import { getSafe, searchFeed } from "../../functions/helpers";
import RingLoader from "react-spinners/RingLoader";

class Search extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  componentDidMount() {
    //Pass "/" to query override window name in action.js
    this.props.loadFeed("/");
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  render() {
    var feed = getSafe(() => this.props.feed.data.data, []);
    var results = searchFeed(feed, `${this.state.input}`);
    var tags = getSafe(() => this.props.feed.data.distinct.tag, []);
    console.log(feed);
    console.log(tags);
    console.log("results" + results);
    return (
      <div className="search">
        <input
          name="input"
          type="text"
          value={this.state.input}
          onChange={this.handleChange}
        />
        <p>
          {results.length} result(s) found for "{this.state.input}"
        </p>
        {results.map((item) => {
          return (
            <div className="search-result-item">
              <p>{item.readableDate}</p>
              <p>{item.title}</p>
            </div>
          );
        })}
        <h3>Tags</h3>
        <ul>
          {tags.map((item) => {
            return (
              <li>
                <a href={`/tag/${item}/1`}>{item}</a>
              </li>
            );
          })}
        </ul>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  return { feed: state.feed };
};

export default connect(mapStateToProps, {
  loadFeed,
})(Search);
