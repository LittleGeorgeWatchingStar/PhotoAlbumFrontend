import { AUTH, AUTHBYGOOGLE, LOGOUT } from '../constants/actionTypes';

const auth = (state = { authData: null}, action) => {
  switch (action.type) {
    case AUTH:
       console.log(action);
    // //   console.log(action?.data);
    // //   console.log(action?.data.user.user);
    //   console.log(action?.data);

      localStorage.setItem("profile", JSON.stringify({ ...action }));
      return {...state, authData: action };
    case AUTHBYGOOGLE:
      let authData = action?.data.user.user;

      console.log(authData);
    //   console.log(action?.data.user.user.displayName);
    //   console.log(action?.data.user.user.email);
    //   console.log(action?.data.user.user.photoURL);
    //   console.log(action?.data.user.user.accessToken);

      localStorage.setItem("profile", JSON.stringify({ ...authData }));
      return {...state, authData: authData };
    case LOGOUT:
        localStorage.clear(); 
        return {...state, authData: null }; 
    default:
      return state;
  }
};

export default auth;