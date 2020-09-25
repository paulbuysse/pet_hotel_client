import React, { Component } from 'react';
import { connect } from 'react-redux'
import PetListItem from './PetListItem.js'

class PetList extends Component {

    componentDidMount () {
        this.props.dispatch({type: 'FETCH_PETS'})
    }
    render() {
        return (
            <div style={{display: 'flex',  alignItems: 'center',  flexDirection: 'column',}}>
                <table>
                    <thead>
                        <tr>
                            <th>Owner</th>
                            <th>Pet</th>
                            <th>Breed</th>
                            <th>Color</th>
                            <th>Checked in</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {this.props.reduxState.petsReducer.map((pet, i) => {
                            return (
                                <tr key={i}>
                                    <PetListItem pet={pet} />
                                </tr>
                            )
                        })}
                    </tbody>
                </table>
            </div >
        );
    }
}

const mapReduxStateToProps = reduxState => ({
    reduxState
});

export default connect(mapReduxStateToProps)(PetList);
