import React from 'react'

class Pet extends React.Component {
 
 handleAdopet=(event)=>{
       let adoptedId =this.props.pet.id
       this.props.onAdoptPet(adoptedId)      
 }

  render() {

      const{type,gender,age,weight,name,isAdopted}=this.props.pet

    let g = gender == "male" ? '♂':'♀'

    return (
      <div className="card" >
        <div className="content">
          <a className="header">
            {g}
            PET NAME : {name}
          </a>
          <div className="meta">
            <span className="date">PET TYPE: {type}</span>
          </div>
          <div className="description">
            <p>Age: {age}</p>
            <p>Weight: {weight}</p>
          </div>
        </div>
        <div className="extra content">
          {isAdopted && <button className="ui disabled button">Already adopted</button>}
          {!isAdopted &&  <button className="ui primary button"
         
          onClick={event=>this.handleAdopet(event)} 
          >Adopt pet</button> }

        </div>
      </div>
    )
  }
}

export default Pet
