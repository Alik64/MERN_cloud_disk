import React from 'react'
import { useDispatch, useSelector } from 'react-redux'

import { deleteAvatar, uploadAvatar } from '../../actions/user'

import sizeFormat from '../../utils/sizeFormat'
import defaultUser from '../../assets/images/defaultUser.png'
import './Profile.css'
import { API_URL } from '../../config'

export default function Profile() {

    const currentUser = useSelector(state => state.user.currentUser)
    console.log(currentUser)
    const dispatch = useDispatch()

    function changeHandler(e) {
        const file = e.target.files[0]
        dispatch(uploadAvatar(file))
    }

    return (
        <div className='profile'>
            <div className='profile_container'>


                <h1>Profile</h1>
                <div className='profile_avatarBox'>
                    <img className='profile_avatarImg'
                        src={currentUser.avatar ? `${API_URL + currentUser.avatar}` : defaultUser} alt="" />
                    <div className='avatar_management'>
                        <label htmlFor="avatarInput" className="profile_avatarLabel">Update</label>
                        <input
                            id='avatarInput'
                            accept='image/*'
                            type="file"
                            placeholder='Upload new avatar'
                            onChange={e => changeHandler(e)} />

                        <button className='btn' onClick={() => dispatch(deleteAvatar())}>Delete</button>
                    </div>

                </div>

                <h3>Email: {currentUser.email}</h3>
                <h3>Available disk space : {sizeFormat(currentUser.diskSpace)}</h3>



            </div>
        </div>
    )
}

