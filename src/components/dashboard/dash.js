import React, { Component } from 'react';
import { Image, Card, Button, Icon, Header } from 'semantic-ui-react'
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
          <Button fluid content='Start' color="yellow" />
        </div>

       
       
       
       {/* CHEESE CARDS, NEEDS UPDATING */}
       
        <section className="cards">
          {
            this.props.plates.map(plates =>
              <div key={plates.id} className="list">
                <Card>
                  <div className="cheeseCards">
                    <Card.Description>
                      <Card.Header>{plates.name}</Card.Header>
                      <Card.Meta>{plates.location}</Card.Meta>
                      <br></br>
                      <Card.Description>{plates.quote}</Card.Description>
                    </Card.Description>
                    <br></br>
                    {/* Card Buttons */}
                    <section>
                      <div className="edBtns">
                        <Button.Group>
                          <Button color="teal" onClick={() => this.props.history.push(`/profile/edit/${plates.id}`)}
                            className="editBtn">Edit
                          </Button>
                          <Button.Or />
                          <Button color="blue" onClick={() => this.props.history.push(`/profile/detail/${plates.id}`)}
                            className="deleteBtn">
                            Details
                          </Button>
                          <Button.Or />
                          <Button color="red" onClick={() => this.props.deleteProfile("plates", plates.id)}
                            className="deleteBtn">
                            Remove
                     </Button>
                        </Button.Group>
                      </div>
                    </section>
                  </div>
                </Card>
              </div>
            )
          }
        </section>
      </React.Fragment>
    )
  }
}