const express = require('express')
const teacherRouter = express.Router()
const TeacherController = require('../controller/teacherController')

teacherRouter.get('/', TeacherController.show)
//get the form page

module.exports = teacherRouter