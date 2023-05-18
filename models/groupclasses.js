'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupClasses extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GroupClasses.init({
    idControlClass: DataTypes.STRING,
    idControlGroup: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GroupClasses',
  });
  return GroupClasses;
};