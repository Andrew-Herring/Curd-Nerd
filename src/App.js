import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import IsAuth from "./components/Authentication/IsAuth"
import DataManager from './module/DataManager'
import Dash from "./welcome/dash"





export default class AppViews extends Component {
  isAuthenticated = () => localStorage.getItem("credentials") !== null


  state ={ 
    activeUser: this.isAuthenticated()
  }
 
  setAuth = () => {
    this.setState({ auth: this.isAuthenticated() })
  }
  render() {
    console.log(this.activeUser())
    return <React.Fragment>
      <IsAuth isAuthenticated={this.isAuthenticated} setAuth={this.setAuth} />
    </React.Fragment>
  }
  
}