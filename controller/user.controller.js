const {User} =require('../Model/user.model')
const {Auth} =require('../middleware/requestBody.js')


const getAllUser =async(req, res,next) => {
    const allTask = await User.find()
    return res.json(allTask)
}
const postUser =async(req, res,next) => {
    
    const newTask = new User({
      ...req.body
    })
    const insertTask = await newTask.save()
    // const task = req.body
    // data.task.push(task)
    return res.status(201).send(insertTask)
  }

 

  module.exports = {
    getAllUser,
    postUser,

  }