'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class goal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  goal.init({
    weight: DataTypes.INTEGER,
    body_fat: DataTypes.INTEGER,
    chest: DataTypes.INTEGER,
    hip: DataTypes.INTEGER,
    waist: DataTypes.INTEGER,
    shoulder: DataTypes.INTEGER,
    thigh: DataTypes.INTEGER,
    custom1: DataTypes.INTEGER,
    custom2: DataTypes.INTEGER,
    custom3: DataTypes.INTEGER,
    custom4: DataTypes.INTEGER,
    custom5: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'goal',
  });
  return goal;
};