import React, { Component } from 'react';

class Patients extends Component {
  render(){
    const { details } = this.props
    return(
      <div className="patientData">
        <p>Name of patient: {details.name.given} {details.name.family}</p>
        <p>Organization name: {details.managingOrganization.display}</p>
        <p>Gender: {details.gender}</p>
        <p>Number of conditions they have: {details.conditions.length}</p>
        <ul>
          {details.conditions.map( (condition, i) => <li key={i}>{condition}</li>)}
        </ul>
      </div>
    )
  }
}
export default Patients;
