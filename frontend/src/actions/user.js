import axios from 'axios'
import { setUser, toggleIsFetching } from '../redux/userReducer'
import { API_URL } from '../config'

export const validateMsg = (message) => {
    console.log(message)
    return message
}

export const registration = async (email, password) => {
    try {
        const response = await axios.post(`${API_URL}api/auth/registration`, {
            email,
            password
        })

        alert(response.data.message)


    } catch (e) {
        alert(e.response.data.message)
    }

}

export const login = (email, password) => {



    return async dispatch => {

        try {
            const response = await axios.post(`${API_URL}api/auth/login`, {
                email,
                password
            })


            dispatch(setUser(response.data.user))
            console.log('token', response.data.token)
            localStorage.setItem('token', response.data.token)
            dispatch(toggleIsFetching(false))

        } catch (e) {
            dispatch(toggleIsFetching(false))
            // alert(e.response.data.message)
            console.log(e.response.data.message)
            validateMsg(e.response.data.message)
        }
    }
}

export const auth = () => {
    return async dispatch => {

        try {
            const response = await axios.get(`${API_URL}api/auth/auth`,
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            )
            localStorage.setItem('token', response.data.token)
            dispatch(setUser(response.data.user))
            dispatch(toggleIsFetching(false))


        } catch (e) {
            dispatch(toggleIsFetching(false))
            console.log(e.response)
            localStorage.removeItem('token')
        }
    }
}

export const uploadAvatar = (file) => {
    return async dispatch => {

        try {
            const formData = new FormData()
            formData.append('file', file)
            const response = await axios.post(`${API_URL}api/files/avatar`, formData,
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            )

            dispatch(setUser(response.data))


        } catch (e) {
            console.log(e)

        }
    }
}
export const deleteAvatar = () => {
    return async dispatch => {

        try {

            const response = await axios.delete(`${API_URL}api/files/avatar`,
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            )

            dispatch(setUser(response.data))


        } catch (e) {
            console.log(e)

        }
    }
}