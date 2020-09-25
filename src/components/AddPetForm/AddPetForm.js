import React, { Component } from 'react';
import { connect } from 'react-redux'

class AddPetForm extends Component {

    state = {
        pet_name: '',
        color: '',
        breed: '',
        owner_id: 0
    }

    componentDidMount() {
       //get request for owners in dropdown
       this.props.dispatch({type: 'FETCH_OWNERS'})
    }

    

    //functions that will handle the collection of info
    //from the form
    handleName = (event) => {
        this.setState({
            pet_name: event.target.value
        })
    }

    handleColor = (event) => {
        this.setState({
            color: event.target.value
        })
    }

    handleBreed = (event) => {
        this.setState({
            breed: event.target.value
        })
    }


    handleOwnerId = (event) => {
        console.log(event.target.value)
        this.setState({
            owner_id: event.target.value
        })
    }

    //submit function, collects data and sends to redux
    handleSubmit = (event) => {
        event.preventDefault();
        console.log(this.state)
        this.props.dispatch({ type: 'ADD_PET', payload: this.state })
    }

    render() {
        return (
            <div>
                <h2>Add Pet</h2>
                <form onSubmit={(event) => this.handleSubmit(event)}>
                    <input placeholder="Pet Name" onChange={this.handleName}></input>
                    <input placeholder="Pet Color" onChange={this.handleColor}></input>
                    <input placeholder="Pet Breed" onChange={this.handleBreed}></input>
                    <select name="owners"  onChange={(event) => this.handleOwnerId(event)}>
                        <option defaultValue="" >Choose Pet Owner</option>
                        {this.props.reduxState.ownerReducer.map((owner, i) => {
                            return (
                                <option key={i} value={owner.id}>
                                    {owner.name}
                                </option>
                            )
                        })}
                    </select>
                    <button type="submit">Submit</button>
                </form>
            </div>
        );
    }
}

const mapReduxStateToProps = (reduxState) => ({
    reduxState
});

export default connect(mapReduxStateToProps)(AddPetForm);
