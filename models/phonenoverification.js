"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class PhoneNoVerification extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  PhoneNoVerification.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      phone_no: DataTypes.STRING,
      code: DataTypes.INTEGER,
      created: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "PhoneNoVerification",
      tableName: "phone_no_verification",
      timestamps: false,
    }
  );
  return PhoneNoVerification;
};
