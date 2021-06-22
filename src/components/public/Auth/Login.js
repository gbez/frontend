import React, { Component } from "react";
import { connect } from "react-redux";
import { login } from "../../../redux/actions";
import { withRouter } from "react-router";
import { Redirect } from "react-router-dom";

class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      username: "",
      password: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.onFormSubmit = this.onFormSubmit.bind(this);
  }

  handleChange(e) {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  }

  onFormSubmit(e) {
    e.preventDefault();
    let loginObject = new Object();
    loginObject.email = this.state.username;
    loginObject.password = this.state.password;
    this.props.login(loginObject);
  }

  render() {
    //If there is a user, go to the previous URL
    console.log(this.props.location.state.from);
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>
          Username:
          <input
            type="text"
            name="username"
            value={this.state.username}
            onChange={this.handleChange}
          />
        </label>
        <label>
          Password:
          <input
            type="text"
            name="password"
            value={this.state.password}
            onChange={this.handleChange}
          />
        </label>
        <button type="submit">Submit Form</button>
      </form>
    );
  }
}

const mapStateToProps = (state) => {
  return { user: state.user };
};
export default connect(mapStateToProps, { login })(Login);
