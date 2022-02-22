import React, { useEffect } from 'react'
import './File.css'
import folder from '../../../../assets/images/folder.png'
import garbage from '../../../../assets/images/garbage.png'
import download from '../../../../assets/images/download.png'
import docs from '../../../../assets/images/file.png'
import { useDispatch, useSelector } from 'react-redux'
import { pushToStack, setCurrentDir } from '../../../../redux/fileReducer'
import { deleteFile, downloadFile, getFiles } from '../../../../actions/file'
import sizeFormat from '../../../../utils/sizeFormat'

export default function File({ file }) {
    const vue = useSelector(state => state.files.vue)
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

    const deleteFileHandler = (e) => {
        e.stopPropagation()
        console.log(file)
        dispatch(deleteFile(file))
    }

    return (
        vue == "list"
            ? <div className='File' onClick={() => openFolderHandler(file)}>
                <img
                    className='File_img'
                    src={file.type === "dir" ? folder : docs}
                    alt="type" />

                <div className='File_name'>{file.name}</div>

                {file.type !== 'dir' && <img src={download} alt="download" title='Download'
                    className='File_download File_ico' onClick={(e) => downloadHandler(e)} />}

                <img src={garbage} alt="delete" title='Delete' className='File_delete File_ico' onClick={(e) => deleteFileHandler(e)} />
                <div className='File_date'>{file.date.slice(0, 10)}</div>
                <div className='File_size'>{sizeFormat(file.size)} </div>

                {/* <div className='File_size'>{parseFloat(file.size / 1048576).toFixed(2)} Mb</div> */}
            </div>
            : <div className='folder_File' onClick={() => openFolderHandler(file)}>
                <img
                    className='folder_File_img'
                    src={file.type === "dir" ? folder : docs}
                    alt="type" />

                <div className='folder_File_name'>{file.name}</div>


                <div className='folder_File_date'>{file.date.slice(0, 10)}</div>
                <div className='folder_File_size'>{sizeFormat(file.size)} </div>
                {file.type !== 'dir' && <img src={download} alt="download" title='Download'
                    className='folder_File_download File_ico' onClick={(e) => downloadHandler(e)} />}

                <img src={garbage} alt="delete" title='Delete'
                    className='folder_File_delete File_ico' onClick={(e) => deleteFileHandler(e)} />
                {/* <div className='File_size'>{parseFloat(file.size / 1048576).toFixed(2)} Mb</div> */}
            </div>



    )
}
