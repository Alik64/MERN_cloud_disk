import React, { useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFiles } from '../../actions/file'
import style from './Disk.module.css'
import FileList from './fileList/FileList'
export default function Disk() {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)

    useEffect(() => {
        dispatch(getFiles(currentDir))

    }, [currentDir])


    return (
        <div className={style.disk}>
            <div className={style.disk_btns}>
                <button className='btn'>Back</button>
                <button className='btn'>New folder</button>
            </div>
            <FileList />
        </div>
    )
}
