import React from 'react'
import style from './Navbar.module.css'
import Logo from '../../assets/images/cloud-cd-logo.png'
import { Link } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'
import { logout } from '../../redux/userReducer'


export default function Navbar() {
    const isAuth = useSelector(state => state.user.isAuth)
    const userId = useSelector(state => state.user.currentUser.email)

    const dispatch = useDispatch()
    return (
        <div className={style.navbar}>
            <div className={style.navbar_container}>
                <div className={style.navbar_item}>
                    <img src={Logo} alt="logo" className={style.logo} />
                    <h2> <span className={style.spanGreen}>Cloud</span><span className={style.spanBlue}>Disk</span></h2>
                </div>

                <div className={style.navbar_item}>

                    {!isAuth && <div className={style.navbar_link}><Link to='/login'>Sign In</Link></div>}
                    {!isAuth && <div className={style.navbar_link}><Link to='/signup'>Sign Up</Link></div>}
                    {isAuth &&
                        <div className={style.navbar_user}>
                            <div>{userId} </div>
                            <div className={style.navbar_logout} onClick={() => dispatch(logout())}> Logout</div>
                        </div>
                    }
                </div>
            </div>

        </div>
    )
}
