// Function that take jwt of user and return user to client

const jwt = require('jsonwebtoken')
const config = require('config')

module.exports = (req, res, next) => {
    //ifnmethod is OPTION return next middleware
    if (req.method === 'OPTIONS') {
        return next()
    }

    try {
        // token is composed of two parts (Bearer token) => split to take just token
        const token = req.headers.authorization.split(' ')[1];
        if (!token) {
            return res.status(401).json({ message: 'Auth error' })
        }
        // decode token verify(token, token from config)
        const decoded = jwt.verify(token, config.get('secretKey')) // here we get user from token
        req.user = decoded // here we get user from token => fileControler.js
        next()
    } catch (e) {
        return res.status(401).json({ message: `${e}` })
    }
}