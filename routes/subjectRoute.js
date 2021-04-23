const express = require('express')
const subjectRouter = express.Router()
const SubjectController = require('../controller/subjectController')

subjectRouter.get('/', SubjectController.show)
//get the form page

module.exports = subjectRouter