const SET_USER = "SET_USER"
const LOGOUT = "LOGOUT"

const initialState = {
    currentUser: {},
    isAuth: false
}

export default function userReducer(state = initialState, action) {

    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false
            }
        default:
            return state
    }

}

//Action creator
export const setUser = user => ({ type: SET_USER, payload: user })
export const logout = () => ({ type: LOGOUT })