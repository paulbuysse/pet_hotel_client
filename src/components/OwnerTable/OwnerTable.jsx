import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import OwnerForm from '../OwnerForm/OwnerForm.jsx'
import OwnerItem from '../OwnerTable/OwnerItem'

const  OwnerTable = ({owners, dispatch}) =>  {

    useEffect(() => {
        dispatch({type: 'FETCH_OWNERS'})
        
    }, [dispatch]);

        return (
            <div style={{display: 'flex',  alignItems: 'center',  flexDirection: 'column',}}>
                <h2>Manage Owners</h2>
                <OwnerForm />

                <table style={{paddingBottom: '2em', }}>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Number of Pets</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {owners &&   
                        
                            owners.map((owner, i) => {
                            return (
                                <OwnerItem key={i} owner={owner} />
                            )
                        })}
                    </tbody>
                </table>
            </div>
        );

}

const mapReduxStateToProps = (reduxState) => {
    return {
        owners: reduxState.ownerReducer
    }
};


export default connect(mapReduxStateToProps)(OwnerTable)
