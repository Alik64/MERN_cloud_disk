const Router = require("express")
const User = require("../models/User")
const bcrypt = require('bcryptjs') // npm i bcryptjs
const { check, validationResult } = require("express-validator") // npm i express-validator

const router = new Router()

// Registration
router.post(
    '/registration',
    [
        // validate email and password with express-validator
        check(email, "Uncorrect email").isEmail(),
        check(password, "Password must be longer than 3 and shorter than 12").isLength({ min: 3, max: 12 })
    ],
    async (req, res) => {
        try {
            // Get result of validation and send error msg
            const errors = validationResult(req)
            if (!errors.isEmpty()) {
                return res.status(400).json({ message: "Uncorrect request", errors })
            }

            // Request body composed with email and password
            const { email, password } = req.body

            // verify if User already exist in DB
            const candidate = User.findOne({ email })
            if (candidate) {
                return res.status(400).json({ message: `User with email: ${email} already exist` })
            }

            // if not exist ,create a new user in DB with hashed password
            const hashPassword = await bcrypt.hash(password, 15)
            const user = new User({ email, password: hashPassword })

            // Save new user in DB
            await user.save()

            // Return ok message 
            return res.json({ message: "User was created" })


        } catch (err) {
            console.log(err)
            res.send({ message: "Server error" })
        }
    })

module.exports = router;