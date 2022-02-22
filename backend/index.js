const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
require('dotenv').config()
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
app.use(express.static(path.join(process.env.PWD, 'static')));


// Routes => app.use(url , router)
app.use("/api/auth", authRouter)
app.use("/api/files", fileRouter)





const start = async () => {
    try {
        await mongoose.connect(process.env.REACT_APP_MONGODB_URL);

        app.listen(PORT, () => {
            console.log(`server is deployed on port ${PORT}`)

        })
    } catch (e) {
        console.log(e)
    }
}

start()
