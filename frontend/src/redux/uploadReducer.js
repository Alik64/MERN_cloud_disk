const TOOGLE_OPEN = "uploadReducer_TOGGLE_OPEN"
const ADD_UPLOAD_FILE = "uploadReducer_ADD_UPLOAD_FILE"
const REMOVE_UPLOAD_FILE = "uploadReducer_REMOVE_UPLOAD_FILE"
const SET_PROGRESS_BAR = "upoadReducer_SET_PROGRESS_BAR"

const initialState = {
    files: [],
    isOpen: false
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
            return {
                ...state,
                files: [...state.files.map(file => file.id == action.payload.id
                    ? { ...file, progress: action.payload.progress }
                    : { ...file }
                )]
            }
        default:
            return state
    }

}

//Action creator
export const setToggleOpen = bool => ({ type: TOOGLE_OPEN, payload: bool })
export const addUploadFile = file => ({ type: ADD_UPLOAD_FILE, payload: file })
export const removeUploadFile = fileId => ({ type: REMOVE_UPLOAD_FILE, payload: fileId })
export const setProgressBar = file => ({ type: SET_PROGRESS_BAR, payload: file })

