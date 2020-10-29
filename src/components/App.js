import React from 'react'

import Filters from './Filters'
import PetBrowser from './PetBrowser'

class App extends React.Component {
  constructor() {
    super()

    this.state = {
      pets: [],
      adoptedPets:"",
      filters: {
        type: 'all'
      }
    }
  }

onChangeType=(animalType)=>{
  this.setState({
    
    filters:{
      type: animalType
  }
  })

}

onFindPetsClick=(animalType)=>{
     URL='/api/pets'
       if (this.state.filters.type == 'all'){

          fetch(URL)
          .then(res => res.json())
          .then(pets=>{
             this.setState({
               pets 
            }
          )})
       }else{           
          fetch(URL+`?type=${this.state.filters.type}`)
          .then(res => res.json())
          .then(pets=>{
             this.setState({
               pets 
            })
          })
     }
}


onAdoptPet=(id)=>{
  
  let pet =this.state.pets.find(pet=>pet.id == id)
  pet.isAdopted=true
   this.setState({ adoptedPets: pet})
  
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
              <Filters filters={this.state.filters}
                       onChangeType={this.onChangeType}
                       onFindPetsClick={this.onFindPetsClick} 
              />
            </div>
            <div className="twelve wide column">
              <PetBrowser  pets={this.state.pets} 
                           onAdoptPet={this.onAdoptPet} 
                           adoptedPets={this.state.adoptedPets}
              />
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default App
