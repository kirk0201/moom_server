"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("goal", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      weight: {
        type: Sequelize.INTEGER,
      },
      body_fat: {
        type: Sequelize.INTEGER,
      },
      chest: {
        type: Sequelize.INTEGER,
      },
      hip: {
        type: Sequelize.INTEGER,
      },
      waist: {
        type: Sequelize.INTEGER,
      },
      shoulder: {
        type: Sequelize.INTEGER,
      },
      thigh: {
        type: Sequelize.INTEGER,
      },
      custom1: {
        type: Sequelize.INTEGER,
      },
      custom2: {
        type: Sequelize.INTEGER,
      },
      custom3: {
        type: Sequelize.INTEGER,
      },
      custom4: {
        type: Sequelize.INTEGER,
      },
      custom5: {
        type: Sequelize.INTEGER,
      },
      user_id: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("goal");
  },
};
