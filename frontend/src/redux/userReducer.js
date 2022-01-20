const SET_USER = "userReducer_SET_USER"
const LOGOUT = "userReducer_LOGOUT"
const TOGGLE_IS_FETCHING = "userReducer_TOGGLE_IS_FETCHING"

const initialState = {
    currentUser: {},
    isAuth: false,
    isFetching: true
}

export default function userReducer(state = initialState, action) {

    switch (action.type) {
        case SET_USER:
            return {
                ...state,
                currentUser: action.payload,
                isAuth: true,
                isFetching: false
            }
        case LOGOUT:
            localStorage.removeItem('token')
            return {
                ...state,
                currentUser: {},
                isAuth: false,
                isFetching: false
            }
        case TOGGLE_IS_FETCHING: {
            return { ...state, isFetching: action.payload };
        }
        default:
            return state
    }

}

//Action creator
export const setUser = user => ({ type: SET_USER, payload: user })
export const logout = () => ({ type: LOGOUT })
export const toggleIsFetching = (isFetching) => ({
    type: TOGGLE_IS_FETCHING,
    payload: isFetching
});