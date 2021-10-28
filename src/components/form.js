import React, { useRef } from 'react';
import { connect } from 'react-redux';
import { logInUser } from '../actions/userActions';
import Field from './Field';

const Form = ({ logInUser }) => {
    const usernameRef = useRef();
    const passwordRef = useRef();

    const formStyle = {
        margin: 'auto',
        padding: '10px',
        border: '1px solid #c9c9c9',
        borderRadius: '5px',
        background: '#f5f5f5',
        width: '220px',
        display: 'block'
    };

    const submitStyle = {
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

    const handleFormSubmit = e => {
        e.preventDefault();
        const data = {
            username: usernameRef.current.value,
            password: passwordRef.current.value
        };
         if (validateUserCreds()) {
            logInUser(data);
         };
    };

    const validateUserCreds = () => {
        if (usernameRef.current.value === 'Fabric' && passwordRef.current.value === 'password1') {
            return true;
        } else {
            alert('Invalid User Credentials!');
        }
    };

    return (
            <form style={formStyle} onSubmit={handleFormSubmit}>
                <Field ref={usernameRef} label="Username:" type="text" />
                <Field ref={passwordRef} label="Password:" type="password" />
                <div>
                    <button style={submitStyle} type="submit">Submit</button>
                </div>
            </form>
    )
}

export default connect(null, { logInUser })(Form);