const TOOGLE_OPEN = "uploadReducer_TOGGLE_OPEN"
const ADD_UPLOAD_FILE = "uploadReducer_ADD_UPLOAD_FILE"
const REMOVE_UPLOAD_FILE = "uploadReducer_REMOVE_UPLOAD_FILE"
const SET_PROGRESS_BAR = "upoadReducer_SET_PROGRESS_BAR"

const initialState = {
    files: [],
    isOpen: true,
    progress: 0
}

export default function uploadReducer(state = initialState, action) {

    switch (action.type) {
        case TOOGLE_OPEN:
            return { ...state, isOpen: action.payload }
        case ADD_UPLOAD_FILE:
            return { ...state, files: [...state.files, { ...action.payload }] }
        case REMOVE_UPLOAD_FILE:
            return { ...state, files: [...state.files.filter(file => file.id !== action.payload)] }
        case SET_PROGRESS_BAR:
            return { ...state, progress: action.payload }
        default:
            return state
    }

}

//Action creator
export const setToggleOpen = bool => ({ type: TOOGLE_OPEN, payload: bool })
export const addUploadFile = file => ({ type: ADD_UPLOAD_FILE, payload: file })
export const removeUploadFile = fileId => ({ type: REMOVE_UPLOAD_FILE, payload: fileId })
export const setProgressBar = value => ({ type: TOOGLE_OPEN, payload: value })

