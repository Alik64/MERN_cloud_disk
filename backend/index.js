const express = require('express')
const mongoose = require('mongoose')
const config = require('config')

require('dotenv').config();


const fileUpload = require('express-fileupload') // npm i express-fileupload
const authRouter = require("./routes/auth.routes")
const fileRouter = require("./routes/file.routes")
const app = express()
const PORT = process.env.PORT || 5000
const corsMiddleware = require('./middleware/cors.middleware')
const filePathMiddleware = require('./middleware/filepath.middleware')
const path = require('path')
const cors = require("cors")

// Upload files
app.use(fileUpload({}))
// Allow CORS
app.use(corsMiddleware)
// path middleware

app.use(filePathMiddleware(path.resolve(__dirname, 'files')))
// to parse JSON 
app.use(express.json())

// path to static files
app.use('/static', express.static('static'))


// Routes => app.use(url , router)
app.use("/api/auth", authRouter)
app.use("/api/files", fileRouter)





const start = async () => {
    try {

        await mongoose.connect(process.env.REACT_APP_MONGODB_URL, { useNewUrlParser: true, useUnifiedTopology: true })
        mongoose.connection.once('open', function () {
            console.log('Conection has been made!');
        }).on('error', function (error) {
            console.log('Error is: ', error);
        });
        app.listen(PORT, () => {
            console.log(`server is deployed on port ${PORT}`)

        })
    } catch (e) {
        console.log(e)
    }
}

start()
