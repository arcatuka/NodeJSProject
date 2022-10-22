const express = require('express')
const router = express.Router();
const AuthController = require('../controller/Auth.controller.js')
const middlewareAuth = require('../middleware/authenticate.js')

router.get('/',middlewareAuth.authenticateToken,AuthController.Getuser)
router.post('/',AuthController.loginUser)
module.exports = router;
