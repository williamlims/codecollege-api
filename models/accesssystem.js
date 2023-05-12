'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class AccessSystem extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  AccessSystem.init({
    idUserControl: DataTypes.STRING,
    accessDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'AccessSystem',
  });
  return AccessSystem;
};