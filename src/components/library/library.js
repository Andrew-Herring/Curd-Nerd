import React, { Component } from 'react';
import { Image, Button, Header, Card, Icon } from 'semantic-ui-react'
import Cheese from "../../images/cheese.png"



export default class Library extends Component {


state = {
  name: "",
  styleId: "",
  originId: "",
}






  render() {

    const cheeseName = this.props.cheeses.find(n => n.id === this.state.name) || {}
    const cheeseStyle = this.props.cheeses.find(s => s.id === this.state.styleId) || {}
    const cheeseOrigin = this.props.cheeses.find(o => o.id === this.state.originId) || {}
  

    return(
      <React.Fragment>
      <Header>
          <div>
            <Image centered src={Cheese} size="tiny" />
          </div>
        </Header>
      <h2>Library - Under Construction</h2>


      <section>
          {
            this.props.cheeses.map(cheeses =>

              <div key={cheeses.id}>
                <Card.Group>
                  <Card>
                    <Card.Content>
                      <Card.Header id="name">{cheeses.name}</Card.Header>
                      <Card.Meta id ="styleId">{cheeses.styleId}</Card.Meta>
                      <Card.Description id="originId">From:{cheeses.originId}</Card.Description>
                      <Card.Description id="age">Age (In months):{cheeses.age}</Card.Description>
                      <Card.Description id="raw">{cheeses.raw}</Card.Description>
                    </Card.Content>
                    <div>
                    {/* <Button animated color="teal"
                        onClick={() => this.props.history.push(`/share`)} 
                        >
                        <Button.Content visible>Share</Button.Content>
                        <Button.Content hidden>
                          <Icon name='share' />
                        </Button.Content>
                       </Button>

                      <Button animated color="yellow"
                        onClick={() => this.props.history.push(`/edit/${cheeses.id}`)} >
                        <Button.Content visible>Edit</Button.Content>
                        <Button.Content hidden>
                          <Icon name='pencil alternate' />
                        </Button.Content>
                       </Button>

                      <Button animated color="orange"
                        onClick={() => this.props.deletePlate("plates", cheeses.id)}>
                        <Button.Content visible>Remove</Button.Content>
                        <Button.Content hidden>
                          <Icon name='trash alternate' />
                        </Button.Content>
                       </Button>  */}
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