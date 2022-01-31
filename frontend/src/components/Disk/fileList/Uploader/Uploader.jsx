import React from 'react';
import { useDispatch } from 'react-redux';
import { setToggleOpen } from '../../../../redux/uploadReducer';
import './Uploader.css'
import UploadFile from './UplodFile/UploadFile';

export default function Uploader() {
    const dispatch = useDispatch()

    const closeHandler = () => {
        dispatch(setToggleOpen(false))
    }
    const files = [
        { id: 1, progress: 25, name: "file one" },
        { id: 2, progress: 50, name: "file one" },
        { id: 3, progress: 30, name: "file one" },
        { id: 4, progress: 50, name: "file one" },
        { id: 5, progress: 75, name: "file one" },

    ]

    return <div className='Uploader'>
        <div className='Uploader_header'>
            <div>Downloads</div>
            <div className='Uploader_close' onClick={() => closeHandler()}>X</div>
        </div>
        <div className='Uploader_files'>
            {files.map(file => < UploadFile key={file.id} file={file} />)}
        </div>

    </div>;
}
