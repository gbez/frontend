import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setRelationship, getRelationship, resetRelationship
} from "../../redux/actions";
import { getSafe } from "../../functions/helpers";
import RingLoader from "react-spinners/RingLoader";

/**
 * Load all distinct newsletters
 * Loop through distinct
 * Create state object of checked newsletters
 * If distinct field is included in user newsletter, checked = true
 * Change checked state on click
 * 
 */

class Unsubscribe extends Component {

  constructor(props) {
    super(props);
    this.state = {
      input: "",
      newsletters: [],
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.loadMyOptions = this.loadMyOptions.bind(this);
    this.handleOptionChange = this.handleOptionChange.bind(this);
    this.addNewsletterItem = this.addNewsletterItem.bind(this);
    this.removeNewsletterItem = this.removeNewsletterItem.bind(this);
    this.handleSubscriptionUpdate = this.handleSubscriptionUpdate.bind(this);
  }

  handleSubscriptionUpdate(e) {
    e.preventDefault();
    var email = this.props.relationship.data[0].email;
    this.props.setRelationship(email, this.state.newsletters.join())
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value,
    });
  }

  handleOptionChange(event) {
    const name = event.target.name;
    const value = event.target.checked;
    if (!value) {
      this.removeNewsletterItem(name);
    } else {
      this.addNewsletterItem(name);
    }
  }

  addNewsletterItem(name) {
    this.setState({ newsletters: [...this.state.newsletters, name] })
  }

  removeNewsletterItem(name) {
    this.setState({
      newsletters: this.state.newsletters.filter((item) => item !== name)
    });
  }

  loadMyOptions() {
    let relationship = this.props.relationship;
    if (relationship !== null && relationship.results == 1) {
      var myNewsletterItems = relationship.data[0].newsletters;
      myNewsletterItems.forEach(item => this.addNewsletterItem(item));
    }
  }

  async handleSubmit(e) {
    e.preventDefault();
    await this.props.getRelationship(`email=${this.state.input}`);
    this.loadMyOptions();
  }

  async componentDidMount() {
    var pathArray = window.location.pathname.split("/");
    if (pathArray.length == 3 && this.props.relationship == null) {
      await this.props.getRelationship(`email=${pathArray[2]}`);
      this.loadMyOptions();
    }
  }

  render() {
    var relationshipObject = getSafe(() => this.props.relationship, []);
    if (relationshipObject == null) {
      return <div>nothing</div>;
    }
    if (relationshipObject.results == 1) {
      var relationship = relationshipObject.data[0];
      var allNewsletterItems = relationshipObject.distinct.newsletters;
      var newsletterOptions = allNewsletterItems.map((newsletter, index) =>
        <div key={index}>
          <input type="checkbox" id={newsletter} name={newsletter} onChange={this.handleOptionChange} checked={this.state.newsletters.includes(newsletter) ? true : false} />
          <label htmlFor={newsletter}>{newsletter}</label>
        </div>
      );

      return <div className="fillerClass">
        <h1>Relationship Exists</h1>
        <form onSubmit={this.handleSubscriptionUpdate}>
          {newsletterOptions}
          <button type="submit">Submit</button>
        </form>
      </div>
    } else {
      return (
        <div className="fillerClass">
          <h1>Input Email</h1>
          <form onSubmit={this.handleSubmit}>
            <input name="input" type="text" onChange={this.handleChange} value={this.state.input} />
            <button type="submit">Submit here</button>
          </form>
        </div>)
    }

  }
}

const mapStateToProps = (state) => {
  return { relationship: state.relationship };
};

export default connect(mapStateToProps, {
  setRelationship, getRelationship, resetRelationship
})(Unsubscribe);
