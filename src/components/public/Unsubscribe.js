import React, { Component } from "react";
import { connect } from "react-redux";
import {
  setRelationship, getRelationship, resetRelationship
} from "../../redux/actions";
import RingLoader from "react-spinners/RingLoader";


class Unsubscribe extends Component {

    componentDidMount(){
        var pathArray = window.location.pathname.split("/");
        if(pathArray.length == 3){
            this.props.getRelationship(`?_id=${pathArray[2]}`);
        }
    }
//Get Relationship either from the URL params OR prompt user to input email
//Display a form with all Subscriptions and filled in radio buttons with Relationship subscriptions
//Button to unsubscribe
//Upon form submit, toast success message
//redirect to home screen


            //this.props.getRelationship(`?email=${pathArray[2]}`);

  render() {
    if(this.props.relationship){
        return <div className="fillerClass"><h1>Relationship Exists</h1></div>
    }
    return <div className="fillerClass"><h1>Input Email</h1></div>;
  }
}

const mapStateToProps = (state) => {
    return { relationship: state.relationship };
  };
  
  export default connect(mapStateToProps, {
    setRelationship, getRelationship, resetRelationship
  })(Unsubscribe);
  