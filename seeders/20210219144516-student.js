'use strict';
const e = require('express');
const fs = require('fs')

module.exports = {
  up: (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
      let readSeed = fs.readFileSync('./seeders/students.json', 'utf8')
      let data = JSON.parse(readSeed)
      let newData = []
      data.forEach(element => {
        element.createdAt = new Date();
        element.updatedAt = new Date();
        newData.push(element)
      });
      return queryInterface.bulkInsert('Students', newData, {});
  },

  down: (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     * 
     */
      return queryInterface.bulkDelete('Students', null, {});
  }
 
};
