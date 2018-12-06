import React, { Component } from "react"
import { Button, Form, Grid, Header, Image, Message, Segment } from 'semantic-ui-react'
import Cheese from "../../images/cheese.png"
import "./Login.css"

export default class Login extends Component {

  // Set initial state
  state = {
    email: "",
    password: ""
  }

  // Update state whenever an input field is edited
  handleFieldChange = (evt) => {
    const stateToChange = {}
    stateToChange[evt.target.id] = evt.target.value
    this.setState(stateToChange)
  }
  // Simplistic handler for login submit
  handleLogin = (e) => {
    e.preventDefault()
    const newUser = {
      email: this.state.email,
      password: this.state.password
    }

    /*
        For now, just store the email and password that
        the customer enters into local storage.
    */
    if (this.state.rememberCheckBox) {
      localStorage.setItem(
        "credentials",
        JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })

      );
    } else {
      sessionStorage.setItem(
        "credentials",
        JSON.stringify({
          email: this.state.email,
          password: this.state.password
        })
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
                <Form.Input onChange={this.handleFieldChange} type="email"
                  id="email"
                  placeholder="Email address"
                  required=' ' autoFocus="" fluid icon='mail' iconPosition='left' />
                <Form.Input
                  onChange={this.handleFieldChange} type="password"
                  id="password"
                  placeholder="Password"
                  required=""
                  fluid
                  icon='lock'
                  iconPosition='left'
                  type='password'
                />

                <Button type="submit" className="btn btn-primary" color="yellow" fluid size='large'>
                  Login
                </Button>
              </Segment>
            </Form>
            <Message>
             Did You Know:
             <br></br>
              <p>There is no such thing as orange milk.</p>
            </Message>
          </Grid.Column>
        </Grid>
      </div>
    )
  }
}