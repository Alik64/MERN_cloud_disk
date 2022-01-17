import React from 'react'
import style from './Navbar.module.css'
import Logo from '../../assets/images/cloud-cd-logo.png'
import { Link } from 'react-router-dom'
export default function Navbar() {
    return (
        <div className={style.navbar}>
            <div className={style.navbar_container}>
                <div className={style.navbar_item}>
                    <img src={Logo} alt="logo" className={style.logo} />
                    <h2> <span className={style.spanGreen}>Cloud</span><span className={style.spanBlue}>Disk</span></h2>
                </div>

                <div className={style.navbar_item}>

                    <div className={style.navbar_link}>SignIn</div>
                    <Link to='/signup'><div className={style.navbar_link}>SignUp</div></Link>
                </div>
            </div>

        </div>
    )
}
