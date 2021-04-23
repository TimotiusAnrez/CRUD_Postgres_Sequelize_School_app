'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Student extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  Student.init({
    firstname: {
      type:DataTypes.STRING,
      allowNull:false
    },
    lastname: {
      type:DataTypes.STRING,
      allowNull:false
    },
    email: {
      type:DataTypes.STRING,
      allowNull:false
    },
    gender: {
      type:DataTypes.STRING,
      allowNull:false
    },
    birthdate: {
      type:DataTypes.STRING,
      allowNull:false
    },
  }, {
    sequelize,
    hooks:{
      beforeValidate: function() {
        console.log('before validate')
      },
      afterValidate: function(){
        console.log('after validate')
      },
      beforeCreate: function (params, options){
        if(params.gender === 'female'){
          params.firstname += 'siswi'
        }else{
          params.firstname += 'siswa'
        }
      },
      afterCreate: function(params, options){
        console.log(params)
      },
      afterFind: function(params, options){

      }
    },  
    modelName: 'Student',
  });
  return Student;
};