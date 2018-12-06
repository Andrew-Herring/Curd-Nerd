import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';


export default IsAuth extends Component {
  activeUser() {
    return sessionStorage.getItem("credentials")
  }
}