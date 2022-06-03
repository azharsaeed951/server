"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class VerificationRequest extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  VerificationRequest.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      user_id: DataTypes.INTEGER,
      attachment: DataTypes.STRING,
      verified: DataTypes.INTEGER,
      update_time: DataTypes.DATE,
      created: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "VerificationRequest",
      tableName: "verification_request",
      timestamps: false,
    }
  );
  return VerificationRequest;
};
