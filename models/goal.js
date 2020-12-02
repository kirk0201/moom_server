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
      goal.belongsTo(models.user, {
        foreignKey: { 
          name: 'user_id', 
          allowNull: false 
        },
          onDelete: 'CASCADE',
      })
    }
  };
  goal.init({
    weight: DataTypes.FLOAT,
    body_fat: DataTypes.FLOAT,
    chest: DataTypes.FLOAT,
    hip: DataTypes.FLOAT,
    waist: DataTypes.FLOAT,
    shoulder: DataTypes.FLOAT,
    thigh: DataTypes.FLOAT,
    custom1: DataTypes.FLOAT,
    custom2: DataTypes.FLOAT,
    custom3: DataTypes.FLOAT,
    custom4: DataTypes.FLOAT,
    custom5: DataTypes.FLOAT,
    user_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'goal',
    freezeTableName: true,
  });
  return goal;
};