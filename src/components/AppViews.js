import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import CreatePlate from './create/createPage'
import cheeseBank from './module/CheeseManager'
import Dashboard from './dashboard/dash'

export default class AppViews extends Component {
isAuthenticated = () => sessionStorage.getItem("credentials") !== null 
  

  state = {
    plates: []
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
            activeUser={this.props.activeUser}
          />
        }} />


      </React.Fragment>
    )
  }



}