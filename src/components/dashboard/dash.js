import React, { Component } from 'react';
import { Image, Button, Header } from 'semantic-ui-react'
import Cheese from "../../images/cheese.png"
import "./dash.css"

export default class DashBoard extends Component {
  render() {
    return (
      <React.Fragment>
        <Header>
          <div>
            <Image centered src={Cheese} size="tiny" />
            <br></br>
            <section className="dashBtn">
            <Button content='Create a New Plate' color="yellow"
          onClick={() => this.props.history.push(`/create`)} />
            </section>
          </div>
        </Header>


        


      </React.Fragment>
    )
  }
}