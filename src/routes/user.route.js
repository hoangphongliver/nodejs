const express = require('express');
const router = express.Router();
const UserController = require('../controller/user.controller');

router.post('/login', UserController.login)
router.post('/register', UserController.register)
router.post('/logout', UserController.logout)
router.get('/getUserProfile', UserController.getUserProfile)


module.exports = router;