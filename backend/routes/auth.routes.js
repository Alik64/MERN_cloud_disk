const Router = require("express")
const User = require("../models/User")
const bcrypt = require("bcryptjs") // npm i bcryptjs
const jwt = require("jsonwebtoken") // npm i jsonwebtoken
const { check, validationResult } = require("express-validator") // npm i express-validator
const config = require("config")
const router = new Router()

// Registration
router.post(
    '/registration',
    [
        // validate email and password with express-validator
        // check(field, message error)
        check('email', "Uncorrect email").isEmail(),
        check('password', "Password must be longer than 3 and shorter than 12").isLength({ min: 3, max: 12 })
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
            const candidate = await User.findOne({ email })
            if (candidate) {
                return res.status(400).json({ message: `User with email: ${email} already exist` })
            }

            // if not exist ,create a new user in DB with hashed password
            const hashPassword = await bcrypt.hash(password, 8)
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
// Login
router.post(
    '/login',
    async (req, res) => {
        try {
            const { email, password } = req.body
            // find user and return err message
            const user = await User.findOne({ email })

            if (!user) {
                return res.status(404).json({ message: "User not found" })
            }
            // Compare password in BD with password in req and send err msg
            const isPassValid = bcrypt.compareSync(password, user.password)
            if (!isPassValid) {
                return res.status(400).json({ message: "Invalid password" })
            }
            // use of JWT - sign(object we put in token, password, duration )
            const token = jwt.sign({ id: user.id }, config.get("secretKey"), { expiresIn: "1h" })
            // return token to client
            return res.json({
                token,
                user: {
                    id: user.id,
                    email: user.email,
                    diskSpace: user.diskSpace,
                    usedSpace: user.usedSpace,
                    avatar: user.avatar
                }
            })

        } catch (err) {
            console.log(err)
            res.send({ message: "Server error" })
        }
    })

module.exports = router;