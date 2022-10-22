// import http from 'http';
// import chalk from 'chalk';
// import { url } from 'inspector';
// import {taskcontroller} from './controller/controller.js'
// import fs from 'fs'
// import {task} from './dataSource/taskData.js'
// import {taskRouter} from './routes/task-routes.js'
// import mongoose from 'mongoose';
const mongoose= require('mongoose')
// import router from './routes/task-routes.js'
const taskRouter = require('./routes/task-routes.js')
const userRouter = require('./routes/user-routes.js')
const AuthRouter = require('./routes/Auth-routes.js')

const hostname = '127.0.0.1';
const port = 3000;
// import express from 'express';
const express = require('express');
const { Auth } = require('./middleware/requestBody.js');
const app = express()
app.use(express.json())

app.use('/task',taskRouter)
app.use('/user',userRouter)
app.use('/auth',AuthRouter)
//const task = [{"id": 1,"name":"Khang"},{"id": 2,"name":"tk"},{"id": 3,"name":"tt"}]
//var fs = require("fs");
//const mongoose = require('mongoose')

// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'application/json');
//   // res.end('Hello World');
//   console.log(req.url)
//   console.log( req.url.split("/")[2])
//   const route =getRouter(req)
//   const methodName = req.method
//   console.log()
//   route[methodName].controller(req,res,task)
//   //route[methodName]
// });

app.listen(port, () => {
  console.log(`Server running at http://${hostname}:${port}/`);
})
mongoose.connect('mongodb+srv://TK:Tuka1803@cluster0.ksj7qqk.mongodb.net/?retryWrites=true&w=majority');
const db = mongoose.connection
db.on('error', console.error.bind(console,'connection error:'))
db.once('open',function(){
  console.log('we are connected!')
})


// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
//   console.log(chalk.blue('Hello') + ' World' + chalk.red('!'))
// });


//const chalk = require('chalk')
// console.log(chalk.blue('Hello') + ' World' + chalk.red('!'))