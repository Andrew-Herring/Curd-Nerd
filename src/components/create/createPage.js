import React, { Component } from 'react';
import { Image, Header, Dropdown } from 'semantic-ui-react'
import cheeseBank from '../module/CheeseManager'
import Cheese from "../../images/cheese.png"
import "./create.css"

export default class CreatePage extends Component {

  state = {
    cheeseNames: [],
  }
  
  componentDidMount() {
  cheeseBank.getCheese("cheeses")
  .then(cheeses => {
    this.setState({cheeseNames:cheeses})
  })
  }
  render() {

    // const cheeses = this.props.cheeses.find(a => a.id === parseInt(this.props.match.params.cheeseId)) || {}


    return (
      <React.Fragment>
      <Header>
          <div>
            <Image centered src={Cheese} size="tiny" />
          </div>
        </Header>
        
      <div className="cheeseDrop1">
      <h3>Pick a cheese!</h3>
      <Dropdown placeholder='Select a Cheese' search selection options={this.state.cheeseNames} />

      </div>
      <div className="cheeseDrop2">
      {/* <Dropdown placeholder='Select Friend' fluid selection options={cheeses.name} /> */}
      </div>


      </React.Fragment>
    )
}
}