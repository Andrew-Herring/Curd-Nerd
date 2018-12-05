import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import Dash from "./welcome/dash"










export default class AppViews extends Component {

  state = {
    plates: [],
  
    isLoaded: false
  }



// componentDidMount() {
//   const newState = {}

//   DataManager.getAll("plates")
//     .then(allplates => {
//       newState.plates = allplates
//     })

//     .then(() =>
//       this.setState(newState))
// }


render() {
  return (
    <React.Fragment>

     {/* routes */}

    </React.Fragment>
  )
}
}