//initial state
const initialState = {
    id: 0,
    username: ''
}

//constants
const UPDATE_USER = "UPDATE_USER"
const CLEAR_USER = "CLEAR_USER"

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
      default:
        return state;
    }
  }