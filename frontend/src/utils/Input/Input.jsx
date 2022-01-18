import React from 'react'
import style from './Input.module.css'
export default function Input(props) {
    return (
        <input
            value={props.value}
            onChange={(e) => props.setValue(e.target.value)}
            type={props.type}
            placeholder={props.placeholder} />
    )
}

