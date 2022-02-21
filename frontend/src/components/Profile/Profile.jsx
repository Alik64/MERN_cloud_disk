import React from 'react'
import './Profile.css'

export default function Profile() {
    return (
        <div>
            <h1>Profile</h1>
            <input type="file" placeholder='Upload new avatar' />
            <button>Delete profile avatar</button>
        </div>
    )
}

