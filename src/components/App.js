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

    filterChange = event => {
      this.setState({
        filters: {
          ...this.state.filters,
          type: event.target.value
        }
      })
    }

    fetchPets = () => {
      let petLink = '/api/pets'
      if(this.state.filters.type !== 'all'){
        petLink += `?type=${this.state.filters.type}`;
      }
      fetch(petLink)
      .then(response => response.json())
      .then(data => this.setState({pets: data}))
    }
 
    adoptPet = (id) => {
      const allPets = this.state.pets.map(pet => {
         if (pet.id === id) {
           return {...pet, isAdopted: true}
         } else {
           return pet 
         }
       })
       this.setState({
         pets: allPets
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
            <Filters onChangeType ={this.filterChange} onFindPetsClick={this.fetchPets}/>
            </div>
            <div className="twelve wide column">
              <PetBrowser onAdoptPet={this.adoptPet}/>
            </div>
          </div>
        </div>
      </div>
    )
  }
}


export default App

