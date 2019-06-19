import React, { Component } from 'react';
import { Image, Button, Header, Card, Icon } from 'semantic-ui-react'
import Cheese from "../../images/cheese.png"
import "./dash.css"
// import CheeseManager from '../module/CheeseManager';

export default class DashBoard extends Component {
 
 
  credentials = sessionStorage.getItem('credentials')
 
 


 
  render() {
    return (
      <React.Fragment>
        <Header as='h2' textAlign='center'>
          <div>
            <Image centered src={Cheese} size="tiny" />
            <br></br>
            <Header.Content>Dashboard</Header.Content>
            </div>
            <br></br>
            <section className="dashBtn">
              <Button content='Create a New Plate' color="blue"
                onClick={() => this.props.history.push(`/create`)} />
            </section>
        </Header>

        <section className='dash'>
          {
            this.props.plates.map(plates =>

              <div key={plates.id}>
              <section className="dashCards">
                <Card.Group>
                  <Card>
                    <Card.Content>
                      <Card.Header>Plate #{plates.id}</Card.Header>
                      <Card.Meta>Made for {plates.people}</Card.Meta>
                      <Card.Description>
                        {
                          plates.softCheese &&
                          `${this.props.cheeses.find(c => c.id === plates.softCheese).name}`
                        }
                        <br></br>
                        {
                          plates.midCheese &&
                          `${this.props.cheeses.find(c => c.id === plates.midCheese).name}`
                        }
                        <br></br>
                        {
                          plates.agedCheese &&
                          `${this.props.cheeses.find(c => c.id === plates.agedCheese).name}`
                        }
                        <br></br>
                        {
                          plates.wildcard &&
                          `${this.props.cheeses.find(c => c.id === plates.wildcard).name}`
                        }
                      </Card.Description>
                    </Card.Content>
                    <div className='dashBtns'>
                    <Button animated color="teal"
                        onClick={() => this.props.history.push(`/share`)} >
                        <Button.Content visible>Share</Button.Content>
                        <Button.Content hidden>
                          <Icon name='share' />
                        </Button.Content>
                       </Button>

                      <Button animated color="yellow"
                        onClick={() => this.props.history.push(`/edit/${plates.id}`)} >
                        <Button.Content visible>Edit</Button.Content>
                        <Button.Content hidden>
                          <Icon name='pencil alternate' />
                        </Button.Content>
                       </Button>

                      <Button animated color="orange"
                        onClick={() => this.props.deletePlate("plates", plates.id)}>
                        <Button.Content visible>Remove</Button.Content>
                        <Button.Content hidden>
                          <Icon name='trash alternate' />
                        </Button.Content>
                       </Button> 
                    </div>
                  </Card>
                </Card.Group>
                </section>
              </div>

                )
              }
        </section>


      </React.Fragment>
        )
      }
}