import React from 'react';
import { useDispatch } from 'react-redux';
import { setToggleOpen } from '../../../../../redux/uploadReducer';
import './UploadFile.css'

export default function UploadFile({ file }) {

    return (
        <div className='UploadFile'>
            <div className='UploadFile_header'>
                <div>{file.name}</div>
                <div className='UploadFile_close' >x</div>
            </div>
            <div className='UploadFile_content'
                style={{ width: `${file.progress}%` }}>
                {file.progress}%
            </div>
        </div>)
}
