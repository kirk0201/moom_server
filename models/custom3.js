'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class custom3 extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      custom3.belongsTo(models.user, {
        foreignKey: { 
          name: 'user_id', 
          allowNull: false 
        },
          onDelete: 'CASCADE',
      })
    }
  };
  custom3.init({
    value: DataTypes.FLOAT,
    user_id: DataTypes.INTEGER,
    schedule: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'custom3',
    freezeTableName: true,
  });
  return custom3;
};