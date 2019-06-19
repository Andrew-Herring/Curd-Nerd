import { Route } from 'react-router-dom'
import React, { Component, Redirect } from 'react';
import CreatePlate from './create/createPage'
import cheeseBank from './module/CheeseManager'
import Dashboard from './dashboard/dash'
import EditPlate from './create/editPage'
import Library from './library/library'
import Share from './share/share'
// import Login from './Authentication/Login'
// import IsAuth from './Authentication/IsAuth'

export default class AppViews extends Component {
  isAuthenticated = () => sessionStorage.getItem("credentials") !== null
  credentials = sessionStorage.getItem('credentials')

  


  state = {
      users: [],
      plates: [],
      cheeses: [],
      // cheese_milk: [],
      origins: [],
      styles: [],
      milks: [],
      isLoaded: false
    }
    clearState() {
      console.log("clearState")
      this.setState({
        plates: []
      })
    }
  
    componentDidMount() {
      const newState = {}
      console.log("cred", this.credentials)
  
      cheeseBank.getAll("users")
        .then(allUsers => {
          newState.users = allUsers
        })
  
      cheeseBank.getAllByUser("plates", sessionStorage.getItem(`credentials`))
        .then(allPlates => {
          newState.plates = allPlates
        })
  
      cheeseBank.getAll("cheeses")
        .then(allCheeses => {
          newState.cheeses = allCheeses
        })
  
      // cheeseBank.getAll("cheese_milk")
      //   .then(allCheeseMilk => {
      //     newState.cheeseMilk = allCheeseMilk
      //   })
  
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
      .then(() => cheeseBank.getAllByUser("plates", sessionStorage.getItem(`credentials`)))
      .then(plates => this.setState({
        plates: plates
      })
      )
  }
  deletePlate = (plates, item) => {
    return cheeseBank.delete(plates, item)
    .then(() => cheeseBank.getAllByUser("plates", sessionStorage.getItem(`credentials`)))
    .then(plates => this.setState({
      plates: plates
    }))
  }
  editPlate = (id, plates) => {
  cheeseBank.edit("plates", id, plates)
    .then(() => cheeseBank.getAllByUser("plates", sessionStorage.getItem(`credentials`)))
    .then(plates => this.setState({
      plates: plates
    }
    // () => this.props.history.push('/dash')
    )
    )
    
  }
  
  // sharePlate = (plates, item) => {
  //   return cheeseBank.share(plates, item)
  //   .then(() => cheeseBank.getAll("plates"))
  //   .then(plates => this.setState({
  //     plates: plates
  //   })
  //   )
  // }
  

  render() {
    return (
      <React.Fragment>


        <Route exact path="/dash" render={(props) => {
          if (this.isAuthenticated()) {
          return <Dashboard {...props}
            users={this.state.users}
            plates={this.state.plates}
            cheeses={this.state.cheeses}
            editPlate={this.editPlate}
            deletePlate={this.deletePlate}
            activeUser={this.props.activeUser}
          />
        } 
          else { 
            this.clearState()
            return <Redirect to="/login" />
        }
      }} />


        <Route exact path="/library" render={(props) => {
         if (this.isAuthenticated()) {
          return <Library {...props}
            cheeses={this.state.cheeses}
            activeUser={this.props.activeUser}
            styles={this.state.styles}
            origins={this.state.origins}
            milks={this.state.milks}
          />
         }
          else {
            this.clearState()
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
          this.clearState()
          return <Redirect to="/login" />
        }
        }} />


        <Route exact path="/create" render={(props) => {
         if (this.isAuthenticated()) {
          return <CreatePlate {...props}
            users={this.state.users}
            addPlate={this.addPlate}
            cheeses={this.state.cheeses}
            activeUser={this.props.activeUser}
          />
        }
        else {
          this.clearState()
          return <Redirect to="/login" />
        }
        }} />


        <Route exact path="/edit/:platesId(\d+)" render={(props) => {
        if (this.isAuthenticated()) {
          return <EditPlate {...props}
            users={this.state.users}
            plates={this.state.plates}
            editPlate={this.editPlate}
            cheeses={this.state.cheeses}
            addPlate={this.addPlate}
            activeUser={this.props.activeUser}
          />
        }
        else {
          this.clearState()
          return <Redirect to="/login" />
        }

        }}/>

      
      </React.Fragment>
    )
  }
}