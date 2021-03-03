const questionRouter = require('./question.route')
const userRouter = require('./user.route')
const router = require('express').Router()

router.use('/api/questions', questionRouter)

router.use('/api/users', userRouter)

module.exports = router