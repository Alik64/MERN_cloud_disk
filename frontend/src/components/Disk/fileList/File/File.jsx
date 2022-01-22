import React from 'react'
import './File.css'
import folder from '../../../../assets/images/folder.png'
import docs from '../../../../assets/images/file.svg'
import { useDispatch, useSelector } from 'react-redux'
import { pushToStack, setCurrentDir } from '../../../../redux/fileReducer'

export default function File({ file }) {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)

    const openFolderHandler = (file) => {
        if (file.type === 'dir') {
            dispatch(pushToStack(currentDir))
            dispatch(setCurrentDir(file._id))
        }

    }

    return (
        <div className='File' onClick={() => openFolderHandler(file)}>
            <img
                className='File_img'
                src={file.type === "dir" ? folder : docs}
                alt="type" />

            <div className='File_name'>{file.name}</div>
            <div className='File_date'>{file.date.slice(0, 10)}</div>
            <div className='File_size'>{file.size} Gb</div>
        </div>
    )
}
