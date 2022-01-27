import React from 'react'
import './File.css'
import folder from '../../../../assets/images/folder.png'
import garbage from '../../../../assets/images/garbage.png'
import download from '../../../../assets/images/download.png'
import docs from '../../../../assets/images/file.svg'
import { useDispatch, useSelector } from 'react-redux'
import { pushToStack, setCurrentDir } from '../../../../redux/fileReducer'
import { downloadFile } from '../../../../actions/file'

export default function File({ file }) {
    const dispatch = useDispatch()
    const currentDir = useSelector(state => state.files.currentDir)

    const openFolderHandler = (file) => {
        if (file.type === 'dir') {
            dispatch(pushToStack(currentDir))
            dispatch(setCurrentDir(file._id))
        }

    }
    const downloadHandler = (e) => {
        e.stopPropagation()
        downloadFile(file)
    }
    return (
        <div className='File' onClick={() => openFolderHandler(file)}>
            <img
                className='File_img'
                src={file.type === "dir" ? folder : docs}
                alt="type" />

            <div className='File_name'>{file.name}</div>

            {file.type !== 'dir' && <img src={download} alt="download" title='Download'
                className='File_download File_ico' onClick={(e) => downloadHandler(e)} />}
            <img src={garbage} alt="delete" title='Delete' className='File_delete File_ico' />
            <div className='File_date'>{file.date.slice(0, 10)}</div>
            <div className='File_size'>{file.size} </div>

            {/* <div className='File_size'>{parseFloat(file.size / 1048576).toFixed(2)} Mb</div> */}
        </div>
    )
}
