import React, { Component } from 'react';
import { Image, Header, Card } from 'semantic-ui-react'
import Cheese from "../../images/cheese.png"
import "./library.css"




export default class Library extends Component {


  render() {


    return (
      <React.Fragment>
        <Header as='h2' textAlign='center'>
          <div>
            <Image centered src={Cheese} size="tiny" />
            <br></br>
            <Header.Content>Cheese Library</Header.Content>
          </div>
        </Header>


        <section className="library">
          {
            this.props.cheeses.map(cheeses =>
              <div key={cheeses.id}>
                <section className="libraryCards">
                <Card.Group>
                  <Card>
                    <Card.Content>
                      <Card.Header id="name">{cheeses.name}</Card.Header>

                      <Card.Meta id="styleId">
                        {cheeses.styleId && `${this.props.styles.find(s => s.id === cheeses.styleId).name}`}
                      </Card.Meta>

                      <Card.Description id="age">
                        Age: {cheeses.age} Months old
                      </Card.Description>

                      <Card.Description id="originId">
                        From: {cheeses.originId && `${this.props.origins.find(o => o.id === cheeses.originId).name}`}</Card.Description>

                      <Card.Description id="milkId">
                        Milk: {cheeses.milkId && `${this.props.milks.find(moo => moo.id === cheeses.milkId).name}`}</Card.Description>

                      <Card.Description id="raw">
                        {cheeses.raw}
                      </Card.Description>
                    </Card.Content>
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