import React from 'react'

import Pet from './Pet'

class PetBrowser extends React.Component {

  pets = (pets) => {
    const petComponents = pets.map(onePet => {
      return (
          <Pet pet={onePet} onAdoptPet={this.props.onAdoptPet} key={onePet.id}/>
      )
    })
    return petComponents
  }

  render() {
    return(
      <div className="ui cards">
        {this.pets(this.props.pets)}
      </div>
    )
  }
}

export default PetBrowser
