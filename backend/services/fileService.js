const fs = require('fs') // module to work with file system
const File = require('../models/File')
const config = require('config')


class FileService {

    // Creation of folders
    createDir(req, file) {
        const filePath = this.getPath(req, file)
        return new Promise(((resolve, reject) => {
            try {
                if (!fs.existsSync(filePath)) {
                    fs.mkdirSync(filePath, { recursive: true })
                    return resolve({ message: 'File was created' })
                } else {
                    return reject({ message: "File already exist" })
                }
            } catch (e) {
                return reject({ message: 'File error' })
            }
        }))
    }
    getPath(req, file) {
        return req.filePath + '/' + file.user + '/' + file.path
    }
    deleteFile(req, file) {
        const path = this.getPath(req, file)
        if (file.type === 'dir') {
            // delete folders
            fs.rmdirSync(path)
        } else {
            //delete files
            fs.unlinkSync(path)
        }
    }


}


module.exports = new FileService()