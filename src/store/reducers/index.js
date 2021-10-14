import {
  START_FETCHING_USERS,
  FETCHED_USERS,
  START_REGISTER,
  REGISTERED,
  START_LOGIN,
  LOGGED_IN,
  LOGOUT,
  FETCH_USER,
  FETCHED_USER,
  ADD_CONTACT,
  ADDED_CONTACT
} from "../types.js"

const initialState = {
  signedInUser: null,
  allUsers: null,
  userContacts: null,
  isLoading: false,
  userToken: null,
  userInChat: null,
  successMessage: null
};


export const chatReducer = (state = initialState, action) => {

  switch(action.type) {

    case START_FETCHING_USERS:
      return {
        ...state,
        isLoading: true

      };

    case FETCHED_USERS:
      return {
        ...state,
        allUsers: action.payload,
        isLoading: false
      };

    case START_REGISTER:
      return {
        ...state,
        isLoading: true
      };

    case REGISTERED:
      return {
        ...state,
        successMessage: "successfully registered!"
      };

    case START_LOGIN:
      return {
        ...state,
        isLoading: true
      };

    case LOGGED_IN:
      return {
        ...state,
        isLoading: false,
        signedInUser: action.payload.user,
        userToken: action.payload.token
      };

    case LOGOUT:
      return {
        ...state,
        userToken: null
      }

    case FETCH_USER:
      return {
        ...state,
        isLoading: true
      };

    case FETCHED_USER:
      return {
        ...state,
        userInChat: action.payload,
        isLoading: false
      };

    case ADD_CONTACT:
      return {
        ...state,
        isLoading: true
      };

    case ADDED_CONTACT:
      return {
        ...state,
        userContacts: action.payload,
        isLoading: false
      };

    default:
      return{
        state
      }

  }
}
