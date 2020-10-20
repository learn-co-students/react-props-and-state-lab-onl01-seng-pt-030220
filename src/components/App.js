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

  changeType = (event) => {
    this.setState({
      filters: {...this.state.filters, type: event.target.value}
    })
  }

  findPet = () => {
    let request
    if (this.state.filters.type !== undefined && this.state.filters.type !== 'all'){
      request = fetch(`/api/pets?type=${this.state.filters.type}`)
    } else {
      request = fetch('/api/pets')
    }
    request
    .then(resp => resp.json())
    .then(pets => this.setState({ pets }))
  }

  adopt = (id) => {
    let pets = this.state.pets.map(pet => {
     return pet.id === id ? {...pet, isAdopted: true} : pet
    })
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
              <Filters onChangeType={this.changeType} onFindPetsClick={this.findPet}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser pets={this.state.pets} onAdoptPet={this.adopt}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
