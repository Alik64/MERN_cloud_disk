import React from 'react'
import { TransitionGroup, CSSTransition } from "react-transition-group"
import { useDispatch, useSelector } from 'react-redux'

import File from './File/File'
import './FileList.css'

import empty from '../../../assets/images/travolta.gif'
import { useEffect } from 'react'
import { getFiles } from '../../../actions/file'




export default function FileList() {

    const files = useSelector(state => state.files.files)
    const vue = useSelector(state => state.files.vue)

    const currentDir = useSelector(state => state.files.currentDir)
    const dispatch = useDispatch()


    if (files.length === 0) return <div className='empty'><div><img src={empty} alt="" /></div></div>
    return (
        <div className="fileList">
            <div className="fileList_header">
                <div className="fileList_name">Name</div>
                <div className="fileList_date">Date</div>
                <div className="fileList_size">Size</div>
            </div>
            <TransitionGroup className={vue === "folder" ? 'folder-vue' : undefined}>
                {files.map(file =>
                    <CSSTransition
                        key={file._id}
                        timeout={500}
                        classNames={'file'}
                        exit={false} >
                        <File file={file} />
                    </CSSTransition>
                )}

            </TransitionGroup>

        </div>
    )
}
