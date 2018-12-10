import React, { Component } from 'react';
import { Image, Header, Dropdown, Button, Icon } from 'semantic-ui-react'
import cheeseBank from '../module/CheeseManager'
import Cheese from "../../images/cheese.png"
import "./create.css"

export default class CreatePage extends Component {

  state = {
    cheeseNames: [],
    softCheese: [],
    midRange: [],
    oldrange: [],
    wildcard: []
  }
  
  componentDidMount() {

  cheeseBank.getCheese("cheeses")
  .then(cheeses => {
    this.setState({cheeseNames:cheeses})
  })

  cheeseBank.getSoft("cheeses")
  .then(soft => {
    this.setState({softCheese:soft})
  })

  cheeseBank.getMid("cheeses")
  .then(mid => {
    this.setState({midRange:mid})
  })

  cheeseBank.getOld("cheeses")
  .then(mid => {
    this.setState({oldRange:mid})
  })

  cheeseBank.getWild("cheeses")
  .then(wild => {
    this.setState({wildcard:wild})
  })
  }




  render() {

    const options = [
      { key: 1, text: '1', value: 1 },
      { key: 2, text: '2', value: 2 },
      { key: 3, text: '3', value: 3 },
      { key: 4, text: '4', value: 4 },
      { key: 5, text: '5', value: 5 },
      { key: 6, text: '6', value: 6 },
      { key: 7, text: '7', value: 7 },
      { key: 8, text: '8', value: 8 },
      { key: 9, text: '9', value: 9 },
      { key: 10, text: '10', value: 10 },
      { key: 11, text: '10+', value: 11 },
    ]

    return (
      <React.Fragment>
      <Header>
          <div>
            <Image centered src={Cheese} size="tiny" />
          </div>
        </Header>

      <div className="peopleDrop">
      <h3>First, how many people want cheese?</h3>
      <Dropdown placeholder="How many people?" options={options} selection item />
      </div>
      <br></br>
      <div className="cheeseDrop">
      <h3>Lets start with something soft</h3>
      <Dropdown placeholder='Select a Cheese' search selection options={this.state.softCheese} />
      </div>
      <div className="cheeseDrop">
      <h3>Next, something aged</h3>
      <Dropdown placeholder='Select a Cheese' search selection options={this.state.oldRange} />
      </div>
      <div className="cheeseDrop">
      <h3>Lastly, something to compliment the two</h3>
      <Dropdown placeholder='Select a Cheese' search selection options={this.state.midRange} />
      </div>
      <div className="cheeseDrop">
      <h3>How about something different?</h3>
      <Dropdown placeholder='Select a Cheese' search selection options={this.state.wildcard} />
      </div>

      <div className="createBtn">
    <Button color="teal" size="large" animated='vertical'>
      <Button.Content hidden>All Done!</Button.Content>
      <Button.Content visible><Icon name='check' /></Button.Content>
    </Button>
      </div>
      </React.Fragment>
    )
}
}