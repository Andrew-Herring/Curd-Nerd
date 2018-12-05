import React, { Component } from "react"
import { Link } from "react-router-dom"
import { Icon, Button } from 'semantic-ui-react'
import Cheese from "../../images/cheese.png"
import "bootstrap/dist/css/bootstrap.min.css"
import "./NavBar.css"

export default class NavBar extends Component {
  render() {
    return (
      <nav className="navbar navbar-light light-blue flex-md-nowrap shadow">
        <ul className="nav nav-pills">

          <li className="nav-item">
            <Link className="nav-link" to="/"><Icon name="clipboard" size="large" />Dashboard</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/"><Icon name="wrench" size="large" />Create</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/"><Icon name="book" size="large" />Library</Link>
          </li>

          <li className="nav-item">
            <Link className="nav-link" to="/"><Icon name="share square" size="large" />Share</Link>
          </li>

          
          

        </ul>
        {/* <p id="navTagline">Welcome to Curd Nerd! <img src={Cheese} alt="Curd Nerd"></img></p> */}
        <div className="logbtn">
        <Button animated onClick={() => {
          document.location.href = 'http://localhost:3000/login'
        }}>
          <Button.Content visible>Login</Button.Content>
          <Button.Content hidden>
            <Icon name='sign-in alternate' />
          </Button.Content>
        </Button>
        <Button animated onClick={() => {
          localStorage.clear("credentials")
          document.location.href = 'http://localhost:3000'
        }}>
          <Button.Content visible>Logout</Button.Content>
          <Button.Content hidden>
            <Icon name='sign-out alternate' />
          </Button.Content>
        </Button>
        </div>      
        </nav>
    )
  }
}
