'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class body_fat extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      body_fat.belongsTo(models.user, {
        foreignKey: { 
          name: 'user_id', 
          allowNull: false 
        },
          onDelete: 'CASCADE',
      })
    }
  };
  body_fat.init({
    value: DataTypes.FLOAT,
    user_id: DataTypes.INTEGER,
    scheldule: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'body_fat',
    freezeTableName: true,
  });
  return body_fat;
};