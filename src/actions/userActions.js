import { LOGIN_USER, LOGOUT_USER } from './types';

export const logInUser = (data, props) => dispatch => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
    }
    fetch('http://localhost:3000/api', options)
        .then(res => res.json())
        .then(user => {
            dispatch({
                type: LOGIN_USER,
                payload: user
            });
            props.history.push('/details')
        });
};

export const logOutUser = (username, props) => dispatch => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ data: username })
    }
    fetch('http://localhost:3000/api/logout', options)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: LOGOUT_USER,
                payload: data
            });
            props.history.push('/')
        });
};
