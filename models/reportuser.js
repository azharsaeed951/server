"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class ReportUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  ReportUser.init(
    {
      id: {
        allowNull: false,
        autoIncrement: true,
        type: DataTypes.INTEGER,
        primaryKey: true,
      },
      user_id: DataTypes.INTEGER,
      report_reason_title: DataTypes.STRING,
      report_user_id: DataTypes.INTEGER,
      report_reason_id: DataTypes.INTEGER,
      description: DataTypes.TEXT,
      created: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "ReportUser",
      tableName: "report_user",
      timestamps: false,
    }
  );
  return ReportUser;
};
