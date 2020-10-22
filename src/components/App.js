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

  handleChange = event => {
    this.setState ({
      filters: {
        ...this.state.filters, 
        type: event.target.value
      }
    })
  }

  changeState = data => {
    this.setState ({
      pets: data
    })
  }

  fetchPets = () => {
    if (this.state.filters.type === 'all') {
    fetch('/api/pets')
      .then(response => response.json())
      .then(data => this.changeState(data));
    } else if (this.state.filters.type === 'cat'){
      fetch('/api/pets?type=cat')
      .then(response => response.json())
      .then(data => this.changeState(data));
    } else if (this.state.filters.type === 'dog') {
      fetch('/api/pets?type=dog')
      .then(response => response.json())
      .then(data => this.changeState(data));
    } else if (this.state.filters.type === 'micropig') {
      fetch('/api/pets?type=micropig')
      .then(response => response.json())
      .then(data => this.changeState(data));
    }
  }

  handleAdopt = (id) => {
    this.state.pets.forEach(pet => {
      if (pet.id === id) {
        pet.isAdopted = true
      }
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
              <Filters onChangeType= {this.handleChange} onFindPetsClick={this.fetchPets} />
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet= {this.handleAdopt}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
