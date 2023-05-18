'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class GroupLibrary extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  GroupLibrary.init({
    idControlLibrary: DataTypes.STRING,
    idControlGroup: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'GroupLibrary',
  });
  return GroupLibrary;
};