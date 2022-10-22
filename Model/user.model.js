// import mongoose from "mongoose";
const mongoose = require("mongoose")
const schema = new mongoose.Schema({ id: 'string', name: 'string' });
const Task = mongoose.model('Task', schema);

const schemauser = new mongoose.Schema({ username: 'string', password: 'string' });
const User = mongoose.model('User', schemauser);

module.exports ={Task,User}