import React, { Component } from 'react';
import CurdNerd from "../CurdNerd"
import Login from "./Login"


export default class IsAuth extends Component {
  activeUser() {
    return sessionStorage.getItem("credentials")
  }

  render() {
    return (
      <React.Fragment>
      {this.props.isAuthenticated() ? (
        <CurdNerd activeUser={this.activeUser} {...this.props} />
      ) : (
        <Login {...this.props} />



      )}
      </React.Fragment>
    )
    }
  }
  
