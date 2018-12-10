import React, { Component } from "react"
import { Button, Form, Grid, Header, Image, Segment, Divider, Message } from 'semantic-ui-react'
import Cheese from "../../images/cheese.png"
import cheeseBank from "../module/CheeseManager"
import "./Login.css"

export default class Login extends Component {

  state = {
    password: "",
    username: ""
  }

  handleFieldChange = evt => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }

  handleRegister = e => {
    e.preventDefault()
    const newUser = {
      username: this.state.username,
      password: this.state.password
    }
    if (!this.state.username || !this.state.password) {
      alert("Fill out dem forms")
    } else if (this.state.username || this.state.password) {
      cheeseBank.searchUsername(this.state.username).then(users => {
        if (users.length) {
          alert(`username ${this.state.username} already exits!`)
        } else if (!users.length) {
          cheeseBank.add("users", newUser).then(user =>{
            sessionStorage.setItem("credentials", parseInt(user.id))
            this.props.setAuth()
          }
          )
        }
      })
    }
  }

  handleLogin = e => {
    e.preventDefault()
    if (!this.state.username || !this.state.password) {
      alert("You thought")
    } else if (this.state.username || this.state.password) {
      cheeseBank.searchNP(this.state.username, this.state.password).then(
        user => {
          if (!user.length) {
            alert("Forgot your information? Shame.")
          } else if (user.length) {
            sessionStorage.setItem("credentials", parseInt(user[0].id))
            this.props.setAuth()
          }
        }
      )
    }
  }


  render() {
    return (
      <div className='login-form'>
        <style>{`
body > div,
body > div > div,
body > div > div > div.login-form {
  height: 100%;
}
`}</style>
        <Grid textAlign='center' style={{ height: '100%' }} verticalAlign='middle'>
          <Grid.Column style={{ maxWidth: 450 }}>
            <Header color='yellow' textAlign='center' size="huge">
              Welcome to Curd Nerd!
            </Header>
            <Image src={Cheese} size='small' className="cheeseIcon" />
            <br></br>
            <Form size='large' onSubmit={this.handleLogin}>
              <Segment stacked>
                <Form.Input onChange={this.handleFieldChange} type="username"
                  id="username"
                  placeholder="Username"
                  required=' ' autoFocus="" fluid icon='mail' iconPosition='left' />
                <Form.Input
                  onChange={this.handleFieldChange} type="password"
                  id="password"
                  placeholder="Password"
                  required=""
                  fluid
                  icon='lock'
                  iconPosition='left'
                />

                <Button type="submit" className="btn btn-primary" color="yellow" fluid size='large' onClick={this.handleLogin}>
                  Login
                </Button>
                <Divider horizontal>Or</Divider>                
                <Button type="submit" className="btn btn-primary" color="yellow" fluid size='large' onClick={this.handleRegister}>
                  Register
                </Button>
              </Segment>

                 <Message onClick={this.handleRegister}>
                 Did You Know?
                 <br></br>
                The art of cheese making is 7500+ years old!
                </Message>
            </Form>
            
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}

         