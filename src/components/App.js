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

  changeType = (state) => {
    this.setState({
      filters: {
        ...this.state.filters,
        type: state
      }
    })
  }

  findPetsClick = () => {
    const URL = '/api/pets'
    let searchURL = URL
    if (this.state.filters.type !== 'all') {
      searchURL = URL + `?type=${this.state.filters.type}`
    }
    fetch(`${searchURL}`)
    .then(response => response.json())
    .then(data => this.setState({
      pets: data
    }))
    console.log(this.state)
  }

  adoptPet = (id) => {
    const pets = this.state.pets.map((pet) => {
      if (pet.id === id) {
        pet.isAdopted = true 
      } 
      return pet
    })
    this.setState({
      pets: pets
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.findPetsClick}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet} pets={this.state.pets}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
