import React, { Component } from 'react';
import { connect } from 'react-redux';

const ownerListItem = ({ owner, dispatch }) => {
    const deleteOwner = () => {
        dispatch({type: '', payload: owner.id})
    }
    return (
        <tr>
            <td>{owner.name}</td>
            <td>{owner.count}</td>
            <td> <button onClick={deleteOwner}> Delete</button></td>
        </tr>

    );

}

// const mapReduxStateToProps = reduxState => ({
//     reduxState
// });

export default connect()(ownerListItem);


