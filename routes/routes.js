const express = require('express')
const router = express.Router()
const studentRouter = require('./studentRoute')
const subjectRouter = require('./subjectRoute')
const teacherRouter = require('./teacherRoute')

router.get('/', (req, res) => {
    res.render('home')
})
router.use('/students', studentRouter)
router.use('/subjects', subjectRouter)
router.use('/teachers', teacherRouter)


module.exports = router