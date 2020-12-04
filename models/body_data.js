"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class body_data extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 유저의 아이디와 연관!, body_part의 id와 연관
      body_data.belongsTo(models.user, {
        foreignKey: {
          name: "user_id",
          allowNull: false,
        },
        onDelete: "CASCADE",
      });
      body_data.belongsTo(models.body_part, {
        foreignKey: {
          name: "body_part_id",
          allowNull: false,
        },
        onDelete: "CASCADE",
      });
    }
  }
  body_data.init(
    {
      value: DataTypes.FLOAT,
      schedule: DataTypes.DATEONLY,
      user_id: DataTypes.INTEGER,
      body_part_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "body_data",
      freezeTableName: true,
    }
  );
  return body_data;
};
