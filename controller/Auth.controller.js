const jwt = require('jsonwebtoken')
require('dotenv').config()
const {User} =require('../Model/user.model')

const loginUser =async(req, res,next) => {
    const username = req.body.username
    const user = {username:username}

    const accessToken =jwt.sign(user,process.env.ACCESS_TOKEN_SECRET)
    res.json({accessToken: accessToken})
}

const Getuser = async(req,res,next) => {
    // middlewareAuth.authenticateToken(req,res,next)
    // console.log(req.user)
    const user = await User.findOne({username:req.user.username})
    res.json(user)
}
  
  module.exports = {
    loginUser,
    Getuser
}