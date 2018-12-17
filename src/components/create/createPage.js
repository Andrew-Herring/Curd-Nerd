import React, { Component } from 'react';
import { Image, Header, Dropdown, Button, Icon, Divider, Container } from 'semantic-ui-react'
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

  handleDropdownChange = (e, { id, value }) => {
    const stateToChange = {}
    stateToChange[id] = value
    this.setState(stateToChange, () => {

    })
  }



  constructNewPlate = evt => {
    evt.preventDefault()

    let people = this.state.people;
    let soft = null
    let aged = null;
    let mid = null;
    let wildcard = null;
    if (this.state.soft !== null) {
      soft = Number(this.state.soft)
    }
    if (this.state.aged !== null) {
      aged = Number(this.state.aged)
    }
    if (this.state.mid !== null) {
      mid = Number(this.state.mid)
    }
    if (this.state.wildcard !== null) {
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

    const numbers = [
      { key: 1, text: '1', value: 1 },
      { key: 2, text: '2', value: 2 },
      { key: 3, text: '3', value: 3 },
      { key: 4, text: '4', value: 4 },
      { key: 5, text: '5', value: 5 },
      { key: 6, text: '6', value: 6 },
      { key: 7, text: '7', value: 7 },
      { key: 8, text: '8', value: 8 },
      { key: 9, text: '9', value: 9 },
      { key: 10, text: 'everyone at the NSS Demo', value: "everyone at the NSS Demo" },
    ]

    return (
      <React.Fragment>
        <Header as='h2' textAlign='center'>
          <div>
            <Image centered src={Cheese} size="tiny" />
          </div>
          <br></br>
          <Header.Content>Time to make a Cheese Plate!</Header.Content>
        </Header>
        <div className='createDisplay'>
          <div className='createForm'>
            <div className="peopleDrop">
              <h3>First, how many people want cheese?</h3>
              <Dropdown
                placeholder="How many people?"
                fluid
                selection
                item
                options={numbers}
                onChange={this.handleDropdownChange}
                id="people" />
            </div>

            <div className="cheeseDrop">
              <Divider />
            </div>

            <section className="cheeseDrop">
              <h3>Soft Cheese</h3>
              <Dropdown
                placeholder='Select a Cheese'
                fluid
                selection
                search
                options={this.state.softCheese}
                onChange={this.handleDropdownChange}
                id="soft" />

              <h3>Middle ground</h3>
              <Dropdown
                placeholder='Select a Cheese'
                fluid
                search
                selection
                options={this.state.midCheese}
                onChange={this.handleDropdownChange}
                id="mid" />

              <h3>Aged Cheese</h3>
              <Dropdown
                placeholder='Select a Cheese'
                fluid
                search
                selection
                options={this.state.agedCheese}
                onChange={this.handleDropdownChange}
                id="aged" />


              <h3>How about something unusual?</h3>
              <Dropdown
                placeholder='Select a Cheese'
                fluid
                search
                selection
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
          </div>
          <section className='sideBox'>
            <Container>

              <Header as='h3' textAlign='center'>How to make the perfect cheese plate</Header>
              <Divider />
              <h3>Get a variety of ages!</h3>
              <p>These drop downs already sort our cheeses from youngest to oldest!  Start off by choosing a cheese from each drop down!</p>

              <h3>Mix up the Milk!</h3>
              <p>You can make your cheese plate more diverse by choosing cheeses made from different milks i.e. Cow, Goat and Sheep!</p>

              <h3>C-C-Combo!</h3>
              <p>You can also try and get cheeses with diffent origins for the ultimate combo move!  Use the library page as a reference and get creative!  While you are at the store don't forget to grab some charcuterie, grapes and even honey to push your cheese power levels over 9000!</p>

              <br></br>
              <br></br>
              <iframe className='gif' src="https://giphy.com/embed/1pooFlqcmEz9AgNeRZ" title='eating cheese' width="330" height="200" frameBorder="0" allowFullScreen></iframe>
            </Container>
          </section>
        </div>
      </React.Fragment >
    )
  }
}