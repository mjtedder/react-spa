import { LOGIN_USER, LOGOUT_USER, FETCH_USER_DETAILS } from './types';

export const logInUser = (data, history) => dispatch => {
    const options = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data)
    }
    fetch('http://localhost:3000/api', options)
        .then(res => res.json())
        .then(data => {
            dispatch({
                type: LOGIN_USER,
                payload: data
            });
        });
};

export const logOutUser = (username) => dispatch => {
    fetch('/api/logout', options, { body: JSON.stringify(username) })
        .then(res => res.json())
        .then(data =>
            dispatch({
                type: LOGOUT_USER,
                payload: data
            })
        );
};
