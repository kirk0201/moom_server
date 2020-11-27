'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class chest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      chest.belongsTo(models.user, {
        foreignKey: { 
          name: 'user_id', 
          allowNull: false 
        },
          onDelete: 'CASCADE',
      })
    }
  };
  chest.init({
    value: DataTypes.INTEGER,
    user_id: DataTypes.INTEGER,
    scheldule: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'chest',
  });
  return chest;
};