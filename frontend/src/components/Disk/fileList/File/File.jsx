import React from 'react'
import './File.css'
import folder from '../../../../assets/images/folder.png'
import docs from '../../../../assets/images/docs.png'
export default function File({ file }) {
    return (
        <div className='File'>
            <img
                className='File_img'
                src={file.type === "dir" ? folder : docs}
                alt="type" />

            <div className='File_name'>{file.name}</div>
            <div className='File_date'>{file.date.slice(0, 10)}</div>
            <div className='File_size'>{file.size}</div>
        </div>
    )
}
