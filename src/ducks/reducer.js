//initial state
const initialState = {
    id: 0,
    username: '',
    user: {}
}

//constants
const UPDATE_USER = "UPDATE_USER"
const CLEAR_USER = "CLEAR_USER"
const USER_DATA = "USER_DATA"

//action creators
export function updateUser(userobj) {
    return {
        type: UPDATE_USER,
        payload: userobj
    }
}
export function clearUser() {
    return {
      type: CLEAR_USER
    }
}
export function showUser (userData) {
  return {
      type: USER_DATA,
      payload: userData
  }
}
//reducer function
export default function reducer(state = initialState, action) {
    const { type, payload } = action;
    switch (type) {
      case UPDATE_USER:
        const { id, username} = payload;
        return { ...state, id, username};
      case CLEAR_USER:
        const user = {
          id: 0,
          username: "",
        };
        return { ...state, ...user };

        case USER_DATA:
        return {...state, user: action.payload}


      default:
        return state;
    }
  }