"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Admin extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Admin.init(
    {
      id: {
        allowNull: false,
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      first_name: { allowNull: false, type: DataTypes.STRING },
      last_name: { allowNull: false, type: DataTypes.STRING },
      email: { allowNull: false, type: DataTypes.STRING },
      password: { allowNull: false, type: DataTypes.STRING },
      role: { allowNull: false, type: DataTypes.STRING },
      active: { allowNull: false, type: DataTypes.INTEGER },
      created: { allowNull: false, type: DataTypes.DATE },
    },
    {
      sequelize,
      timestamps: false,
      tableName: "admin",
      modelName: "Admin",
    }
  );
  return Admin;
};
