import React, { Component } from 'react';
import { Image, Card, Button, Icon, Header } from 'semantic-ui-react'
import Cheese from "../../images/cheese.png"

export default class CreatePage extends Component {

  
  state = {
    people: "",
    choices: "",
  }
  
  
  
  
  render() {
    return (
      <React.Fragment>
      <Header>
          <div>
            <Image centered src={Cheese} size="tiny" />
          </div>
        </Header>

      



      </React.Fragment>
    )
}
}