const express = require('express')
const mongoose = require('mongoose')
const config = require('config')
require('dotenv').config()


const app = express()
const PORT = config.get('serverPort')

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
