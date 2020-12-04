"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class body_part extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // 유저의 아이디와 연관!
      body_part.belongsTo(models.user, {
        foreignKey: {
          name: "user_id",
          allowNull: false,
        },
        onDelete: "CASCADE",
      });
    }
  }
  body_part.init(
    {
      body_part: DataTypes.STRING,
      goal: DataTypes.FLOAT,
      user_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "body_part",
      freezeTableName: true,
    }
  );
  return body_part;
};
