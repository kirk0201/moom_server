'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class custom5 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      custom5.belongsTo(models.user, {
        foreignKey: { 
          name: 'user_id', 
          allowNull: false 
        },
          onDelete: 'CASCADE',
      })
    }
  };
  custom5.init({
    value: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    scheldule: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'custom5',
  });
  return custom5;
};