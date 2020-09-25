import React, { Component } from 'react';
import './App.css';
// import { connect } from 'react-redux';
// import {  Link } from 'react-router-dom';
import AddPetForm from '../AddPetForm/AddPetForm.js'
import OwnerTable from '../OwnerTable/OwnerTable.jsx'
import PetList from '../PetList/PetList.js'

class App extends Component {
  render() {
    return (
      <div className="App">
        <AddPetForm />
       <OwnerTable />
       <PetList />
      </div>
    );
  }

}

export default App;
