import React from 'react';
import './Uploader.css'
import UploadFile from './UplodFile/UploadFile';

export default function Uploader() {

    const files = [
        { id: 1, progress: 50, name: "file one" },
        { id: 2, progress: 50, name: "file one" },
        { id: 3, progress: 50, name: "file one" },
        { id: 4, progress: 50, name: "file one" },
        { id: 5, progress: 50, name: "file one" },

    ]

    return <div className='Uploader'>
        <div className='Uploader_header'>
            <div>Downloads</div>
            <div className='Uploader_close'>X</div>
        </div>
        <div className='Uploader_files'>
            {files.map(file => < UploadFile key={file.id} file={file} />)}
        </div>

    </div>;
}
