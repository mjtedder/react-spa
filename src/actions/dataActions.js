import { GET_CURRENT_DATE_TIME, GET_CURRENT_DIRECTORY } from "./types";
import { BASE_URL } from '../../constants';

export const getCurrentDateTime = () => dispatch => {
    fetch(`${BASE_URL}/api/date-time`)
        .then(res => res.json())
        .then(date =>
            dispatch({
                type: GET_CURRENT_DATE_TIME,
                payload: date
            })
        )     
};

export const getDirectoryPath = () => dispatch => {
    fetch(`${BASE_URL}/api/directory`)
        .then(res => res.json())
        .then(dir =>
            dispatch({
                type: GET_CURRENT_DIRECTORY,
                payload: dir
            })
        )
};