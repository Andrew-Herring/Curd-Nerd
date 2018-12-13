import React, { Component } from 'react';
import { Image, Button, Header, Card, Icon } from 'semantic-ui-react'
import Cheese from "../../images/cheese.png"



export default class Library extends Component {




  render() {

    return(
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