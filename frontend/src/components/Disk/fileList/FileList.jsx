import React from 'react'
import { useSelector } from 'react-redux'
import File from './File/File'
import style from './FileList.module.css'
export default function FileList() {
    const files = useSelector(state => state.files.files).map(file => <File key={file._id} file={file} />)

    return (
        <div className={style.fileList}>
            <div className={style.fileList_header}>
                <div className={style.fileList_name}>Name</div>
                <div className={style.fileList_date}>Date</div>
                <div className={style.fileList_size}>Size</div>
            </div>
            {files}
        </div>
    )
}
