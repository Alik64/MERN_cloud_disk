import React, { useState } from 'react'
import style from './Login.module.css'
import Input from '../../utils/Input/Input'

import { login } from '../../actions/user'
import { useDispatch, useSelector } from 'react-redux'
import Preloader from '../Preloader/Preloader'



export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()
    const isFetching = useSelector(state => state.user.isFetching)


    if (isFetching && localStorage.getItem("token")) return <Preloader />

    return (
        <>

            <div className={style.login}>

                <div className={style.login_title}>Sign In</div>
                <form >
                    <Input value={email} setValue={setEmail} type="email" placeholder="E-mail" autoComplete="username" />
                    <Input value={password} setValue={setPassword} type="password" placeholder="Password" autoComplete="current-password" />
                </form>


                <button className='btn' onClick={() => dispatch(login(email, password))}>Enter</button>

            </div>


        </>
    )
}
