import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      filters: {
        type: 'all'
      }
    }
  }

  onChangeType = event => {
    this.setState({
      ...this.state,
      filters: {
        type: event.target.value
      }
    })
  }

  onFindPetsClick = event => {
    let url = '/api/pets'
    if(this.state.filters.type != "all") {
      url += "?type=" + this.state.filters.type
    }

    fetch(url)
        .then(response => response.json())
        .then(data => {this.setState({
          ...this.state,
          pets: data
        })
        console.log(data[0])});
  }

  onAdoptPet = (id) => {
    let updatedPets = this.state.pets
    updatedPets.find(pet => pet.id === id).isAdopted = true
    
    this.setState({
      ...this.state,
      pets: updatedPets
    })
  }

  render() {
    return (
      <div className="ui container">
        <header>
          <h1 className="ui dividing header">React Animal Shelter</h1>
        </header>
        <div className="ui container">
          <div className="ui grid">
            <div className="four wide column">
              <Filters onChangeType={this.onChangeType} onFindPetsClick={this.onFindPetsClick} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.onAdoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
