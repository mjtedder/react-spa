import React, { useEffect } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import { getCurrentDateTime, getDirectoryPath } from '../actions/dataActions';
import { logOutUser } from '../actions/userActions';

const Details = (props) => {

    const dispatch = useDispatch();

    const data = useSelector(state => state.data, shallowEqual);
    const user = useSelector(state => state.user, shallowEqual);

    useEffect(() => {
        dispatch(getCurrentDateTime());
        dispatch(getDirectoryPath());
    }, [dispatch]);

    const detailStyle = {
        margin: 'auto',
        padding: '10px',
        border: '1px solid #c9c9c9',
        borderRadius: '5px',
        background: '#f5f5f5',
        width: '220px',
        display: 'block',
        fontFamily: 'Arial, Helvetica, sans-serif',
        fontSize: '15px'
    };

    const buttonStyle = {
        margin: '10px 0 0 0',
        padding: '7px 10px',
        border: '1px solid #efffff',
        borderRadius: '3px',
        background: '#3085d6',
        width: '100%',
        fontSize: '15px',
        color: 'white',
        display: 'block'
    };

    const handleLogOutUser = () => {
        dispatch(logOutUser(user.username, props));
    };

    return (
        <div style={detailStyle}>
            <h3>Username</h3>
            <p>{user.username}</p>
            <h3>Current Time</h3>
            <p>{data.date}</p>
            <h3>Directory</h3>
            <p>{data.currentDir}</p>
            <button style={buttonStyle} onClick={handleLogOutUser}>Logout</button>
        </div>
    )
}

export default Details;