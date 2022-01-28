const SET_CURRENT_DIR = "fileReducer_SET_CURRENT_DIR"
const SET_FILES = "fileReducer_SET_FILES"
const ADD_FILE = "fileReducer_ADD_FILE"
const POP_UP_TOGGLE = "fileReducer_POP_UP_TOGGLE"
const PUSH_TO_STACK = "fileReducer_PUSH_TO_STACK"
const POP_FROM_STACK = "fileReducer_POP_FROM_STACK"
const DELETE_FILE = "fileReducer_DELETE_FILE"

const initialState = {
    files: [],
    currentDir: null,
    display: "none",
    folderPathStack: []
}

export default function fileReducer(state = initialState, action) {

    switch (action.type) {
        case SET_FILES:
            return { ...state, files: action.payload }
        case SET_CURRENT_DIR:
            return { ...state, currentDir: action.payload }
        case ADD_FILE:
            return { ...state, files: [...state.files, action.payload] }
        case DELETE_FILE:
            return { ...state, files: [...state.files, action.payload] }
        case POP_UP_TOGGLE:
            return { ...state, display: action.payload }
        case PUSH_TO_STACK:
            return { ...state, folderPathStack: [...state.folderPathStack, action.payload] }
        case POP_FROM_STACK:
            return { ...state, folderPathStack: state.folderPathStack.slice(0, action.payload) }
        default:
            return state
    }

}

export const setFiles = files => ({ type: SET_FILES, payload: files })
export const setCurrentDir = dir => ({ type: SET_CURRENT_DIR, payload: dir })
export const addFile = file => ({ type: ADD_FILE, payload: file })
export const deleteFile = file => ({ type: DELETE_FILE, payload: file })
export const togglePopUp = (display) => ({ type: POP_UP_TOGGLE, payload: display })
export const pushToStack = (folder) => ({ type: PUSH_TO_STACK, payload: folder })
export const popFromStack = (index) => ({ type: POP_FROM_STACK, payload: index })