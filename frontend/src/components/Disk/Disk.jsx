import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFiles } from '../../actions/file'
import { popFromStack, pushToStack, setCurrentDir, togglePopUp } from '../../redux/fileReducer'
import style from './Disk.module.css'
import FileList from './fileList/FileList'
import PopUp from './PopUp/PopUp'

export default function Disk() {

    const currentDir = useSelector(state => state.files.currentDir)
    const display = useSelector(state => state.files.display)
    const folderPathStack = useSelector(state => state.files.folderPathStack)

    const dispatch = useDispatch()
    const popUpHandler = () => {
        dispatch(togglePopUp("flex"))
    }
    const backNavHandler = () => {
        const index = folderPathStack.indexOf(folderPathStack[folderPathStack.length - 1])

        dispatch(popFromStack(index))
        dispatch(setCurrentDir(folderPathStack[folderPathStack.length - 1]))
    }

    useEffect(() => {
        dispatch(getFiles(currentDir))

    }, [currentDir])
    return (

        <div className={style.disk}>
            <PopUp display={display} />
            <div className={style.disk_btns}>
                {currentDir && <button className={`${style.disk_back} btn`} onClick={() => backNavHandler()}>Back</button>}
                <button className={`${style.disk_newFolder} btn`} onClick={() => popUpHandler()}>New folder</button>
                <div className={style.disk_upload}>
                    <label htmlFor="diskUploadInput" className={style.disk_uploadLabel}>Upload file</label>
                    <input type="file" id='diskUploadInput' />
                </div>
            </div>
            <FileList />
        </div>
    )
}
