const fs = require('fs') // module to work with file system
const File = require('../models/File')
const config = require('config')


class FileService {

    // Creation of folders
    createDir(file) {
        const filePath = `${config.get('filePath')}/${file.user}/${file.path}`
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
    deleteFile(file) {
        const path = this.getPath(file)
        if (file.type === 'dir') {
            // delete folders
            fs.rmdirSync(path)
        } else {
            //delete files
            fs.unlinkSync(path)
        }
    }

    getPath(file) {
        return config.get('filePath') + '/' + file.user + '/' + file.path
    }
}


module.exports = new FileService()