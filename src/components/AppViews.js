import { Route } from 'react-router-dom'
import React, { Component, Redirect } from 'react';
import CreatePlate from './create/createPage'
import cheeseBank from './module/CheeseManager'
import Dashboard from './dashboard/dash'
import EditPlate from './create/editPage'
import Library from './library/library'
import Share from './share/share'
import Login from './Authentication/Login'
import IsAuth from './Authentication/IsAuth'

export default class AppViews extends Component {
isAuthenticated = () => sessionStorage.getItem("credentials") !== null 
  

  state = {
      users: [],
      plates: [],
      cheeses: [],
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
  addPlate = (plates, item) => {
    return cheeseBank.add(plates, item)
      .then(() => cheeseBank.getAll("plates"))
      .then(plates => this.setState({
        plates: plates
      })
      )
  }
  deletePlate = (plates, item) => {
    return cheeseBank.delete(plates, item)
    .then(() => cheeseBank.getAll("plates"))
    .then(plates => this.setState({
      plates: plates
    }))
  }
  editPlate = (id, plates) =>
  cheeseBank.edit("plates", id, plates)
    .then(() => cheeseBank.getAll("plates"))
    .then(plates => this.setState({
      plates: plates
    }))
  



  render() {
    return (
      <React.Fragment>

        {/* <Route exact path="/login" component={Login} /> */}
{/* 
        <Route exact path="/" render={(props) => {
         if (this.isAuthenticated()) { 
          return <Dashboard {...props}
            plates={this.state.plates}
            addPlate={this.addPlate}
            editPlate={this.editPlate}
            deletePlate={this.deletePlate}
            activeUser={this.props.activeUser}
          />
        } 
        else {
          return <Redirect to="/login" />
      }

        }} />
 */}

        <Route exact path="/dash" render={(props) => {
          if (this.isAuthenticated()) {
          return <Dashboard {...props}
            plates={this.state.plates}
            cheeses={this.state.cheeses}
            editPlate={this.editPlate}
            deletePlate={this.deletePlate}
            activeUser={this.props.activeUser}
          />
        } 
          else {
            return <Redirect to="/login" />
        }
      }} />


        <Route exact path="/library" render={(props) => {
         if (this.isAuthenticated()) {
          return <Library {...props}
            plates={this.state.plates}
            cheeses={this.state.cheeses}
            editPlate={this.editPlate}
            deletePlate={this.deletePlate}
            activeUser={this.props.activeUser}
          />
         }
          else {
            return <Redirect to="/login" />
          }
        }} />


        <Route exact path="/share" render={(props) => {
        if (this.isAuthenticated()) {
          return <Share {...props}
            plates={this.state.plates}
            cheeses={this.state.cheeses}
            editPlate={this.editPlate}
            deletePlate={this.deletePlate}
            activeUser={this.props.activeUser}
          />
        }
        else {
          return <Redirect to="/login" />
        }
        }} />


        <Route exact path="/create" render={(props) => {
         if (this.isAuthenticated()) {
          return <CreatePlate {...props}
            addPlate={this.addPlate}
            cheeses={this.state.cheeses}
            activeUser={this.props.activeUser}
          />
        }
        else {
          return <Redirect to="/login" />
        }
        }} />


        <Route exact path="/edit/:platesId(\d+)" render={(props) => {
        if (this.isAuthenticated()) {
          return <EditPlate {...props}
            plates={this.state.plates}
            editPlate={this.editPlate}
            cheeses={this.state.cheeses}
            addPlate={this.addPlate}
            activeUser={this.props.activeUser}
          />
        }
        else {
          return <Redirect to="/login" />
        }

        }} />

      
      </React.Fragment>
    )
  }
}