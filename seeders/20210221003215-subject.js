'use strict';
const fs = require('fs')

module.exports = {
  up: async (queryInterface, Sequelize) => {
    /**
     * Add seed commands here.
     *
     * Example:
     * await queryInterface.bulkInsert('People', [{
     *   name: 'John Doe',
     *   isBetaMember: false
     * }], {});
    */
   let readSeed = fs.readFileSync('./seeders/subjects.json', 'utf8')
      let data = JSON.parse(readSeed)
      let newData = []
      data.forEach(element => {
        element.createdAt = new Date();
        element.updatedAt = new Date();
        newData.push(element)
      });
      return queryInterface.bulkInsert('Subjects', newData, {});
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
