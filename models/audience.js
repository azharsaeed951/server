"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Audience extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Audience.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      user_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
      country: DataTypes.STRING,
      min_age: DataTypes.INTEGER,
      max_age: DataTypes.INTEGER,
      gender: DataTypes.STRING,
      created: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "Audience",
      tableName: "audience",
      timestamps: false,
    }
  );
  return Audience;
};
