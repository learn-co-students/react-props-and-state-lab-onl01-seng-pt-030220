import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {
  render() {
    let pets= this.props.pets.map(pet =>{
      
       return  <Pet pet ={pet} 
               onAdoptPet={this.props.onAdoptPet}
               isAdopted={this.props.adoptedPets}
        />
      
      })
    return <div className="ui cards" >{pets}</div>
  }
}

export default PetBrowser
