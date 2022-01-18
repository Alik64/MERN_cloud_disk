import React from 'react'
import Input from '../../utils/Input/Input'
import style from './Login.module.css'

export default function Login() {
    return (
        <div className={style.registration}>

            <div className={style.registration_title}>Login</div>
            <div>
                <Input type="email" placeholder="Email" />
                <Input type="password" placeholder="Password" />
                <button className={style.registration_title}>Submit</button>
            </div>

        </div>
    )
}
