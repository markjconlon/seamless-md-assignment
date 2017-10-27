import React, { Component } from 'react';
import Patients from './Patients';
import patientData from './patientData';
import './App.css';

class App extends Component {
  constructor(){
    super();
    this.state = {
      patients: {patientData}
    }
  }
  render() {
    return (
      <div>
      {Object
        .keys(this.state.patients)
        .map( key => <Patients key={key} details={this.state.patients[key]}/>)
      }
      </div>
    );
  }
}

export default App;
