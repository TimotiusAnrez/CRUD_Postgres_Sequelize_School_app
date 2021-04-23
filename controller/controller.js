const { Student } = require('../models/index')

class Controller {
    //read function
    static show(req,res){
        Student.findAll()
            .then((data) => {
                res.render('list', {data:data})
            })
            .catch((err) =>{
                console.log(err)
                res.send(err)
            })
    }
    //create function
    static writeForm(req,res){
        res.render('addStudentForm') 
    }
    static writeData(req, res){
        let data = req.body
        Student.create(data)
            .then((data) => {
                res.redirect('/students')
            })
            .catch((err) => {
                console.log(err)
                res.send((err))
            })
    }
    //update function
    static updateForm(req, res){
        let idInput = +req.params.id
        Student.findByPk(idInput)
        .then((data) => {
            res.render('editStudentForm',{data:data})
        })
        .catch((err) =>{
            res.render(err)
        })
    }
    static updateData(req,res){
        let dataId = +req.params.id
        
        Student.update({firstname:req.body.firstname,
            lastname:req.body.lastname,
            email:req.body.email,
            gender:req.body.gender,
            birthdate:req.body.birthdate,
            createdAt:req.body.createdAt,
            updatedAt:req.body.updatedAt},{where:{id:dataId}})
            .then(result => {
                res.redirect('/students')
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
        
    }
    static delete(req, res){
        let idInput = +req.params.id
        Student.destroy({where:{id:idInput}})
            .then(result => {
                res.redirect('/students')
            })
            .catch(err => {
                console.log(err)
                res.send(err)
            })
    }
}

module.exports = Controller