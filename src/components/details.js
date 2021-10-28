import React from 'react';
import { connect, useSelector } from 'react-redux';
import { getCurrentDateTime, getDirectoryPath } from '../actions/dataActions'

const Details = props => {
    const username = useSelector(state => state.username);
    const dateTime = useSelector(state => state.date);
    const currentDir = useSelector(state => state.currentDir);

    return (
        <div>
            <h3>Username</h3>
            <p>{username}</p>
            <h3>Current Time</h3>
            <p>{dateTime}</p>
            <h3>Directory</h3>
            <p>{currentDir}</p>
            {/* <button onClick={handleLogOut}>Logout</button> */}
        </div>
    )
}

export default connect(null, { getCurrentDateTime, getDirectoryPath })(Details);