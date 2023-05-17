'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class FreeClass extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  FreeClass.init({
    idControl: DataTypes.STRING,
    nameClass: DataTypes.STRING,
    description: DataTypes.STRING,
    level: DataTypes.INTEGER,
    subject: DataTypes.INTEGER,
    linkYoutube: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'FreeClass',
  });
  return FreeClass;
};