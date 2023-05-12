'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Certificate extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Certificate.init({
    idCourseControl: DataTypes.STRING,
    idUserControl: DataTypes.STRING,
    conclusionDate: DataTypes.DATE
  }, {
    sequelize,
    modelName: 'Certificate',
  });
  return Certificate;
};