import React, { Component } from "react";
import { connect } from "react-redux";
import { Redirect } from "react-router-dom";
import decoded from "jwt-decode";
import { restoreUser } from "../redux/actions";

function isExpired(token) {
  var decodedToken = decoded(token, { complete: true });
  var now = new Date();
  if (decodedToken.exp * 1000 < now.getTime()) {
    localStorage.removeItem("token");
    return true;
  } else {
    return false;
  }
}

class Private extends Component {
  render() {
    const Component = this.props.component;
    const token = localStorage.getItem("token");
    var isAuthenticated = false;
    if (token) {
      if (!isExpired(token)) {
        isAuthenticated = true;
        this.props.restoreUser();
      }
    }
    return isAuthenticated ? (
      <div className="page">
        <Component />
      </div>
    ) : (
      <Redirect
        to={{ pathname: "/login", state: { from: window.location.pathname } }}
      />
    );
  }
}

export default connect(null, { restoreUser })(Private);
