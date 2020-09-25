import React, { Component } from 'react';

class petListItem extends Component {

    state ={
        petId: 0,
        isCheckedIn: this.props.pet.checked_in
    }

    handleDelete = (id) => {
        let petId = id
        this.props.dispatch({ type: 'DELETE_PET', payload: petId})
    }

    handleCheckStatus = (id) => {
        console.log(this.state)
        let idToUpdate = id
        console.log(idToUpdate)
        this.setState({
            petId: idToUpdate,
            isCheckedIn: !this.state.isCheckedIn
        })
    }

    render() {
        console.log('in test function', this.state)

        return (
            <>
                <td>{this.props.pet.name}</td>
                <td>{this.props.pet.pet_name}</td>
                <td>{this.props.pet.breed}</td>
                <td>{this.props.pet.color}</td>
                {this.state.isCheckedIn ?
                    <td>Yes</td> : <td>No</td>
                }

                <td>
                    <button
                        type="button"
                        className="btn btn_asLink"
                        onClick={() => this.handleDelete(this.props.pet.id)}
                    >
                        Delete
                    </button>
                    {this.state.isCheckedIn ?
                        <button
                            onClick={() => this.handleCheckStatus(this.props.pet.id)}
                        >
                            Check Out
                        </button>
                        :
                        <button
                            onClick={() => this.handleCheckStatus(this.props.pet.id)}
                        >
                            Check In
                        </button>
                    }
                </td>
            </>
        );
    }
}

export default petListItem;
