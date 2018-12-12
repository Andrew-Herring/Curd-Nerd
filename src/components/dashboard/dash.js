import React, { Component } from 'react';
import { Image, Button, Header, Card } from 'semantic-ui-react'
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

        <section>
          {
            this.props.plates.map(plates => 
              
              <div key={plates.id}>
                <Card.Group>
                  <Card>
                    <Card.Content>
                      <Card.Header>Plate #{plates.id}</Card.Header>
                      <Card.Meta>Made for {plates.people} people</Card.Meta>
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
                    <div>
                    <Button color="teal" content='Share' />

                    <Button color="yellow" content='Edit' />

                    <Button color="orange" content='Remove' onClick={() =>
                    this.props.deletePlate("plates", plates.id)} />
                    </div>
                  </Card>
                </Card.Group>
              </div>
              
            )
          }
        </section>


      </React.Fragment>
    )
  }
}