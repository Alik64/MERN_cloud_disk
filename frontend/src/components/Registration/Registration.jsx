import React, { useState } from 'react'
import Input from '../../utils/Input/Input'
import style from './Registration.module.css'
import { registration } from '../../actions/user'

export default function Registration() {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    return (
        <div className={style.registration}>

            <div className={style.registration_title}>Sign Up</div>
            <form>
                <Input value={email} setValue={setEmail} type="email" placeholder="E-mail" />
                <Input value={password} setValue={setPassword} type="password" placeholder="Password" />
            </form>
            <button onClick={() => registration(email, password)} className={style.registration_btn}>Let's go!</button>

        </div>
    )
}
