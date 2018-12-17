import React, { Component } from 'react';
import { Image, Button, Header, Card, Icon } from 'semantic-ui-react'
import Cheese from "../../images/cheese.png"



export default class Share extends Component {


  render() {

    return(
      <React.Fragment>
      <Header>
          <div>
            <Image centered src={Cheese} size="tiny" />
          </div>
        </Header>

      <h2>Share - Under Construction</h2>

      </React.Fragment>  )
  }
}