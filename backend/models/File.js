const { model, Schema } = require('mongoose')

const File = new Schema({
    name: { type: String, required: true },
    type: { type: String, required: true },
    accessLink: { type: String },
    size: { type: Number, default: 0 },
    path: { type: String, default: '' },
    user: { type: Schema.Types.ObjectId, ref: 'User' }, // reference to User who add a file
    parent: { type: Schema.Types.ObjectId, ref: 'File' },// ref - Folder in which we are
    childs: [{ type: Schema.Types.ObjectId, ref: 'File' }]// ref - all files in folder

})

module.exports = model('File', File)