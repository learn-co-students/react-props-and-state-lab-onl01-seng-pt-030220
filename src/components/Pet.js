import React from 'react'

class Pet extends React.Component {
 
 handleAdopet=(event)=>{
    
       //let adoptedId=event.target.getAttribute('data-id')
       let adoptedId =this.props.pet.id
       this.props.onAdoptPet(adoptedId)
     
      
 }

  render() {
   
    let gender = this.props.pet.gender == "male" ? '♂':'♀'

    return (
      <div className="card" >
        <div className="content">
          <a className="header">
            {gender}
            PET NAME : {this.props.pet.name}
          
            
          </a>
          <div className="meta">
            <span className="date">PET TYPE: {this.props.pet.type}</span>
          </div>
          <div className="description">
            <p>Age: {this.props.pet.age}</p>
            <p>Weight: {this.props.pet.weight}</p>
          </div>
        </div>
        <div className="extra content">
          {this.props.pet.isAdopted && <button className="ui disabled button">Already adopted</button>}
         {!this.props.pet.isAdopted &&  <button className="ui primary button"
          data-id={this.props.pet.id}
          onClick={event=>this.handleAdopet(event)} 
          >Adopt pet</button> }
        </div>
      </div>
    )
  }
}

export default Pet
