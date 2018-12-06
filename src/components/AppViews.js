import { Route, Redirect } from 'react-router-dom'
import React, { Component } from 'react';
import cheeseBank from '../module/CheeseManager'

class AppViews extends Component {

  

state = {
  plates: []
  }


  componentDidMount() {
    const _state = {}
    cheeseBank.all("animals")
      .then(animals => (_state.animals = animals))
      .then(() =>
        cheeseBank.all("employees").then(
          employees => (_state.employees = employees)
        )
      )
      .then(() =>
        cheeseBank.all("locations").then(
          locations => (_state.locations = locations)
        )
      )
      .then(() =>
        cheeseBank.all("owners").then(owners => (_state.owners = owners))
      )
      .then(() => {
        this.setState(_state)
      })
  }

}