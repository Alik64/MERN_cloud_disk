import React, { useState } from 'react'
import style from './Login.module.css'
import Input from '../../utils/Input/Input'
import { login } from '../../actions/user'
import { useDispatch } from 'react-redux'

export default function Login() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const dispatch = useDispatch()


    return (
        <div className={style.login}>
            <div className={style.login_title}>Sign In</div>
            <form>
                <Input value={email} setValue={setEmail} type="email" placeholder="E-mail" />
                <Input value={password} setValue={setPassword} type="password" placeholder="Password" />
            </form>
            <button className={style.login_btn} onClick={() => dispatch(login(email, password))}>Enter</button>

        </div>
    )
}
