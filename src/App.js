import React, { Component } from 'react';
import IsAuth from "./components/Authentication/IsAuth"
import "./App.css"




export default class App extends Component {
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null


  state ={ 
    activeUser: this.isAuthenticated()
  }
 
  setAuth = () => {
    this.setState({ auth: this.isAuthenticated() })
  }
  render() {
    // console.log(this.activeUser())
    return <React.Fragment>
      <IsAuth isAuthenticated={this.isAuthenticated} setAuth={this.setAuth} />
    </React.Fragment>
  }
  
}