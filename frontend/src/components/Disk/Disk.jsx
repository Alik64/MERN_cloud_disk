import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { getFiles, uploadFile } from '../../actions/file'
import { popFromStack, setCurrentDir, togglePopUp, setVue } from '../../redux/fileReducer'
import { setToggleOpen } from '../../redux/uploadReducer'
import Preloader from '../Preloader/Preloader'
import './Disk.css'
import FileList from './fileList/FileList'
import Uploader from './fileList/Uploader/Uploader'
import PopUp from './PopUp/PopUp'
import lister from '../../assets/images/lister.png'
import folderer from '../../assets/images/folderer.png'



export default function Disk() {
    const isOpen = useSelector(state => state.uploader.isOpen)
    const isFetching = useSelector(state => state.user.isFetching)
    const currentDir = useSelector(state => state.files.currentDir)

    const display = useSelector(state => state.files.display)
    const folderPathStack = useSelector(state => state.files.folderPathStack)
    const [dragEnter, setDragEnter] = useState(false)
    const [sort, setSort] = useState('filter');

    const dispatch = useDispatch()

    const popUpHandler = () => {
        dispatch(togglePopUp("flex"))
    }
    const backNavHandler = () => {
        const index = folderPathStack.indexOf(folderPathStack[folderPathStack.length - 1])

        dispatch(popFromStack(index))
        dispatch(setCurrentDir(folderPathStack[folderPathStack.length - 1]))
    }
    const fileUploadHandler = (e) => {

        const files = [...e.target.files]
        files.forEach(file => dispatch(uploadFile(file, currentDir)))
        dispatch(setToggleOpen(true))
    }
    const onDragEnterHandler = (event) => {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(true)
    }
    const onDragLeaveHandler = (event) => {
        event.preventDefault()
        event.stopPropagation()
        setDragEnter(false)
    }
    const onDropHandler = (e) => {
        e.preventDefault()
        e.stopPropagation()
        console.log(e)
        const files = [...e.dataTransfer.files]

        files.forEach(file => dispatch(uploadFile(file, currentDir)))
        setDragEnter(false)
        dispatch(setToggleOpen(true))

    }



    useEffect(() => {
        dispatch(getFiles(currentDir, sort))

    }, [currentDir, sort])

    if (isFetching) return <Preloader />

    return (!dragEnter ?

        <div className="disk" onDragEnter={onDragEnterHandler} onDragLeave={onDragLeaveHandler} onDragOver={onDragEnterHandler}>
            <PopUp display={display} />
            <div className="disk_btns">
                <div className='disk_mainBtn'>
                    {currentDir && <button className="disk_back btn" onClick={backNavHandler}>Back</button>}
                    <button className="disk_newFolder btn" onClick={popUpHandler}>New folder</button>
                    <div className="disk_upload">
                        <label htmlFor="diskUploadInput" className="disk_uploadLabel">Upload file</label>
                        <input
                            onChange={(e) => fileUploadHandler(e)} multiple={true}
                            type="file" id='diskUploadInput' className="diskUploadInput" />
                    </div>
                </div>
                <div className='disk_secondBtn'>
                    <div className="disk_vueBtn">

                        <img src={lister} alt="" className='lister' onClick={() => dispatch(setVue("list"))} />
                        <img src={folderer} alt="" className='lister' onClick={() => dispatch(setVue("folder"))} />
                    </div>

                    <select className='disk_select' value={sort} onChange={(e) => setSort(e.target.value)}>
                        <option value="name">Name</option>
                        <option value="type">Type</option>
                        <option value="date">Date</option>
                    </select>

                </div>



            </div>
            <FileList />
            {isOpen && <Uploader />}
        </div>
        :
        <div className='disk_dropArea'
            onDrop={onDropHandler}
            onDragLeave={onDragLeaveHandler} onDragOver={onDragEnterHandler}>
            <h3 >Drop your file here ...</h3>
        </div >
    )
}
