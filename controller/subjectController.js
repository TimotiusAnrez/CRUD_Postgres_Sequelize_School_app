const {Subject} = require('../models/index')

class SubjectController {
    static show(req,res){
        Subject.findAll()
            .then((data) => {
                console.log(data)
                res.render('subjectList', {data:data})
            })
            .catch((err) =>{
                console.log(err)
                res.send(err)
        })
    }
}

module.exports = SubjectController