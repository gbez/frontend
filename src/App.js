// REACT
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Public from "./routing/Public";
import Private from "./routing/Private";
// THIRD PARTY
import { ToastContainer } from "react-toastify";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fab, faSpotify, faGlideG } from "@fortawesome/free-brands-svg-icons";
import {
  faCheckSquare,
  faCoffee,
  faPencilAlt,
  faBook,
  faCode,
  faMusic,
  faSearch,
  faInfo,
  faArrowCircleDown,
  faEnvelope,
  faCalendarCheck,
  faShare,
} from "@fortawesome/free-solid-svg-icons";
// COMPONENTS
import Home from "./components/public/Home";
import Feed from "./components/public/Feed";
import Post from "./components/public/Post";
import Categories from "./components/public/Categories";
import Tags from "./components/public/Tags";
import Unsubscribe from "./components/public/Unsubscribe";
import Search from "./components/public/Search";
import Me from "./components/public/Me";
import Login from "./components/public/Auth/Login";
import ForgotPassword from "./components/public/Auth/ForgotPassword";
import ResetPassword from "./components/public/Auth/ResetPassword";
import Admin from "./components/private/Admin";
// CSS
import "./css/App.css";
import "./css/static/Search.css";
import "./css/static/Home.css";
import "./css/static/Me.css";
import "react-toastify/dist/ReactToastify.css";
import { render } from "@testing-library/react";

// Initialization Functions
library.add(
  fab,
  faCheckSquare,
  faCoffee,
  faPencilAlt,
  faBook,
  faCode,
  faMusic,
  faSearch,
  faInfo,
  faArrowCircleDown,
  faEnvelope,
  faCalendarCheck,
  faSpotify,
  faShare,
  faGlideG
);

class App extends Component {
  render() {
    return (
      <Fragment>
        <ToastContainer
          position="top-center"
          autoClose={3000}
          hideProgressBar={true}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          draggable
        />
        <Router>
          <Switch>
            {/* Blogpost Routes */}
            <Public exact path="/" component={Home} />
            <Public path="/home" component={Home} />
            <Public path="/tags" component={Tags} />
            <Public path="/categories" component={Categories} /> 
            <Public path="/search" component={Search} />
            <Public path="/me" component={Me} />
            <Public exact path="/tag/:name/:page" component={Feed} />
            <Public exact path="/category/:name/:page" component={Feed} />
            <Public exact path="/:year/:month/:day/:slug" component={Post} />
            <Public path="/unsubscribe" component={Unsubscribe} />
            {/* Auth Routes */}
            {/*
            <Public exact path="/forgot-password" component={ForgotPassword} />
            <Public exact path="/reset-password" component={ResetPassword} />
            <Public exact path="/login" component={Login} />
            {/* Private Routes /}
            <Private exact path="/admin" component={Admin} />
            */}
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
