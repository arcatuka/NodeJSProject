// import {taskcontroller} from '../controller/controller.js'
// import {parseRequestBody} from '../middleware/requestBody.js'
// const taskRouter ={
//     GET: {
//         controller: taskcontroller.getAllData,
//         middleware:[parseRequestBody]
//     },
//     // GET: {
//     //     controller: taskcontroller.getDataByID,
//     //     middleware:[]
//     // },
//     POST: {
//         controller: taskcontroller.addData,
//         middleware:[parseRequestBody]
//     },
//     PUT: {
//         controller: taskcontroller.getAllData,
//         middleware:[parseRequestBody]
//     },
//     PATCH: {
//         controller: taskcontroller.getAllData,
//         middleware:[parseRequestBody]
//     },
//     DELETE: {
//         controller: taskcontroller.getAllData,
//         middleware:[parseRequestBody]
//     }
// }

// function getRouter(request)
// {
//     const url = request.url
//     const method = request.method
//     const endPoint = url.split('/')[1]

//     const currentRouteData = taskRouter[method]
// }
// import express from 'express';
const express = require('express')
const router = express.Router();
// const data={}
// data.task = require('../database/data.json')
const taskController = require('../controller/controller')

//Task
router.get('/',taskController.getAllTask)

router.get('/:id',taskController.getTaskbyID)

router.post('/',taskController.postTask)

router.delete('/:id',taskController.deleteTask)

module.exports = router;


// export {taskRouter}

