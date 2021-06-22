import React, { Component } from "react";
import { connect } from "react-redux";
import { loadFeed } from "../../redux/actions";
import { getSafe, searchFeed } from "../../functions/helpers";
import RingLoader from "react-spinners/RingLoader";
import { css } from "@emotion/core";

const override = css`
  display: block;
  margin: 0 auto;
  border-color: red;
`;

function SearchResult(props) {
  return (
    <div className="search-result">
      <a href={props.url}>
        <p>{props.date}</p>
        <h5>{props.title}</h5>
      </a>
    </div>
  );
}

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
    this.props.loadFeed("/blogpost");
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
    if (feed.length < 1) {
      return (
        <div className="loader-container">
          <RingLoader css={override} color={"#ee388d"} size={100} />
        </div>
      );
    } else {
      return (
        <div className="search">
          <input
            name="input"
            type="text"
            placeholder="Input search"
            value={this.state.input}
            onChange={this.handleChange}
          />
          {this.state.input.length > 0 && (
            <p className="align-center buffer">
              {results.length} result(s) found for "{this.state.input}"
            </p>
          )}
          {results.length > 0 && <h3>Results</h3>}
          <div className="results">
            {results.map((item) => {
              return (
                <SearchResult
                  url={item.url}
                  date={item.readableDate}
                  title={item.title}
                />
              );
            })}
          </div>

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
}
const mapStateToProps = (state) => {
  return { feed: state.feed };
};

export default connect(mapStateToProps, {
  loadFeed,
})(Search);
