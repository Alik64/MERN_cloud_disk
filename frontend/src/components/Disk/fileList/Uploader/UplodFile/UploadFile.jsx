import React from 'react';
import { useDispatch } from 'react-redux';
import { removeUploadFile, setToggleOpen } from '../../../../../redux/uploadReducer';
import './UploadFile.css'

export default function UploadFile({ file }) {
    const dispatch = useDispatch()
    console.log(file)
    return (
        <div className='UploadFile'>
            <div className='UploadFile_header'>
                <div>{file.name}</div>
                <div className='UploadFile_close' onClick={() => dispatch(removeUploadFile(file.id))} >x</div>
            </div>
            <div className='UploadFile_content'
                style={{ width: `${file.progress}%` }}>
                {file.progress}%
            </div>
        </div>)
}
