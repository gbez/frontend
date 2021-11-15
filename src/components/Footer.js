import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { toast } from "react-toastify";
import b3 from "../apis/besner-blog-backend";

class Footer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      input: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
      this.setState({
        [e.target.name]: e.target.value,
      });
  }

  async handleSubmit(e){
    e.preventDefault();
    var response = await b3.patch(`/relationship/subscribe/${this.state.input}?newsletters=hiking,general`)
    .then((response) => {toast.success("You are successfully subscribed!");this.setState({input:""})})
    .catch((e) => {console.log(e);});
  }

render(){

 return (
    <div className="footer">
      {/*
      <ul>
        <li>
          <a href="/">
            <FontAwesomeIcon icon="envelope" />
          </a>
        </li>
        <li>
          <a href="/">
            <FontAwesomeIcon icon="calendar-check" />
          </a>
        </li>
        <li>
          <a href="/">
            <FontAwesomeIcon icon={["fab", "spotify"]} />
          </a>
        </li>
        <li>
          <a href="/">
            <FontAwesomeIcon icon="share" />
          </a>
        </li>
      </ul>
      */}
      <p className="copyright">
        &copy; Copyright {new Date().getFullYear()}, GMB
      </p>
    </div>
      
  );
    }
};

export default Footer;
