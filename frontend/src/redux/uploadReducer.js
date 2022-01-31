const TOOGLE_OPEN = "uploadReducer_TOGGLE_OPEN"

const initialState = {
    files: [],
    isOpen: false,
}

export default function uploadReducer(state = initialState, action) {

    switch (action.type) {
        case TOOGLE_OPEN:
            return { ...state, isOpen: action.payload }

        default:
            return state
    }

}

//Action creator
export const setToggleOpen = bool => ({ type: TOOGLE_OPEN, payload: bool })
