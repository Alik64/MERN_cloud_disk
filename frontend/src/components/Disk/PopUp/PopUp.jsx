import React from 'react'
import { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { createFolder } from '../../../actions/file'
import { togglePopUp } from '../../../redux/fileReducer'
import Input from '../../../utils/Input/Input'
import './PopUp.css'

export default function PopUp({ display }) {

    const [folderName, setFolderName] = useState("")
    const currentDir = useSelector(state => state.files.currentDir)
    const dispatch = useDispatch()

    const createFolderHandler = () => {
        dispatch(createFolder(currentDir, folderName))
        setFolderName("")
        dispatch(togglePopUp("none"))
    }
    const popUpHandler = () => {
        dispatch(togglePopUp("none"))
    }

    return (
        <div className='PopUp' style={{ display: display }} onClick={() => popUpHandler()}>
            <div className='PopUp_content' onClick={e => e.stopPropagation()}>
                <div className='PopUp_header'>
                    <h3 className="PopUp_title">Create new folder</h3>
                    <button className='PopUp_close' onClick={() => popUpHandler()}>X</button>
                </div>

                <Input value={folderName} setValue={setFolderName}
                    type="text" placeholder="Folder name" />
                <button className='btn PopUp_btn' onClick={() => createFolderHandler()}>Create</button>

            </div>
        </div>
    )
}
