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
  ADDED_CONTACT,
  SELECT_CONTACT
} from "../types.js"

export const fetchUsersAction = () => {
  return {
    type: START_FETCHING_USERS
  };
};



export const fetchedUsersAction = (allUsers) => {
  return {
    type: FETCHED_USERS,
    payload: allUsers
  };
};

export const fetchUsers =  (signal) => {
  return async (dispatch) => {
    dispatch(fetchUserAction());
    try{
      let response = await fetch(`http://localhost:3000/users`, {
        method: 'GET',
        signal: signal,
      });
      dispatch(fetchedUserAction(response.json()));
      return await response.json();

    }catch(err){

    }

  }
}

export const startRegisterAction = () => {
  return {
    type: START_REGISTER
  };
};

export const registeredAction = () => {
  return {
    type: REGISTERED
  };
};

export const register = (user) => {
  return async (dispatch) => {
    dispatch(startRegisterAction());
    try{
      let response = await fetch(`http://localhost:3000/users`, {
        method: 'POST',
        headers: {
          'Accept': 'Application/json',
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(user)
      });
      dispatch(registeredAction());
      return await response.json();

    }catch(err){
      console.log(err);
    }

  };
};

export const startLoginAction = () => {
  return {
    type: START_LOGIN
  };
};

export const loggedInAction = (user) => {
  return {
    type: LOGGED_IN,
    payload: user
  };
};

export const login = (user) => {
  console.log("before dispatch");
  return async (dispatch) => {
    dispatch(startLoginAction());
    try{
      console.log("before fetch");
      let response = await fetch(`http://localhost:3000/auth/signin`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json'
        },
         credentials: 'include',
        body: JSON.stringify(user)
      });

       let jsonResponse = await response.json();
       console.log("the json data is " + jsonResponse.token);

      dispatch(loggedInAction(jsonResponse));
      return await jsonResponse;


    }catch(err){
        console.log("the error is " + err);
    }
  };
};

export const logoutAction = () => {
  return {
    type: LOGOUT
  }
}

export const logout = () => {
  return async (dispatch) => {
    try{
      let response = await fetch(`http://localhost:3000/auth/signout`, {
        method: 'GET'
      })
      dispatch(logoutAction());
      return await response.json();

    }catch(err){

    }

  }

}



export const fetchUserAction = () => {
  return {
    type: FETCH_USER
  };
};

export const fetchedUserAction = (user) => {
  return {
    type: FETCHED_USER,
    payload: user
  };
};

export const fetchUser = (params, credentials, signal) => {
  return async (dispatch) => {
    try{
      dispatch(fetchUserAction());
      let response = await fetch(`http://localhost:3000/users/${params.userId}`, {
        method: 'GET',
        signal: signal,
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        }
      });
      dispatch(fetchUserAction(response.json()));
      return await response.json();

    }catch(err){

    }
  }
}

export const selectContactAction = (contact) => {
  return {
    type: SELECT_CONTACT,
    payload: contact
  };
};

export const selectContact = (contact) => {
  return (dispatch) => {
    dispatch(selectContactAction(contact));
  };
};

export const addContactAction = () => {
  return {
    type: ADD_CONTACT
  };
};

export const addedContactAction = (contact) => {
  return {
    type: ADDED_CONTACT,
    payload: contact
  };
};

export const addContact = (params, credentials, contact) => {
  return async (dispatch) => {
    try{
      dispatch(addContactAction());
      let response = await fetch(`http://localhost:3000/user/contacts/${params.userId}`, {
        method: 'POST',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        },
        body: JSON.stringify(contact)
      })
      dispatch(addedContactAction(contact));
      return await response.json();

    }catch(err){

    }
  };
};

export const remove = (params, credentials) => {
  return async (dispatch) => {
    try{
      let response = await fetch(`http://localhost:3000/users/${params.userId}`, {
        method: 'DELETE',
        headers: {
          'Accept': 'application/json',
          'Content-Type': 'application/json',
          'Authorization': 'Bearer ' + credentials.t
        }
      })
      dispatch(logoutAction());
      return await response.json();

    }catch(err){

    };

  };
}
