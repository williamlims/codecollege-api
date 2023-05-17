'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Classes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      idCourseControl: {
        type: Sequelize.STRING
      },
      idControl: {
        type: Sequelize.STRING
      },
      nameClass: {
        type: Sequelize.STRING
      },
      description: {
        type: Sequelize.STRING
      },
      moduleControl: {
        type: Sequelize.INTEGER
      },
      moduleOrder: {
        type: Sequelize.INTEGER
      },
      linkYoutube: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Classes');
  }
};