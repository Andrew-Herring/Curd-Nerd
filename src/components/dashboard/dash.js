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
          </div>
        </Header>

        <div className="dashBtn">
          <Button fluid content='Start' color="yellow"
          onClick={() => this.props.history.push(`/create`)} />
        </div>

      </React.Fragment>
    )
  }
}