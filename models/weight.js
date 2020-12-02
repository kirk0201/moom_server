'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class weight extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      weight.belongsTo(models.user, {
        foreignKey: { 
          name: 'user_id', 
          allowNull: false 
        },
          onDelete: 'CASCADE',
      })
    }
  };
  weight.init({
    value: DataTypes.FLOAT,
    user_id: DataTypes.INTEGER,
    schedule: DataTypes.DATEONLY
  }, {
    sequelize,
    modelName: 'weight',
    freezeTableName: true
  });
  return weight;
};