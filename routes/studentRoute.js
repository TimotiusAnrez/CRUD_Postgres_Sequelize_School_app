const express = require('express')
const studentRouter = express.Router()
const Controller = require('../controller/controller')

studentRouter.get('/', Controller.show)
//get the form page
studentRouter.get('/add', Controller.writeForm)
//post the data to server
studentRouter.post('/add', Controller.writeData)
//get the form page
studentRouter.get('/edit/:id', Controller.updateForm)
//post the data
studentRouter.post('/edit/:id', Controller.updateData)
studentRouter.get('/delete/:id', Controller.delete)

module.exports = studentRouter