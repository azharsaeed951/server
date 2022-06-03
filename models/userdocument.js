"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class UserDocument extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  UserDocument.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      user_id: DataTypes.INTEGER,
      identification: DataTypes.STRING,
      identification_approve: DataTypes.INTEGER,
      vehicle_registration: DataTypes.STRING,
      vehicle_registration_approve: DataTypes.INTEGER,
      driving_license: DataTypes.STRING,
      driving_license_approve: DataTypes.INTEGER,
      vehicle_insurance: DataTypes.STRING,
      vehicle_insurance_approve: DataTypes.INTEGER,
      updated: DataTypes.DATE,
      created: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "UserDocument",
      tableName: "user_document",
      timestamps: false,
    }
  );
  return UserDocument;
};
