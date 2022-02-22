import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch, useSelector } from 'react-redux'

import style from './Navbar.module.css'
import Logo from '../../assets/images/cloud-cd-logo.png'
import defaultUser from '../../assets/images/defaultUser.png'

import { logout } from '../../redux/userReducer'
import { getFiles, searchFile } from '../../actions/file'
import { API_URL } from '../../config'
import { setFiles } from '../../redux/fileReducer'


export default function Navbar() {
    const isAuth = useSelector(state => state.user.isAuth)
    const isFetching = useSelector(state => state.user.isFetching)
    const currentUser = useSelector(state => state.user.currentUser)
    const currentDir = useSelector(state => state.files.currentDir)

    const dispatch = useDispatch()

    const [searchName, setSearchName] = useState('');
    const [searchTimeout, setSearchTimeout] = useState(false)

    const avatar = currentUser.avatar ? `${API_URL + currentUser.avatar}` : defaultUser

    function searchChangeHandler(e) {
        setSearchName(e.target.value)
        if (searchTimeout !== false) {
            clearTimeout(searchTimeout)
        }
        //put show loader here - optional*
        if (e.target.value !== '') {
            setSearchTimeout(setTimeout((value) => {
                dispatch(searchFile(value));
            }, 500, e.target.value))
        } else {
            dispatch(getFiles(currentDir))
        }
    }

    function logoutHandler() {
        dispatch(logout())
        dispatch(setFiles([]))
    }
    if (isFetching && localStorage.getItem("token")) return null

    return (
        <div className={style.navbar}>
            <div className={style.navbar_container}>
                <div className={style.navbar_item}>
                    <NavLink to='/'><img src={Logo} alt="logo" className={style.logo} /></NavLink>
                    <h2> <span className={style.spanGreen}>Cloud</span><span className={style.spanBlue}>Disk</span></h2>
                </div>

                <div className={style.navbar_item}>
                    {isAuth && <input
                        type="text"
                        placeholder='Search'
                        value={searchName}
                        onChange={(e) => searchChangeHandler(e)} />}
                    <div className={style.navbar_auth}>
                        {!isAuth && <div className={style.navbar_link}><Link to='/login'>Sign In</Link></div>}
                        {!isAuth && <div className={style.navbar_link}><Link to='/signup'>Sign Up</Link></div>}
                    </div>

                    <div className={style.navbar_ava}>
                        {isAuth &&
                            <div className={style.navbar_user}>
                                <NavLink to="/profile">
                                    <img src={avatar} alt="" className={style.navbar_avatar} />
                                </NavLink>

                            </div>
                        }
                        {isAuth && <div className={style.navbar_logout} onClick={() => logoutHandler()}> Logout</div>}

                    </div>
                </div>
            </div>

        </div>
    )
}
