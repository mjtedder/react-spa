import { GET_CURRENT_DATE_TIME, GET_CURRENT_DIRECTORY } from "../actions/types";

const initialState = {
    date: '',
    currentDir: '',
}

export default function(state = initialState, action) {
     switch(action.type) {
         case GET_CURRENT_DATE_TIME:
             return {
                ...state,
                date: action.payload.data
             }
        case GET_CURRENT_DIRECTORY:
            return {
                ...state,
                currentDir: action.payload.data
            }
         default:
             return state;
     }
 }
