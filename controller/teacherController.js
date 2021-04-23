const teacher = require('../models/teacher')
const {Teacher} = require('../models/index')

class TeacherController {
    static show(req,res){
        Teacher.findAll()
            .then((data) => {
                res.render('teacherList', {data:data})
            })
            .catch((err) =>{
                 console.log(err)
                 res.send(err)
        })   
    }
}

module.exports = TeacherController