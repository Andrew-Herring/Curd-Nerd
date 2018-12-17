import React, { Component } from 'react';
import { Image, Header } from 'semantic-ui-react'
import Cheese from "../../images/cheese.png"



export default class Share extends Component {


  render() {

    return(
      <React.Fragment>
      <Header as='h2' textAlign='center'>
          <div>
            <Image centered src={Cheese} size="tiny" />
            <br></br>
            <Header.Content>Share your creations!</Header.Content>
          </div>
          
        </Header>


      </React.Fragment>  )
  }
}