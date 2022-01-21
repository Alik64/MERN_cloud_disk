import axios from 'axios'
import { setFiles, addFolder } from "../redux/fileReducer";

export function getFiles(dirId) {
    return async dispatch => {
        try {
            const response = await axios.get(`http://localhost:5000/api/files${dirId ? '?parent=' + dirId : ''}`, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })

            dispatch(setFiles(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}

export function createFolder(parentId, name) {
    return async dispatch => {
        try {
            const response = await axios.post(`http://localhost:5000/api/files`, {
                name,
                parent: parentId,
                type: 'dir'
            }, {
                headers: { Authorization: `Bearer ${localStorage.getItem('token')}` }
            })

            dispatch(addFolder(response.data))
        } catch (e) {
            alert(e.response.data.message)
        }
    }
}