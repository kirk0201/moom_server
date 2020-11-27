'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('users', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      email: {
        type: Sequelize.STRING
      },
      password: {
        type: Sequelize.STRING
      },
      birth: {
        type: Sequelize.DATEONLY
      },
      type: {
        type: Sequelize.STRING
      },
      promise: {
        type: Sequelize.STRING
      },
      profile: {
        type: Sequelize.STRING
      },
      custom1: {
        type: Sequelize.STRING
      },
      custom2: {
        type: Sequelize.STRING
      },
      custom3: {
        type: Sequelize.STRING
      },
      custom4: {
        type: Sequelize.STRING
      },
      custom5: {
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
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('users');
  }
};