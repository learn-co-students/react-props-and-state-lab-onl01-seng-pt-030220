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

  changeType = () => {
    this.setState({
      filters: this.state.filters.type
    })
  }

  findPet = () => {
    if (this.state.filters.type !== 'all'){
      fetch(`/api/pets?type=${this.state.filters.type}`)
      .then(resp => resp.json())
      .then(pets => this.setState({ pets }))
    } else {
      fetch('/api/pets')
    }
  }

  adopt = (id) => {
    let foundPet = this.state.pets.find((pet) => pet.id === id)
    foundPet.isAdopted = true
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.findPet}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adopt}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
