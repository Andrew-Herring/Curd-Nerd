import React, { Component } from "react"
import AppViews from "./AppViews"
import NavBar from "./nav/NavBar"
import Login from "./login/Login"

import "./CurdNerd.css"
import "bootstrap/dist/css/bootstrap.min.css"


export default class  extends Component {
  render() {
    return <React.Fragment>
        <NavBar {...this.props} />
        <AppViews {...this.props} />
      </React.Fragment>
  }
}