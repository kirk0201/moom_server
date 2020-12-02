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
        type: Sequelize.FLOAT,
      },
      body_fat: {
        type: Sequelize.FLOAT,
      },
      chest: {
        type: Sequelize.FLOAT,
      },
      hip: {
        type: Sequelize.FLOAT,
      },
      waist: {
        type: Sequelize.FLOAT,
      },
      shoulder: {
        type: Sequelize.FLOAT,
      },
      thigh: {
        type: Sequelize.FLOAT,
      },
      custom1: {
        type: Sequelize.FLOAT,
      },
      custom2: {
        type: Sequelize.FLOAT,
      },
      custom3: {
        type: Sequelize.FLOAT,
      },
      custom4: {
        type: Sequelize.FLOAT,
      },
      custom5: {
        type: Sequelize.FLOAT,
      },
      user_id: {
        type: Sequelize.INTEGER,
        allowNull: false,
        onDelete: "CASCADE",
        references: {
          model: "users",
          key: "id",
        },
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
