import axios from 'axios'
import { setUser, toggleIsFetching } from '../redux/userReducer'


export const registration = async (email, password) => {
    try {
        const response = await axios.post(`http://localhost:5000/api/auth/registration`, {
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
            const response = await axios.post(`http://localhost:5000/api/auth/login`, {
                email,
                password
            })


            dispatch(setUser(response.data.user))
            localStorage.setItem('token', response.data.token)
            dispatch(toggleIsFetching(false))

        } catch (e) {
            dispatch(toggleIsFetching(false))
            alert(e.response.data.message)
        }
    }
}

export const auth = () => {
    return async dispatch => {

        try {
            const response = await axios.get(`http://localhost:5000/api/auth/auth`,
                { headers: { Authorization: `Bearer ${localStorage.getItem('token')}` } }
            )
            localStorage.setItem('token', response.data.token)
            dispatch(setUser(response.data.user))
            dispatch(toggleIsFetching(false))


        } catch (e) {
            dispatch(toggleIsFetching(false))
            alert(e.response.data.message)
            localStorage.removeItem('token')
        }
    }
}
