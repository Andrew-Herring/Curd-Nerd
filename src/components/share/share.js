import React, { Component } from 'react';
import { Image, Header, Card } from 'semantic-ui-react'
import Cheese from "../../images/cheese.png"



export default class Share extends Component {



  render() {

    return(
      <React.Fragment>
      <Header as='h2' textAlign='center'>
          <div>
            <Image centered src={Cheese} size="tiny" />
            <br></br>
            <Header.Content>Share your creations!</Header.Content>
          </div>
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