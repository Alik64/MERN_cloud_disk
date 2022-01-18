const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
require('dotenv').config()
const authRouter = require("./routes/auth.routes")
const app = express()
const PORT = config.get('serverPort')
const corsMiddleware = require('./middleware/cors.middleware')

app.use(corsMiddleware)
// to parse JSON 
app.use(express.json())
// use (url , router)
app.use("/api/auth", authRouter)
// cors




const start = async () => {
    try {
        await mongoose.connect(process.env.REACT_APP_MONGODB_URL)

        app.listen(PORT, () => {
            console.log(`server is deployed on port ${PORT}`)

        })
    } catch (e) {
        console.log(e)
    }
}

start()
