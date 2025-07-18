'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Supplier extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Supplier.hasMany(models.Purchase, {
        foreignKey: 'supplier',
        onDelete: 'CASCADE',
        onUpdate: 'CASCADE'
      });
    }
  }
  Supplier.init({
    supplierid: {
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
      type: DataTypes.INTEGER
    },
    name: { type: DataTypes.STRING(100), allowNull: false },
    address: { type: DataTypes.TEXT, allowNull: false },
    phone: { type: DataTypes.STRING(20), allowNull: false }
  }, {
    sequelize,
    modelName: 'Supplier',
  });
  return Supplier;
};