// import {readFileJson,writeFileJson} from '../dataSource/taskData.js'
// import {Task} from '../Model/user.model.js'
// import {parseRequestBody} from '../middleware/requestBody.js'

// const taskcontroller ={
//   getAllData,
//   getDataByID,
//   addData
// }
// function getAllData(req,res,task){
//     readFileJson();
//     Task.find({})
//     .then((tasks) => res.end(JSON.stringify(tasks)))
//     .catch((err) => console.log(err))
// }

// function getDataByID(req,res,task){
//     readFileJson();
//     const id = req.url.split("/")[2]
//     if(id){
//         for(let i =0; i < task.length; i++)
//         {
//           if(task[i].id == id)
//           {
//             return res.end("Hello "+ task[i].name)
//           }
//         }
//         return res.end("Dont have any :D")
//     }
  
// }

// function addData(req,res,task){
//     readFileJson(task);
//     parseRequestBody(req).then((task)=>{
//       const newTask = new Task(JSON.parse(task))
//       newTask
//         .save()
//         .then(() =>{
//           console.log("new task is stored!")
//           res.end();
//         })
//         .catch((err) => console.log(err))
//     })
// }

// export {taskcontroller}
const {Task} =require('../Model/user.model')

const getAllTask =async(req, res,next) => {
    const allTask = await Task.find()
    res.json(allTask)
}

const getTaskbyID =async(req, res,next) => {
  const { id } = req.params;
  const findTask = await Task.findOne({id: id})
  return res.json(findTask)
}

const deleteTask =async(req, res,next) => {
  const { id } = req.params;
  const deleteTask = await Task.findOneAndDelete({id: id})
  return res.status(201).send(deleteTask)
}


const postTask =async(req, res,next) => {
  const newTask = new Task({
    ...req.body
  })
  const insertTask = await newTask.save()
  // const task = req.body
  // data.task.push(task)
  return res.status(201).send(insertTask)
}



module.exports ={
  getAllTask,
  postTask,
  deleteTask,
  getTaskbyID
}