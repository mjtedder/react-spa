import { GET_CURRENT_DATE_TIME, GET_CURRENT_DIRECTORY } from "./types";

export const getCurrentDateTime = () => dispatch => {
    fetch('http://localhost:3000/api/date-time')
        .then(res => res.json())
        .then(date =>
            dispatch({
                type: GET_CURRENT_DATE_TIME,
                payload: date
            })
        )     
};

export const getDirectoryPath = () => dispatch => {
    fetch('http://localhost:3000/api/directory')
        .then(res => res.json())
        .then(dir =>
            dispatch({
                type: GET_CURRENT_DIRECTORY,
                payload: dir
            })
        )
};