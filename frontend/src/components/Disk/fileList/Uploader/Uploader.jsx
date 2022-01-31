import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { setToggleOpen } from '../../../../redux/uploadReducer';
import { v4 as uuidv4 } from 'uuid';
import './Uploader.css'
import UploadFile from './UplodFile/UploadFile';

export default function Uploader() {
    const dispatch = useDispatch()

    const closeHandler = () => {
        dispatch(setToggleOpen(false))
    }
    const files = useSelector(state => state.uploader.files)
    // const files = [
    //     { id: 1, progress: 25, name: "file one" },
    //     { id: 2, progress: 50, name: "file one" },
    //     { id: 3, progress: 30, name: "file one" },
    //     { id: 4, progress: 50, name: "file one" },
    //     { id: 5, progress: 75, name: "file one" },

    // ]

    return <div className='Uploader'>
        <div className='Uploader_header'>
            <div>Downloads</div>
            <button className='Uploader_close' onClick={() => closeHandler()}>X</button>
        </div>
        <div className='Uploader_files'>
            {files.map(file => < UploadFile key={uuidv4()} file={file} />)}
        </div>

    </div>;
}
