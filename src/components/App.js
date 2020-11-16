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

  onChangeType = (event) => {
    console.log(event.target.value)
    this.setState({
      filters: {
        ...this.state.filters,
        type: event.target.value
      }
    })
  }

  onFindPetsClick = () => {
    //fetch /api/pets /api/pets?type=cat
    const url = (this.state.filters.type === 'all' ? `/api/pets` : `/api/pets?type=${this.state.filters.type}`)
    fetch(url)
      .then(resp => {return resp.json()})
      // .then(data => console.log(data))
      .then(json => {this.setState({pets: json})})
  }

  onAdoptPet = (id) => {
    console.log(this.state.pets)
    const pets = this.state.pets
    this.state.pets.find(pet => pet.id === id).isAdopted = true
    this.setState({pets})
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
