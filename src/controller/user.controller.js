const userSchema = require('../models/User')

class UserController {

    login(req, res) {

    }

    async register(req, res) {
        const { body } = req

        try {
            const user = new userSchema(body)
            user.save()
            const token = await user.generateAuthToken()
            res.status(201).json({ user, token })
        } catch (error) {
            res.status(400).json(error)
        }
    }

    logout(req, res) {

    }

    async getUserProfile(req, res) {
        try {
            let user = userSchema.find();
            res.json(user)
        } catch (error) {
            res.status(400).json(error)
        }
    }

}

module.exports = new UserController