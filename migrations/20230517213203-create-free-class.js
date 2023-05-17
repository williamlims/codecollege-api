'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('FreeClasses', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
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
      level: {
        type: Sequelize.INTEGER
      },
      subject: {
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
    await queryInterface.dropTable('FreeClasses');
  }
};