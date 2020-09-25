import React, { Component } from 'react';
import { connect } from 'react-redux';
// import mapStoreToProps from '../../redux/mapStoreToProps';

class OwnerForm extends Component {
  state = {
    name: '',
  };

  handleChange = (event) => {
    this.setState({
      name: event.target.value
    })
    console.log(this.state)
  }

  addOwner = (event) => {
    event.preventDefault();
    console.log(this.state)
    this.props.dispatch({type: 'ADD_OWNER', payload: this.state})
  }

  render() {
    return (
      <div>
        <h2>Add Owner</h2>
        <form onSubmit={(event) => this.addOwner(event)}>
        <input type='text' placeholder='Owner Name' onChange={(event) => this.handleChange(event)} />
        <button type='submit' >Submit</button>
        </form>
      </div>
    );
  }
}

const mapReduxStateToProps = reduxState => ({
  reduxState
});


export default connect(mapReduxStateToProps)(OwnerForm)