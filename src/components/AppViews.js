import { Route } from 'react-router-dom'
import React, { Component } from 'react';
import CreatePlate from './create/createPage'
import cheeseBank from './module/CheeseManager'
import Dashboard from './dashboard/dash'

export default class AppViews extends Component {
isAuthenticated = () => sessionStorage.getItem("credentials") !== null 
  

  state = {
      users: [],
      plates: [],
      cheeses: [],
      cheeseNames: [],
      cheese_milk: [],
      origins: [],
      styles: [],
      milks: [],
      isLoaded: false
    }
  
    componentDidMount() {
      const newState = {}
  
      cheeseBank.getAll("users")
        .then(allUsers => {
          newState.users = allUsers
        })
  
      cheeseBank.getAll("plates")
        .then(allPlates => {
          newState.plates = allPlates
        })
  
      cheeseBank.getAll("cheeses")
        .then(allCheeses => {
          newState.cheeses = allCheeses
        })
  
      cheeseBank.getAll("cheese_milk")
        .then(allCheeseMilk => {
          newState.cheeseMilk = allCheeseMilk
        })
  
      cheeseBank.getAll("origins")
        .then(allOrigins => {
          newState.origins = allOrigins
        })
  
      cheeseBank.getAll("styles")
        .then(allStyles => {
          newState.styles = allStyles
        })
      cheeseBank.getAll("milks")
        .then(allMilks => {
          newState.milks = allMilks
        })
     
        .then(() =>
          this.setState(newState))
    }

  // Functions
  addPlate = obj =>
    cheeseBank.add("plates", obj).then(plates =>
      this.setState({ plates: plates })
    )
  editPlate = (id, obj) =>
    cheeseBank.edit("plates", id, obj).then(plates =>
      this.setState({ plates: plates })
    )

  deletePlates = id =>
    cheeseBank.delete("plates", id).then(plates =>
      this.setState({ plates: plates })
    )



  render() {
    return (
      <React.Fragment>

        <Route exact path="/" render={(props) => {
          return <Dashboard {...props}
            plates={this.state.plates}
            addPlate={this.addPlate}
            editPlate={this.editPlate}
            deletePlate={this.deletePlate}
            activeUser={this.props.activeUser}
          />
        }} />


        <Route exact path="/create" render={(props) => {
          return <CreatePlate {...props}
            cheeses={this.state.cheeses}
            activeUser={this.props.activeUser}
          />
        }} />

      
      </React.Fragment>
    )
  }
}