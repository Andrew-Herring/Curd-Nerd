import React, { Component } from 'react';
import { Image, Header, Dropdown, Button, Icon, Divider } from 'semantic-ui-react'
import cheeseBank from '../module/CheeseManager'
import Cheese from "../../images/cheese.png"
import "./create.css"

export default class CreatePage extends Component {

  state = {
    softCheese: [],
    midCheese: [],
    agedCheese: [],
    wildcardCheese: [],
    soft: null,
    aged: null,
    mid: null,
    people: null,
    wildcard: null
  }

  componentDidMount() {

    // cheeseBank.getCheese("cheeses")
    // .then(cheeses => {
    //   this.setState({cheeseNames:cheeses})
    // })

    cheeseBank.getSoft("cheeses")
      .then(soft => {
        this.setState({ softCheese: soft })
      })

    cheeseBank.getMid("cheeses")
      .then(mid => {
        this.setState({ midCheese: mid })
      })

    cheeseBank.getOld("cheeses")
      .then(aged => {
        this.setState({ agedCheese: aged })
      })

    cheeseBank.getWild("cheeses")
      .then(wild => {
        this.setState({ wildcardCheese: wild })
      })
  }

  handleDropdownChange =(e, { id, value }) => {
    const stateToChange = {}
    stateToChange[id] = value
    this.setState(stateToChange, () => {

      })
  }



  constructNewPlate = evt => {
      evt.preventDefault()

      let people = Number(this.state.people);
      let soft = null
      let aged = null;
      let mid = null;
      let wildcard = null;
      if(this.state.soft !== null){
        soft = Number(this.state.soft)
      }
      if(this.state.aged !== null){
        aged = Number(this.state.aged)
      }
      if(this.state.mid !== null){
        mid = Number(this.state.mid)
      }
      if(this.state.wildcard !== null){
        wildcard = Number(this.state.wildcard)
      }

      const plates = {
        people: people,
        softCheese: soft,
        agedCheese: aged,
        midCheese: mid,
        wildcard: wildcard
      }
      
      this.props.addPlate("plates", plates).then(() => this.props.history.push("/dash"))
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

    return(
      <React.Fragment>
        <Header>
          <div>
            <Image centered src={Cheese} size="tiny" />
          </div>
        </Header>

        <div className="peopleDrop">
          <h3>First, how many people want cheese?</h3>
          <Dropdown placeholder="How many people?" fluid selection item
            options={options}
            onChange={this.handleDropdownChange}
            id="people" />
        </div>

        <div className="cheeseDrop">
          <Divider />
        </div>

        <section className="cheeseDrop">
          <h3>Soft Cheese</h3>
          <Dropdown placeholder='Select a Cheese' fluid selection
            options={this.state.softCheese}
            onChange={this.handleDropdownChange}
            id="soft" />

          <h3>Aged Cheese</h3>
          <Dropdown placeholder='Select a Cheese' fluid search selection
            options={this.state.agedCheese}
            onChange={this.handleDropdownChange}
            id="aged" />

          <h3>Middle ground</h3>
          <Dropdown placeholder='Select a Cheese' fluid search selection
            options={this.state.midCheese}
            onChange={this.handleDropdownChange}
            id="mid" />

          <h3>Wildcard!</h3>
          <Dropdown placeholder='Select a Cheese' fluid search selection
            options={this.state.wildcardCheese}
            onChange={this.handleDropdownChange}
            id="wildcard" />

          <br></br>

          <Button color="yellow" size="large" animated='vertical' className="createBtn"
            onClick={this.constructNewPlate}>
            <Button.Content hidden>All Done!</Button.Content>
            <Button.Content visible><Icon name='check' /></Button.Content>
          </Button>
        </section>
      </React.Fragment >
    )
    }
}