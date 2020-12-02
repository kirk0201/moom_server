"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  user.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      password: DataTypes.STRING,
      birth: DataTypes.DATEONLY,
      sex: DataTypes.STRING,
      type: DataTypes.STRING,
      promise: DataTypes.STRING,
      profile: DataTypes.STRING,
      custom1: DataTypes.STRING,
      custom2: DataTypes.STRING,
      custom3: DataTypes.STRING,
      custom4: DataTypes.STRING,
      custom5: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "user",
      timestamps: true,
    }
  );
  return user;
};
