 import { LOGIN_USER, LOGOUT_USER } from "../actions/types";

 const initialState = {
     username: '',
     password: '',
     isAuthenticated: false
 }

 export default function(state = initialState, action) {
     switch(action.type) {
         case LOGIN_USER:
             return {
                ...state,
                username: action.payload.data.username,
                password: action.payload.data.password,
                isAuthenticated: action.payload.data.isAuthenticated
             }
         case LOGOUT_USER:
             return {
                 ...state,
                 username: '',
                 password: '',
                 isAuthenticated: false
             }
         default:
             return state;
     }
 }