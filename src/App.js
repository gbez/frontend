// REACT
import React, { Component, Fragment } from "react";
import { BrowserRouter as Router, Switch } from "react-router-dom";
import Public from "./routing/Public";
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
import Search from "./components/public/Search";
import Me from "./components/public/Me";

// CSS
import "./css/App.css";
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
            <Public exact path="/" component={Home} />
            <Public path="/home" component={Home} />
            <Public path="/tags" component={Tags} />
            <Public path="/categories" component={Categories} />
            <Public path="/search" component={Search} />
            <Public path="/me" component={Me} />
            <Public exact path="/tag/:name/:page" component={Feed} />
            <Public exact path="/category/:name/:page" component={Feed} />
            <Public exact path="/:year/:month/:day/:slug" component={Post} />
          </Switch>
        </Router>
      </Fragment>
    );
  }
}

export default App;
